import React from 'react';
import { LocationIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const ViewLocation: React.FC<UserCardProps> = ({ user }) => {
  if (user.location) {
    return (
      <span>
        <LocationIcon size={16} className="p-mr-1 p-mt-3" />
        <i>{user.location}</i>
      </span>
    );
  }
  return null;
};

export default ViewLocation;
