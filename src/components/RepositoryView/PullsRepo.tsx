import React, { useEffect, useState } from 'react';
import { RepositoryViewProps } from './index';
import api from '../../api';

const PullsRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openPull, setOpenPull] = useState([]);
  const [closedPull, setClosedPull] = useState([]);

  useEffect(() => {
    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'pulls', 'closed').then((data) => {
      setClosedPull(data);
    });

    api.getRepoIssuesAndPull(`${data.owner?.login}`, data.name, 'pulls', 'open').then((data) => {
      setOpenPull(data);
      setLoading(true);
    });
  }, []);

  // console.log('closedPull', closedPull[0]);

  return (
    <div>
      <h4>Пулл реквесты(pull requests)</h4>
      {loading && (
        <>
          <p>Закрытые (closed): {closedPull.length}</p>
          <p>Открытые (open): {openPull.length}</p>
        </>
      )}
    </div>
  );
};

export default PullsRepo;
