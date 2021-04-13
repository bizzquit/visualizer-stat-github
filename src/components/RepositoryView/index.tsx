import React, { useEffect } from 'react';
import { Repository } from '../../interfaces/api-types';
import Header from './Header';
import StarsAndContributorsAvatars from './StarsAndContributorsAvatars';
import Languages from './Languages';
import IssueRepo from './IssueRepo';
import PullsRepo from './PullsRepo';

import './styles.css';

export type RepositoryViewProps = {
  data: Repository;
};

const RepositoryView: React.FC<RepositoryViewProps> = ({ data }) => {
  useEffect(() => {}, [data.name]);

  return (
    <section className="repo-info-container">
      <Header data={data} />
      <div>
        <StarsAndContributorsAvatars data={data} />
        <Languages data={data} />
        <div className="p-flex-column">
          <IssueRepo data={data} />
          <PullsRepo data={data} />
        </div>
      </div>
    </section>
  );
};

export default RepositoryView;
