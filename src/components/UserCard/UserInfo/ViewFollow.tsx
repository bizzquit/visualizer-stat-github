import React from 'react';
import { UserCardProps } from '../../../interfaces/types';
import { PeopleIcon, PersonIcon } from '@primer/octicons-react';

const ViewFollow: React.FC<UserCardProps> = ({ user }) => {
  if (user.followers || user.following) {
    return (
      <span className="p-mt-2 p-mb-2">
        <PeopleIcon size={16} className="p-mr-1 p-mt-2" />
        <i className="p-mr-2">
          {user.followers} <b>Подписчиков</b>
        </i>
        <PersonIcon size={16} className="p-mr-1" />
        <i>
          {user.following} <b>Подписок</b>
        </i>
      </span>
    );
  }
  return null;
};
export default ViewFollow;
