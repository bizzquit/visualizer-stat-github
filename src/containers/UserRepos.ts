import { connect } from 'react-redux';
import { Repository } from '../interfaces/api-types';
import UserRepos from '../components/UserCard/UserRepos';
import { LoadStatus } from '../constants/Status';

export default connect(
  (state: { repos: { data: Repository[], loadStatus: LoadStatus } }) => ({ repositoryData: state.repos }),
  () => ({}),
)(UserRepos);
