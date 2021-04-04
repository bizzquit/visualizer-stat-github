import { connect } from 'react-redux';
import { Repository, User } from '../interfaces/api-types';
import UserRepos, { PaginationEvent } from '../components/UserCard/UserRepos';
import { LoadStatus } from '../constants/Status';
import Api from '../api';
import { setContributorsChunk } from '../actionCreator';

const api = Api.getInstance();
let reposList = [] as Repository[];
let login: string;

export default connect(
  (
    state: { repos: { data: Repository[], loadStatus: LoadStatus, contributorsLoadStatus: LoadStatus }, user: User }
  ) => {
    reposList = state.repos.data;
    login = state.user.login;
    return { repositoryData: state.repos }
  },
  (dispatch) => ({
    onPage: (e: PaginationEvent) => {
      if (reposList[e.first].contributors === undefined) {
        const chunk = reposList.slice(e.first, e.first + e.rows);
        const promises = chunk.map(repo => api.getRepoContributors(login, repo.name));
        Promise.all(promises)
          .then((data) => {
            chunk.map((repo, index) => repo.contributors = data[index].length);
            dispatch(setContributorsChunk(e.first, chunk));
          });
      }
    }
  }),
)(UserRepos);
