import { connect } from 'react-redux';
import { User } from '../components/UserCard';
import UserInfo from '../components/UserCard/UserInfo';

export default connect(
  (state: { user: User }) => ({ user: state.user }),
  (dispatch, props) => ({})
)(UserInfo);
