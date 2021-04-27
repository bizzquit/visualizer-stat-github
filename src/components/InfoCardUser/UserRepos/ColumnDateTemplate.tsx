import React from 'react';
import { IRowData } from '../../../interfaces/types';

function formatDate(date: string) {
  const format: { [x: string]: string } = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  return new Intl.DateTimeFormat('ru', format).format(new Date(date));
}

const ColumnDateTemplate = (rowData: IRowData<string>) => {
  return <React.Fragment>{formatDate(rowData.updated_at)}</React.Fragment>;
};

export default ColumnDateTemplate;
