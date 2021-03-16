import React from 'react';
import { Card } from 'primereact/card';

import './style.css';

interface IFieldUser<TValue> {
  [key: string]: TValue;
}

export default ({ user }: any) => {
  const fieldsUser: IFieldUser<string> = {
    bio: '',
    // login: 'Ник: ',
    company: 'Организации: ',
    followers: 'Подписчики: ',
    following: 'Подписки: ',
    location: 'Нахождение: ',
    blog: 'Блог: ',
    Email: 'email: ',
  };

  const headerContext = (
    <div className="p-d-flex p-flex-column">
      <div className="p-d-flex p-flex-row p-jc-center p-ai-center">
        <h2 className="p-mb-3 p-text-center">{user.login}</h2>
        <a className="pi pi-link p-ml-2 p-mt-2" href={user.html_url} target={'_blank'}>
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
    for (const key in fieldsUser) {
      if (user[key]) {
        fieldsArray.push(
          <li key={key + user.id} className="p-text-bold  p-mb-2">
            {fieldsUser[key]}
            <i className="p-text-normal">{user[key]}</i>
          </li>
        );
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
