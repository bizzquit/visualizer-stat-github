import React, { useEffect, useRef, useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { CopyIcon } from '@primer/octicons-react';
import { Toast } from 'primereact/toast';
import { Repository } from '../../../interfaces/api-types';
import { IRowData } from '../../../interfaces/types';
import UserReposStat from '../../../containers/UserReposStat';
import ColumnNameRepoTemplate from './ColumnNameRepoTemplate';
import ColumnStarTemplate from './ColumnStarTemplate';
import ColumnInfoTemplate from './ColumnInfoTemplate';
import ColumnDateTemplate from './ColumnDateTemplate';
import { LoadStatus } from '../../../constants/Status';
import SecondaryLanguageTemplate from './SecondaryLanguagesTemplate';

import './styles.css';
import CalendarActivityUser from '../../../containers/CalendarActivityUser';

type UserCardProps = {
  repositoryData: { data: Repository[]; loadStatus: LoadStatus };
  onPage: (e: PaginationEvent) => void;
};

export type PaginationEvent = { first: number; rows: number };

const sorting = (data: Repository[]) => {
  const sortStars = data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  return sortStars.sort((a: any, b: any) => {
    const aDate: any = new Date(a.updated_at);
    const bDate: any = new Date(b.updated_at);
    return bDate - aDate;
  });
};

const UserRepos: React.FC<UserCardProps> = ({ repositoryData, onPage }) => {
  const [repos, setRepos] = useState([] as Repository[]);
  const toast = useRef<Toast>(null);
  const [first, setFirst] = useState(0);
  const rows = 10;

  useEffect(() => {
    if (repositoryData.data) {
      const sortData: Repository[] = sorting(repositoryData.data);
      setRepos(sortData);

      if (repositoryData.loadStatus === LoadStatus.Success) {
        onPage({ first: 0, rows: rows });
      }
    }
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

  return repositoryData.loadStatus === LoadStatus.Loading ? (
    <ProgressSpinner />
  ) : (
    <div style={{ width: '100%' }}>
      <div className="stat-wrapper">
        <UserReposStat />
        <CalendarActivityUser />
      </div>
      <Toast ref={toast} />
      <div className="card">
        <DataTable
          value={repos}
          rows={rows}
          first={first}
          onPage={setNextPage}
          className="p-datatable-auto-layout p-datatable-flex-scrollable table"
          paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="с {first} по {last} из {totalRecords}"
        >
          <Column
            field="name"
            header="Имя репозитория"
            body={ColumnNameRepoTemplate}
            filter
            filterPlaceholder="Поиск по названию"
          />
          <Column
            className="secondary-col"
            field="updated_at"
            header={<i className="pi pi-calendar" style={{ color: 'var(--primary-color)' }} />}
            body={ColumnDateTemplate}
          />
          <Column
            field="stargazers_count"
            header={<i className="pi pi-star" style={{ color: 'var(--primary-color)' }} />}
            body={ColumnStarTemplate}
          />
          <Column field="language" header="Основной язык" />
          <Column
            className="secondary-col"
            header="Придаточные языки"
            body={SecondaryLanguageTemplate}
          />
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
