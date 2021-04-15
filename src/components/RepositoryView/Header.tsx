import React from 'react';
import { RepositoryViewProps } from './index';
import { GitForkIcon } from '@primer/octicons-react';

const Header: React.FC<RepositoryViewProps> = ({ data }) => {
  return (
    <div className="p-d-flex p-ai-center">
      <header className="repo-header p-mr-3">
        {data.fork ? (
          <GitForkIcon size={32} className="p-mr-2" />
        ) : (
          <GitForkIcon size={32} className="p-mr-2" />
        )}
        {data.name}
      </header>
      <h4>{`~ ${data.description}`}</h4>
    </div>
  );
};

export default Header;
