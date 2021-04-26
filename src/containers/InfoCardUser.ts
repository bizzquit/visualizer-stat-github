import { connect } from 'react-redux';
import UserCard from '../components/InfoCardUser';
import { User } from '../interfaces/api-types';

export default connect(
  (state: { user: User }) => ({ user: state.user }),
  () => ({})
)(UserCard);
