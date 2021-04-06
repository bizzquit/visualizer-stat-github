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
              data => {
                const statData = data.reduce((acc, repo) => {
                  const language = repo.language || 'Other';
                  acc[language] = acc[language] !== undefined ? acc[language] + 1 : 1;

                  return acc;
                }, {} as { [key: string]: number });
                dispatch(addToReposList(data, statData));
              },
              () => dispatch(addToReposList(null))
            );
          }
        )
    },
  })
)(Navbar);
