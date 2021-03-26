import { Octokit } from '@octokit/core';
import { Repository, User } from '../interfaces/api-types';
const octokit = new Octokit({ auth: '1dc6e83184b380e6172ccded0c522341fcdac7ca' });

type Params = {
  type?: string;
  per_page?: number;
};

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
    type: string = 'public',
    per_page: number = 100
  ): Promise<Repository[]> {
    return Api.fetchData(`GET /users/${login}/repos`, { type, per_page });
  }

  private static fetchData(url: string, params?: Params) {
    return octokit.request(url, params).then((res) => {
      if ([404, 500].includes(res.status)) {
        throw res;
      } else {
        return res.data;
      }
    });
  }
}
