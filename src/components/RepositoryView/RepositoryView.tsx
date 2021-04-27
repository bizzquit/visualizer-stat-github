import React from 'react';
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
  return (
    <section className="repo-info-container p-shadow-5">
      <Header data={data} />
      <Languages data={data} />
      <StarsAndContributorsAvatars data={data} />
      <div className="p-d-flex">
        <IssueRepo data={data} />
        <PullsRepo data={data} />
      </div>
    </section>
  );
};

export default RepositoryView;
