import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import Api from '../api';
import { setUserInfo } from '../actionCreator';

const api = Api.getInstance();

export default connect(
  (state, props) => ({}),
  (dispatch, props) => ({
    onSubmit: (login: string) => {
      api.fetchUserInfo(login)
        .then(user => dispatch(setUserInfo(user)))
        .catch(() => dispatch(setUserInfo(null)))
    }
  })
)(Navbar);
