import React from 'react';
import UserRepos from './UserRepos';
import UserInfo from '../../containers/UserInfo';
import { LoadStatus } from '../../constants/Status';
import { ProgressSpinner } from 'primereact/progressspinner';

import './styles.css';

type UserCardProps = {
  user: User;
};

export default ({ user }: UserCardProps) => {
  function showUserData() {
    switch (user.loadStatus) {
      case LoadStatus.Success:
        return (
          <div className="container p-d-lg-flex p-d-sm-block p-m-4">
            <UserInfo />
            <UserRepos />
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

export interface User {
  avatar_url: string;
  bio: string;
  blog: string;
  company: string;
  created_at: string;
  email: string;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: null;
  html_url: string;
  id: number;
  loadStatus: LoadStatus;
  location: null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string;
  type: string;
  updated_at: string;
  url: string;
}
