import React from 'react';
import { UserCardProps } from '../../../interfaces/types';
import { LocationIcon } from '@primer/octicons-react';

const ViewLocation: React.FC<UserCardProps> = ({ user }) => {
  if (user.location) {
    return (
      <span>
        <LocationIcon size={16} className="p-mr-1 p-mt-2" />
        <i>{user.location}</i>
      </span>
    );
  }
  return null;
};

export default ViewLocation;
