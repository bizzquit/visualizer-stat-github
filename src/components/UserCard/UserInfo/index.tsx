import React from 'react';
import { Card } from 'primereact/card';
import { User } from '../../../interfaces/api-types';
import ViewFollow from './ViewFollow';
import ViewCompany from './ViewCompany';
import ViewBio from './ViewBio';
import ViewLocation from './ViewLocation';
import ViewMail from './ViewMail';
import ViewBlog from './ViewBlog';
import HeaderContext from './HeaderContext';
import ViewCountRepos from './ViewCountRepos';

import './styles.css';

export type UserCardProps = {
  user: User;
};

const UserInfo: React.FC<UserCardProps> = ({ user }) => {
  return (
    <Card
      title={user.name}
      header={<HeaderContext user={user} />}
      className="p-d-flex p-flex-column p-p-2 p-mr-3 card-user"
      style={{ backgroundColor: 'var(--blue-100)' }}
    >
      <hr className="p-m-0" style={{ border: '1px solid var(--bluegray-500)' }} />
      <div className="p-d-flex p-flex-column">
        {user.type === 'User' ? (
          <>
            <ViewBio user={user} />
            <ViewFollow user={user} />
            <ViewCompany user={user} />
            <ViewLocation user={user} />
            <ViewMail user={user} />
            <ViewBlog user={user} />
            <ViewCountRepos user={user} />
          </>
        ) : (
          'это не пользователь => Информация отсутствует'
        )}
      </div>
    </Card>
  );
};

export default UserInfo;
