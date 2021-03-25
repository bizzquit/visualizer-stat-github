import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Column } from 'primereact/column';
import { Toast } from 'primereact/toast';
import { EyeIcon, GitPullRequestIcon, CopyIcon } from '@primer/octicons-react';
import classNames from 'classnames';
import { Repository, User } from '../../../interfaces/api-types';
import Api from '../../../api';
import UserReposStat from '../UserReposStat';

import './style.css';

type UserCardProps = {
  user: User;
};

interface IRowData<TValue> {
  [key: string]: TValue;
}

const api = Api.getInstance();

export default ({ user }: UserCardProps) => {
  const [products, setProducts] = useState([] as Repository[]);
  const [reposStat, setReposStat] = useState({} as { [key: string]: number });
  const [loading, setLoading] = useState(true);
  const toast: any = useRef<Toast>(null);

  const sorting = (data: Repository[]) => {
    const sortStars = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
    return sortStars.sort((a: any, b: any) => {
      const aDate: any = new Date(a.updated_at);
      const bDate: any = new Date(b.updated_at);
      return bDate - aDate;
    });
  };

  useEffect(() => {
    api.getPublicReposUser(user.login).then((data) => {
      const sortData: Repository[] = sorting(data);
      setLoading(false);
      setProducts(sortData);

      const stat = sortData.reduce((acc, repo) => {
        const language = repo.language || 'Other';
        acc[language] = acc[language] !== undefined ? acc[language] + 1 : 1;

        return acc;
      }, {} as { [key: string]: number });
      setReposStat(stat);
    });
  }, [user.login]);

  function formatDate(date: string) {
    const format: any = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Intl.DateTimeFormat('ru', format).format(new Date(date));
  }

  const codeBodyTemplate = (rowData: IRowData<string>) => {
    return (
      <React.Fragment>
        <a href={rowData.html_url} target="_blank">
          {rowData.name}
        </a>
      </React.Fragment>
    );
  };

  const starBodyTemplate = (rowData: IRowData<number>) => {
    const starClassName = classNames({
      outofstock: rowData.stargazers_count === 0,
      lowstock: rowData.stargazers_count > 0 && rowData.stargazers_count <= 10,
      instock: rowData.stargazers_count > 10,
    });

    return <div className={starClassName}>{rowData.stargazers_count}</div>;
  };

  const dopBodyTemplate = (rowData: IRowData<string>) => {
    const copyRepo = () => {
      navigator.clipboard
        .writeText(`${rowData.git_url}`)
        .then(() => {
          toast.current?.show({
            severity: 'success',
            summary: 'Вы скопировали репозиторий',
            detail: `${rowData.git_url}`,
            life: 3000,
          });
        })
        .catch((err) => {
          console.log('Что-то пошло не так...', err);
        });
    };
    return (
      <>
        <Button
          user={rowData.git_url}
          className="p-p-1 p-jc-center  p-button-text"
          onClick={copyRepo}
        >
          <CopyIcon size={24} />
        </Button>
      </>
    );
  };

  const addInfoTemplate = (rowData: IRowData<string>) => {
    return (
      <>
        <div className="add-data-row">
          <GitPullRequestIcon size={16} />
          <span className="add-data-info">{rowData.forks_count}</span>
        </div>
        <div className="add-data-row">
          <EyeIcon size={16} />
          <span className="add-data-info">{rowData.watchers_count}</span>
        </div>
      </>
    );
  };

  const dateBodyTemplate = (rowData: IRowData<string>) => {
    return <React.Fragment>{formatDate(rowData.updated_at)}</React.Fragment>;
  };

  return loading ? (
    <ProgressSpinner />
  ) : (
    <div style={{ width: '100%' }}>
      <div className="stat-wrapper">
        <UserReposStat data={reposStat} />
      </div>
      <Toast ref={toast}></Toast>
      <div className="card">
        <DataTable
          value={products}
          rows={10}
          rowsPerPageOptions={[5, 10, 20, 50]}
          className="p-datatable-auto-layout p-datatable-flex-scrollable"
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="с {first} по {last} из {totalRecords}"
        >
          <Column
            field="name"
            header="Name"
            body={codeBodyTemplate}
            filter
            filterPlaceholder="Поиск по названию"
            sortable
          >
            ~
          </Column>
          <Column
            field="updated_at"
            header={<i className="pi pi-calendar" style={{ color: 'var(--primary-color)' }}></i>}
            body={dateBodyTemplate}
            sortable
          >
            ~
          </Column>
          <Column
            field="stargazers_count"
            header={
              <i className="pi pi-star" style={{ color: 'var(--primary-color)' }}>
                stars
              </i>
            }
            body={starBodyTemplate}
            sortable
          >
            ~
          </Column>
          <Column field="language" header="Основной язык" sortable>
            ~
          </Column>
          <Column field="Дополнительное" body={addInfoTemplate}>
            ~
          </Column>
          <Column
            field="Вспомогательное"
            header=""
            className="p-ai-center p-jc-center"
            body={dopBodyTemplate}
          >
            ~
          </Column>
        </DataTable>
      </div>
    </div>
  );
};
