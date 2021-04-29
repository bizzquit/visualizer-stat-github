import React from 'react';
import { RepositoryViewProps } from './RepositoryView';
import { GitForkIcon } from '@primer/octicons-react';

const Header: React.FC<RepositoryViewProps> = ({ data }) => {
  return (
    <div className="p-d-flex p-ai-center">
      <section className="repo-header p-mr-3">
        {data.fork ? (
          <h1 className="fork">
            {data.name}
            <GitForkIcon size={24} fill={'red'} />
          </h1>
        ) : (
          <h1>{data.name}</h1>
        )}
      </section>
      <p>{data.description && `~ ${data.description}`}</p>
    </div>
  );
};

export default Header;
