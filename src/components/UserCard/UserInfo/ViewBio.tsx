import React from 'react';
import { UserCardProps } from '../../../interfaces/types';
import { HeartIcon } from '@primer/octicons-react';

const ViewBio: React.FC<UserCardProps> = ({ user }) => {
  if (user.bio)
    return (
      <span>
        <HeartIcon size={16} className="p-mr-1 p-mt-2" />
        <i>{user.bio}</i>
      </span>
    );
  return null;
};
export default ViewBio;
