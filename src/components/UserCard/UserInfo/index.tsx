import React from 'react';
import { Card } from 'primereact/card';
// import {OrganizationIcon, LocationIcon, MailIcon,PeopleIcon,LinkIcon} from '@primer/octicons-react'
import { User } from '../../../interfaces/api-types';

import './styles.css';

type UserCardProps = {
  user: User;
};

interface IFieldUser<TValue> {
  [key: string]: TValue;
}

const fieldsUser: IFieldUser<string> = {
  bio: '',
  company: 'Организации: ',
  followers: 'Подписчики: ',
  following: 'Подписки: ',
  location: 'Нахождение: ',
  blog: 'Блог: ',
  email: 'email: ',
};

const fieldsArray: JSX.Element[] = [];

/*renderDiff нужно переделать any - уберу*/
const renderDiff = (user: any) => {
  for (const key in user) {
    if (fieldsUser[key]) {
      if (typeof user[key] === 'string' && user[key].indexOf('http') !== -1) {
        fieldsArray.push(
          <li key={key + user.id} className="p-text-bold  p-mb-2">
            {fieldsUser[key]}
            <i className="p-text-normal">
              <a target={'_blank'} href={user[key]}>
                {user[key]}
              </a>
            </i>
          </li>
        );
      } else {
        fieldsArray.push(
          <li key={key + user.id} className="p-text-bold  p-mb-2">
            {fieldsUser[key]}
            <i className="p-text-normal">{user[key]}</i>
          </li>
        );
      }
    }
  }
  return fieldsArray.map((field) => field);
};

const UserInfo: React.FC<UserCardProps> = ({ user }) => {
  const headerContext = (
    <div className="p-d-flex p-flex-column">
      <div className="p-d-flex p-flex-row p-jc-center p-ai-center">
        <h2 className="p-mb-3 p-text-center">{user.login}</h2>
        <a className="pi pi-external-link p-ml-2 p-mt-2" href={user.html_url} target={'_blank'}>
          {' '}
        </a>
      </div>
      <img
        src={user.avatar_url}
        className="p-avatar-circle p-m-auto p-p-1 avatar"
        alt="avatar user"
      />
    </div>
  );

  return (
    <Card
      title={user.name}
      header={headerContext}
      className="p-d-flex p-flex-column p-p-2 p-mr-3 card-user"
      style={{ backgroundColor: 'var(--blue-100)' }}
    >
      <hr className="p-m-0" style={{ border: '1px solid var(--bluegray-500)' }} />
      <ul className="list-fields">{renderDiff(user)}</ul>
    </Card>
  );
};

export default UserInfo;
