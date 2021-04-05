import React from 'react';
import { withRouter } from 'react-router-dom';
import { IRowData } from '../../../interfaces/types';

const ColumnNameRepoTemplate: React.FC<IRowData<any>> = (rowData) => {
  function setRoute() {
    rowData.history.push(`/repositories/${rowData.name}`)
  }

  return (
    <React.Fragment>
      <span className="repo-link" onClick={setRoute}>
        {rowData.name}
      </span>
    </React.Fragment>
  );
};
export default withRouter(ColumnNameRepoTemplate);
