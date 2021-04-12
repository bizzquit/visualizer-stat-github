import React from 'react';
import UserInfo from './UserInfo';
import UserRepos from '../../containers/UserRepos';
import { LoadStatus } from '../../constants/Status';
import { ProgressSpinner } from 'primereact/progressspinner';
import { User } from '../../interfaces/api-types';
import { Route, Switch } from 'react-router-dom';
import RepositoryView from '../../containers/RepositoryView';

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
              <div className="p-d-lg-flex p-d-sm-inline p-d-md-inline p-m-3 information">
                <UserInfo user={user} />
                <Switch>
                  <Route
                    path="/repositories/:name"
                    render={(props) => <RepositoryView name={props.match.params.name} />}
                  />
                  <Route
                    path="/find"
                    render={() => (
                      <>
                        <div className="p-d-flex user-card">
                          <UserRepos />
                        </div>
                      </>
                    )}
                  />
                </Switch>
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
