import React from 'react';
import { Repository } from '../../interfaces/api-types';
import Header from './Header';
import Languages from './Languages';
import IssueRepo from './IssueRepo';
import PullsRepo from './PullsRepo';
import StarsAvatars from './StarsAvatars';

import './styles.css';
import ContributorsAvatars from './ContributorsAvatars';

export type RepositoryViewProps = {
  data: Repository;
};

const RepositoryView: React.FC<RepositoryViewProps> = ({ data }) => {
  return (
    <section className="repo-info-container p-shadow-5">
      <Header data={data} />
      <Languages data={data} />
      <section className="p-d-inline-flex">
        <StarsAvatars data={data} />
        <ContributorsAvatars data={data} />
      </section>

      <div className="p-d-flex p-flex-column">
        <IssueRepo data={data} />
        <PullsRepo data={data} />
      </div>
    </section>
  );
};

export default RepositoryView;
