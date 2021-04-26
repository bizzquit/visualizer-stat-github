import React from 'react';
import { OrganizationIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const ViewCompany: React.FC<UserCardProps> = ({ user }) => {
  if (user.company)
    return (
      <span>
        <OrganizationIcon size={16} className="p-mr-1 p-mt-3" />
        <i>{user.company}</i>
      </span>
    );
  return null;
};

export default ViewCompany;
