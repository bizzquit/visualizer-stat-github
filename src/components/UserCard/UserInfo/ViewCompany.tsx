import React from 'react';
import { UserCardProps } from '../../../interfaces/types';
import { OrganizationIcon } from '@primer/octicons-react';

const ViewCompany: React.FC<UserCardProps> = ({ user }) => {
  if (user.company)
    return (
      <span>
        <OrganizationIcon size={16} className="p-mr-1 p-mt-2" />
        <i>{user.company}</i>
      </span>
    );
  return null;
};

export default ViewCompany;
