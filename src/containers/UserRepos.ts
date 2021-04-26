import { connect } from 'react-redux';
import { Repository, User } from '../interfaces/api-types';
import UserRepos, { PaginationEvent } from '../components/InfoCardUser/UserRepos';
import { LoadStatus } from '../constants/Status';
import api from '../api';
import { setContributorsChunk } from '../actionCreator';

let reposList = [] as Repository[];
let login: string;

export default connect(
  (state: {
    repos: { data: Repository[]; loadStatus: LoadStatus; contributorsLoadStatus: LoadStatus };
    user: User;
  }) => {
    reposList = state.repos.data;
    login = state.user.login;
    return { repositoryData: state.repos };
  },
  (dispatch) => ({
    onPage: (e: PaginationEvent) => {
      if (reposList[e.first].contributors === undefined) {
        const chunk = reposList.slice(e.first, e.first + e.rows);
        const contributorPromises = chunk.map((repo) => api.getRepoContributors(login, repo.name));
        const languagePromises = chunk.map((repo) => api.getRepoLanguages(login, repo.name));

        Promise.all([...contributorPromises, ...languagePromises]).then((data) => {
          const contributors = data.slice(0, chunk.length);
          const languages = data.slice(chunk.length);

          chunk.forEach((repo, index) => {
            contributors[index]
              ? (repo.contributors = contributors[index].length)
              : (repo.contributors = 0);
            repo.languages = Object.keys(languages[index]).filter((lang) => lang !== repo.language);
          });
          dispatch(setContributorsChunk(e.first, chunk));
        });
      }
    },
  })
)(UserRepos);
