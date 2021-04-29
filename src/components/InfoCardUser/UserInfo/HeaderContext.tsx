import React from 'react';
import { LinkIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const HeaderContext: React.FC<UserCardProps> = ({ user }) => {
  return (
    <div className="p-d-flex p-flex-column">
      <div className="p-d-flex p-flex-row p-jc-center p-ai-center">
        <h2 className="p-mb-3 p-text-center">{user.login}</h2>
        <a
          href={user.html_url}
          rel="noopener noreferrer"
          target="_blank"
          className="p-p-1 p-jc-center p-button-text p-ml-2 p-mt-2"
        >
          <LinkIcon size={16} />
        </a>
      </div>
      <img
        src={user.avatar_url}
        className="p-avatar-circle p-m-auto p-p-1 avatar"
        alt="avatar user"
      />
    </div>
  );
};

export default HeaderContext;
