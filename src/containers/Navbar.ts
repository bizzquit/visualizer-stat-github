import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Api from '../api';
import { addToReposList, setReposListLoading, setUserInfo, setUserInfoLoading } from '../actionCreator';

const api = Api.getInstance();

export default connect(
  () => ({}),
  (dispatch) => ({
    onSubmit: (login: string) => {
      dispatch(setUserInfoLoading());
      api
        .fetchUserInfo(login)
        .then(
          (user) => dispatch(setUserInfo(user)),
          () => dispatch(setUserInfo(null))
        )
        .then(
          () => {
            dispatch(setReposListLoading());
            api.getUserPublicRepos(login).then(
              data => dispatch(addToReposList(data)),
              () => dispatch(addToReposList(null))
            );
          }
        )
    },
  })
)(Navbar);
