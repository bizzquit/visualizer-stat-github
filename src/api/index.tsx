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
    return this.fetchData(`https://api.github.com/users/${login}`);
  }

  private async fetchData(url: string) {
    const res = await fetch(url);
    if ([404, 500].includes(res.status)) {
      throw res;
    } else {
      return res.json();
    }
  }
}
