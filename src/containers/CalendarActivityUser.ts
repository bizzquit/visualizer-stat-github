import { connect } from 'react-redux';
import { User } from '../interfaces/api-types';
import CalendarActivityUser from '../components/InfoCardUser/CalendarActivityUser';

export default connect(
  (state: { user: User }) => ({ user: state.user }),
  () => ({})
)(CalendarActivityUser);
