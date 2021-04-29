import React from 'react';
import { RepoIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const ViewCountRepos: React.FC<UserCardProps> = ({ user }) => {
  if (user.public_repos)
    return (
      <span>
        <RepoIcon size={16} className="p-mr-1 p-mt-3" />
        <i>
          public repos: <b>{user.public_repos}</b>
        </i>
      </span>
    );
  return null;
};
export default ViewCountRepos;
