import { connect } from 'react-redux';
import UserCard, { User } from '../components/UserCard';

export default connect(
  (state: {user: User}) => ({ user: state.user }),
  (dispatch, props) => ({}),
)(UserCard);
