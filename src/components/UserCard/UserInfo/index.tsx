import React from 'react';
import { Card } from 'primereact/card';
// import { User } from '../../../interfaces/api-types';

import './style.css';

/* type UserCardProps = {
  user: User;
}; */

interface IFieldUser<TValue> {
  [key: string]: TValue;
}

// тут надо над типом подумать
const UserInfo: React.FC<any> = ({ user }) => {
  const fieldsUser: IFieldUser<string> = {
    bio: '',
    company: 'Организации: ',
    followers: 'Подписчики: ',
    following: 'Подписки: ',
    location: 'Нахождение: ',
    blog: 'Блог: ',
    email: 'email: ',
  };

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
        className="p-avatar-circle avatar p-m-auto p-p-1"
        alt="avatar user"
        style={{ width: '60%', border: '1px solid var(--bluegray-500)' }}
      />
    </div>
  );

  const fieldsArray: JSX.Element[] = [];

  const renderDiff = () => {
    // console.log(user);
    for (const key in fieldsUser) {
      if (user[key]) {
        if (typeof user[key] === 'string' && user[key].indexOf('http') !== -1) {
          // console.log(user[key].indexOf('http'));
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

  return (
    <Card
      title={user.name}
      header={headerContext}
      style={{
        backgroundColor: 'var(--bluegray-200)',
        border: '1px solid var(--bluegray-500)',
      }}
      className="p-p-2 p-mr-3"
    >
      <hr className="p-m-0" style={{ border: '1px solid var(--bluegray-500)' }} />
      <ul className="list-fields">{renderDiff()}</ul>
    </Card>
  );
};

export default UserInfo;
