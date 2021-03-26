import React from 'react';
import { IRowData } from '../../../interfaces/types';
import { EyeIcon, GitPullRequestIcon } from '@primer/octicons-react';

const ColumnInfoTemplate: React.FC<IRowData<string>> = (rowData) => {
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
export default ColumnInfoTemplate;
