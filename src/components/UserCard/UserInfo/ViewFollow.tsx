import React from 'react';
import { PeopleIcon, PersonIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const rounding = (number: number) => {
  const num = 1000;
  return number < num ? number : `${Math.floor((number / num) * 10) / 10}K`;
};

const ViewFollow: React.FC<UserCardProps> = ({ user }) => {
  if (user.followers || user.following) {
    return (
      <span className="p-mt-2 p-mb-2">
        <PeopleIcon size={16} className="p-mr-1 p-mt-3" />
        <i className="p-mr-2">
          {rounding(user.followers)} <b>Подписчиков</b>
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
