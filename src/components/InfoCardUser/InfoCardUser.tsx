import React from 'react';
import UserInfo from './UserInfo';
import UserRepos from './UserRepos/index';
import { LoadStatus } from '../../constants/Status';
import { ProgressSpinner } from 'primereact/progressspinner';
import { User } from '../../interfaces/api-types';
import { Route, Switch } from 'react-router-dom';
import RepositoryView from '../RepositoryView/index';
import Error404 from '../Error404';

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
              <div className="p-d-lg-flex p-d-sm-inline p-d-md-inline p-mt-3 information">
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
              <div className="p-ai-center p-m-auto p-d-flex">
                <Error404 />
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
