import { Octokit } from '@octokit/core';
import { Repository, User } from '../interfaces/api-types';
const octokit = new Octokit({ auth: '1dc6e83184b380e6172ccded0c522341fcdac7ca' });

type UserPublicReposParams = { type: string; per_page: number; page: number; };

export default class Api {
  private constructor() {}
  private static api: Api | undefined;

  static getInstance() {
    if (!this.api) {
      this.api = new Api();
    }
    return this.api;
  }

  fetchUserInfo(login: string): Promise<User> {
    return Api.fetchData(`GET /users/${login}`);
  }

  getUserPublicRepos(
    login: string,
    params: UserPublicReposParams = {
      type: 'public',
      per_page: 10,
      page: 1,
    }
  ): Promise<Repository[]> {
    return Api.fetchData(`GET /users/${login}/repos`, { ...params } );
  }

  private static fetchData(url: string, params?: { [key: string]: any }) {
    return octokit.request(url, params).then((res) => {
      if ([404, 500].includes(res.status)) {
        throw res;
      } else {
        return res.data;
      }
    });
  }
}
