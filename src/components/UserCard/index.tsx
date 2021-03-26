import React from 'react';
import UserRepos from './UserRepos';
import UserInfo from './UserInfo';
import { LoadStatus } from '../../constants/Status';
import { ProgressSpinner } from 'primereact/progressspinner';
import { User } from '../../interfaces/api-types';
import './styles.css';

type UserCardProps = {
  user: User;
};

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  function showUserData() {
    switch (user.loadStatus) {
      case LoadStatus.Success:
        return (
          <div className="container p-d-lg-flex p-d-sm-block p-m-4">
            <UserInfo user={user} />
            <UserRepos user={user} />
          </div>
        );
      case LoadStatus.Error:
        return (
          <div className="p-ai-center p-mt-4 p-m-auto">
            <h2>Пользователь не найден</h2>
            <p>Попробуйте уточнить логин для поиска</p>
          </div>
        );
      case LoadStatus.Loading:
        return (
          <div className="preload-wrapper">
            <ProgressSpinner />
          </div>
        );
    }
  }

  return <>{showUserData()}</>;
};

export default UserCard;
