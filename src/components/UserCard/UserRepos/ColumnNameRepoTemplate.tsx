import React from 'react';
import { IRowData } from '../../../interfaces/types';

const ColumnNameRepoTemplate: React.FC<IRowData<string>> = (rowData) => {
  return (
    <React.Fragment>
      <a href={rowData.html_url} target="_blank">
        {rowData.name}
      </a>
    </React.Fragment>
  );
};
export default ColumnNameRepoTemplate;
