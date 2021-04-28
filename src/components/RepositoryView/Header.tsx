import React from 'react';
import { RepositoryViewProps } from './RepositoryView';
// import { GitForkIcon } from '@primer/octicons-react';

const Header: React.FC<RepositoryViewProps> = ({ data }) => {
  return (
    <div className="p-d-flex p-ai-center">
      <header className="repo-header p-mr-3">
        {data.fork ? <h3 className="fork">{data.name}</h3> : <h3>{data.name}</h3>}
      </header>
      <h4>{data.description && `~ ${data.description}`}</h4>
    </div>
  );
};

export default Header;
