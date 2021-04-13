import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './index';
import api from '../../api';

const days = (dateCreated: string, dateClosed: string) => {
  const dateStart = new Date(dateCreated);
  const dateEnd = new Date(dateClosed);
  return Math.ceil((dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24));
};

const srednee = (
  data: string[],
  setState: React.Dispatch<React.SetStateAction<number>>,
  dateCreated: string,
  dateEnd: string
) => {
  const array: number[] = data.map((el: any) => days(el[dateCreated], el[dateEnd]));
  if (array.length > 1) {
    const sum = array.reduce((acc, curr) => acc + curr);
    const result: number = Math.floor(sum / array.length);
    setState(result);
  } else {
    setState(array[0]);
  }
};

const IssueRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openIssue, setOpenIssue] = useState([]);
  const [closedIssue, setClosedIssue] = useState([]);
  const [timeClosedIssue, setTimeClosedIssue] = useState(0);
  const [timeUpdateIssue, setTimeUpdateIssue] = useState(0);

  useEffect(() => {
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'issues', 'closed').then((data) => {
      const filterData = data.filter((el: any) => days(el.created_at, el.closed_at) < 365);
      setClosedIssue(filterData);
      srednee(filterData, setTimeClosedIssue, 'created_at', 'closed_at');
    });

    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'issues', 'open').then((data) => {
      const filterData = data.filter((el: any) => days(el.created_at, el.updated_at) < 365);
      setOpenIssue(filterData);
      srednee(filterData, setTimeUpdateIssue, 'created_at', 'updated_at');
      setLoading(true);
    });

    /*api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'stats/punch_card').then((data) => {
      setClosedIssue(data);
    });*/
  }, []);

  return (
    <div>
      <h4>Задачи(issues)</h4>
      {loading && (
        <>
          <p>
            Закрытые (closed): {closedIssue.length} - Среднее время закрытия : {timeClosedIssue} дн.
          </p>
          <p>
            Открытые (open): {openIssue.length} - Среднее время обновления : {timeUpdateIssue} дн.
          </p>
        </>
      )}
    </div>
  );
};

export default IssueRepo;
