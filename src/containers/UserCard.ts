import { connect } from 'react-redux';
import UserCard from '../components/UserCard';
import { User } from '../interfaces/api-types';

export default connect(
  (state: {user: User}) => ({ user: state.user }),
  (dispatch, props) => ({}),
)(UserCard);
