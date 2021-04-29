import { connect } from 'react-redux';
import InfoCardUser from './InfoCardUser';
import { User } from '../../interfaces/api-types';

export default connect(
  (state: { user: User }) => ({ user: state.user }),
  () => ({})
)(InfoCardUser);
