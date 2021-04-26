import React from 'react';
import { MailIcon } from '@primer/octicons-react';
import { UserCardProps } from './index';

const ViewMail: React.FC<UserCardProps> = ({ user }) => {
  if (user.email)
    return (
      <span>
        <MailIcon size={16} className="p-mr-1 p-mt-3" />
        <i>{user.email}</i>
      </span>
    );
  return null;
};

export default ViewMail;
