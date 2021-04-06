import { connect } from 'react-redux';
import UserReposStat from '../components/UserCard/UserReposStat';

export default connect(
  (state: { repos: { reposStat: { [key: string]: number } }}) =>
    ({ reposStat: state.repos.reposStat })
)(UserReposStat);
