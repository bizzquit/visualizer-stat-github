import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CopyIcon } from '@primer/octicons-react';
import { Toast } from 'primereact/toast';
import { Repository } from '../../../interfaces/api-types';
import { IRowData } from '../../../interfaces/types';
import UserReposStat from '../UserReposStat';
import ColumnNameRepoTemplate from './ColumnNameRepoTemplate';
import ColumnStarTemplate from './ColumnStarTemplate';
import ColumnInfoTemplate from './ColumnInfoTemplate';
import ColumnDateTemplate from './ColumnDateTemplate';

import './styles.css';
import { LoadStatus } from '../../../constants/Status';

type UserCardProps = {
  repositoryData: { data: Repository[], loadStatus: LoadStatus };
  totalRows: number;
  onPage: (e: PaginationEvent) => void;
};

export type PaginationEvent = { first: number, page: number, pageCount: number, rows: number };

const sorting = (data: Repository[]) => {
  const sortStars = data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count);
  return sortStars.sort((a: any, b: any) => {
    const aDate: any = new Date(a.updated_at);
    const bDate: any = new Date(b.updated_at);
    return bDate - aDate;
  });
};

const UserRepos: React.FC<UserCardProps> = ({ repositoryData, totalRows, onPage }) => {
  const [repos, setRepos] = useState([] as Repository[]);
  const [reposStat, setReposStat] = useState({} as { [key: string]: number });
  const toast = useRef<Toast>(null);
  const [first, setFirst] = useState(0);

  useEffect(() => {
    const sortData: Repository[] = sorting(repositoryData.data);
    setRepos(sortData);

    const stat = sortData.reduce((acc, repo) => {
      const language = repo.language || 'Other';
      acc[language] = acc[language] !== undefined ? acc[language] + 1 : 1;

      return acc;
    }, {} as { [key: string]: number });
    setReposStat(stat);
  }, [repositoryData]);

  function setNextPage(e: PaginationEvent) {
    setFirst(e.first);
    onPage(e);
  }

  const OtherBodyTemplate: React.FC<IRowData<string>> = (rowData) => {
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
          alert(`Что-то пошло не так...${err}`);
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

  return (
    <div style={{ width: '100%' }}>
      <div className="stat-wrapper">
        <UserReposStat data={reposStat} />
      </div>
      <Toast ref={toast} />
      <div className="card">
        <DataTable
          lazy
          value={repos}
          rows={10}
          first={first}
          rowsPerPageOptions={[5, 10, 20, 50]}
          totalRecords={totalRows}
          className="p-datatable-auto-layout p-datatable-flex-scrollable"
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="с {first} по {last} из {totalRecords}"
          onPage={setNextPage}
          loading={repositoryData.loadStatus === LoadStatus.Loading}
        >
          <Column
            field="name"
            header="Name"
            body={ColumnNameRepoTemplate}
            filter
            filterPlaceholder="Поиск по названию"
            sortable
          />
          <Column
            field="updated_at"
            header={<i className="pi pi-calendar" style={{ color: 'var(--primary-color)' }} />}
            body={ColumnDateTemplate}
            sortable
          />
          <Column
            field="stargazers_count"
            header={<i className="pi pi-star" style={{ color: 'var(--primary-color)' }} />}
            body={ColumnStarTemplate}
            sortable
          />
          <Column field="language" header="Основной язык" sortable />
          <Column field="Дополнительное" body={ColumnInfoTemplate} />
          <Column
            field="Вспомогательное"
            header=""
            className="p-ai-center p-jc-center"
            body={OtherBodyTemplate}
          />
        </DataTable>
      </div>
    </div>
  );
};

export default UserRepos;
