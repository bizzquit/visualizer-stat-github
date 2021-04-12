import React, { useEffect /*, useState */ } from 'react';
import { RepositoryViewProps } from './index';
import api from '../../api';
import { useState } from 'react';

const filterIssues = (data: any, status: string) => {
  return data.filter((el: any) => el.issue.state === status);
};

const IssueRepo: React.FC<RepositoryViewProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [openIssue, setOpenIssue] = useState<any>(null);
  const [closedIssue, setClosedIssue] = useState<any>(null);

  useEffect(() => {
    api.getRepoField(`${data.owner?.login}`, data.name, 'issues/events').then((data) => {
      const arrClosedIssue = filterIssues(data, 'closed');
      setClosedIssue(arrClosedIssue);
      const arrOpenedIssue = filterIssues(data, 'open');
      setOpenIssue(arrOpenedIssue);
      setLoading(true);
    });
  }, [loading]);

  return (
    <div>
      <h4>Задачи</h4>
      {loading && (
        <>
          <p>закрытые задачи: {closedIssue.length}</p>
          <p>открытые задачи: {openIssue.length}</p>
        </>
      )}
    </div>
  );
};

export default IssueRepo;
