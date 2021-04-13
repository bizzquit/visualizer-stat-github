import { Octokit } from '@octokit/core';
import { Contributor, Repository, User } from '../interfaces/api-types';
const octokit = new Octokit({ auth: '1dc6e83184b380e6172ccded0c522341fcdac7ca' });

type Params = {
  type?: string;
  per_page?: number;
};

class Api {
  constructor() {}

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

  getRepoContributors(login: string, repo: string): Promise<Contributor[]> {
    return Api.fetchData(`GET /repos/${login}/${repo}/contributors`);
  }

  getRepoLanguages(login: string, repo: string): Promise<Contributor[]> {
    return Api.fetchData(`GET /repos/${login}/${repo}/languages`);
  }

  getRepoField(
    login: string,
    repo: string,
    field: string,
    per_page: number = 100
  ): Promise<Contributor[]> {
    return Api.fetchData(`GET /repos/${login}/${repo}/${field}`, { per_page });
  }

  getRepoIssuesAndPull(
    login: string,
    repo: string,
    field: string,
    state = 'all',
    page: number = 0,
    per_page: number = 100
  ) {
    //@ts-ignore
    return Api.fetchData(`GET /repos/${login}/${repo}/${field}`, { state, page, per_page });
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

const api = new Api();
export default api;
