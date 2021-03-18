import { Octokit } from "@octokit/core";
const octokit = new Octokit({ auth: '1dc6e83184b380e6172ccded0c522341fcdac7ca' });

type Params = {
  type?:string,
  per_page?:number
}

export default class Api {
  private constructor() {}
  private static api: Api | undefined;

  static getInstance() {
    if (!this.api) {
      this.api = new Api();
    }
    return this.api;
  }

  fetchUserInfo(login: string) {
    return this.fetchData(`GET /users/${login}`);
  }

  getPublicReposUser(login:string){
    return this.fetchData(`GET /users/${login}/repos`,{type:'public', per_page:100})
  }

  private fetchData(url: string, params?:Params) {
    return octokit.request(url,params).then((res) => {
      if ([404, 500].includes(res.status)) {
        throw res;
      } else {
        return res.data;
      }
    });
  }
}
