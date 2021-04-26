import React from 'react';
import { IRowData } from '../../../interfaces/types';
import { EyeIcon, GitPullRequestIcon, PeopleIcon } from '@primer/octicons-react';
import { ProgressSpinner } from 'primereact/progressspinner';

const ColumnInfoTemplate: React.FC<IRowData<string>> = (rowData) => {
  return (
    <>
      <div className="add-data-row">
        <GitPullRequestIcon size={12} />
        <span className="add-data-info">{rowData.forks_count}</span>
      </div>
      <div className="add-data-row">
        <EyeIcon size={12} />
        <span className="add-data-info">{rowData.watchers_count}</span>
      </div>
      <div className="add-data-row spinner-row">
        {
          rowData.contributors !== undefined
            ? (
              <>
                <PeopleIcon size={12} />
                <span className="add-data-info">{rowData.contributors}</span>
              </>
            )
            : (<ProgressSpinner style={{width: '12px', height: '12px'}} />)
        }
      </div>
    </>
  );
};
export default ColumnInfoTemplate;
