import React from 'react';
import { UserCardProps } from '../../../interfaces/types';
import { MailIcon } from '@primer/octicons-react';

const ViewMail: React.FC<UserCardProps> = ({ user }) => {
  if (user.email)
    return (
      <span>
        <MailIcon size={16} className="p-mr-1 p-mt-2" />
        <i>{user.email}</i>
      </span>
    );
  return null;
};

export default ViewMail;
