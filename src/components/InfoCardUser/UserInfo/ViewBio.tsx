import React from 'react';
import { HeartIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const ViewBio: React.FC<UserCardProps> = ({ user }) => {
  if (user.bio)
    return (
      <span>
        <HeartIcon size={16} className="p-mr-1 p-mt-3" />
        <i>{user.bio}</i>
      </span>
    );
  return null;
};
export default ViewBio;
