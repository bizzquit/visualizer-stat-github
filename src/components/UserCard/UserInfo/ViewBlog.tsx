import React from 'react';
import { LinkIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const ViewBlog: React.FC<UserCardProps> = ({ user }) => {
  if (user.blog)
    return (
      <span>
        <LinkIcon size={16} className="p-mr-1 p-mt-3" />
        <a href={user.blog} target="_blank">
          {user.blog}
        </a>
      </span>
    );
  return null;
};

export default ViewBlog;
