import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Column } from 'primereact/column';
import classNames from 'classnames';
import { User } from '../index';
import Api from '../../../api';

import './style.css';
import { EyeIcon, GitPullRequestIcon, PeopleIcon } from '@primer/octicons-react';

type UserCardProps = {
  user: User;
};

interface IRowData<TValue> {
  [key: string]: TValue;
}

const api = Api.getInstance();

export default ({ user }: UserCardProps) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const sorting = (data: []) => {
    const sortStars = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
    return sortStars.sort((a: any, b: any) => {
      const aDate: any = new Date(a.updated_at);
      const bDate: any = new Date(b.updated_at);
      return bDate - aDate;
    });
  };

  useEffect(() => {
    api.getPublicReposUser(user.login).then((data) => {
      const sortData: [] = sorting(data);
      setLoading(false);
      setProducts(sortData);
    });
  }, [user.login]);

  function formatDate(date: string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day, month, year].join('/');
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
    return (
      <>
        <Button className="p-m-2 p-jc-center">clone url repo</Button>
        <Button>view repo</Button>
      </>
    );
  };

  const addInfoTemplate = (rowData: IRowData<string>) => {
    return (
      <>
        <div className="add-data-row">
          <GitPullRequestIcon size={16} /><span className="add-data-info">{rowData.forks_count}</span>
        </div>
        <div>
          <EyeIcon size={16} /><span className="add-data-info">{rowData.watchers_count}</span>
        </div>
      </>
    )
  };

  const dateBodyTemplate = (rowData: IRowData<string>) => {
    return <React.Fragment>{formatDate(rowData.updated_at)}</React.Fragment>;
  };

  return loading ? (
    <ProgressSpinner />
  ) : (
    <div style={{ width: '100%' }}>
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
          <Column
            field="Дополнительное"
            body={addInfoTemplate}
          >
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
