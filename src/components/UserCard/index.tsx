import React from 'react';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos';

export default () => {
  return (
    <div
      className="card d-flex flex-row"
      style={{ width: '100%', backgroundColor: 'rgba(201, 205, 208, 0.5)' }}
    >
      <UserInfo />
      <UserRepos />
    </div>
  );
};
