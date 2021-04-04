import { connect } from 'react-redux';
import { Repository, User } from '../interfaces/api-types';
import UserRepos, { PaginationEvent } from '../components/UserCard/UserRepos';
import { LoadStatus } from '../constants/Status';
import Api from '../api';
import { addToReposList, setReposListLoading } from '../actionCreator';

const api = Api.getInstance();
let login: string;

export default connect(
  (state: { repos: { data: Repository[], loadStatus: LoadStatus }, user: User }) => {
    login = state.user.login;
    return { repositoryData: state.repos, totalRows: state.user.public_repos };
  },
  (dispatch) => ({
    onPage: (e: PaginationEvent) => {
      dispatch(setReposListLoading());
      api.getUserPublicRepos(login, { type: 'public', page: e.page + 1, per_page: 10 }).then(
        data => dispatch(addToReposList(data)),
        () => dispatch(addToReposList(null))
      );
    }
  }),
)(UserRepos);
