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
  return (
    <>
      {(() => {
        switch (user.loadStatus) {
          case LoadStatus.Success:
            return (
              <div className="p-d-lg-flex p-d-sm-inline p-d-md-inline p-justify-between p-m-3 information">
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
          default:
            return <div className="p-ai-center p-mt-4 p-ml-3" />;
        }
      })()}
    </>
  );
};

export default UserCard;
