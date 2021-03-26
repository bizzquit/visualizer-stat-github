import React from 'react';
import { IRowData } from '../../../interfaces/types';
import classNames from 'classnames';

const little: number = 0;
const middle: number = 10;

const ColumnStarTemplate: React.FC<IRowData<number>> = (rowData) => {
  const starClassName = classNames({
    outStock: rowData.stargazers_count === little,
    lowStock: rowData.stargazers_count > little && rowData.stargazers_count <= middle,
    inStock: rowData.stargazers_count > middle,
  });

  return <div className={`${starClassName} stars`}>{rowData.stargazers_count}</div>;
};

export default ColumnStarTemplate;
