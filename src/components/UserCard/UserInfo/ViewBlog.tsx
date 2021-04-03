import React from 'react';
import { UserCardProps } from '../../../interfaces/types';
import { LinkIcon } from '@primer/octicons-react';

const ViewBlog: React.FC<UserCardProps> = ({ user }) => {
  if (user.blog)
    return (
      <span>
        <LinkIcon size={16} className="p-mr-1 p-mt-2" />
        <a href={user.blog} target="_blank">
          {user.blog}
        </a>
      </span>
    );
  return null;
};

export default ViewBlog;
