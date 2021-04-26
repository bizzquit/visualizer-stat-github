import { connect } from 'react-redux';
import UserReposStat from '../components/InfoCardUser/UserReposStat';

export default connect((state: { repos: { reposStat: { [key: string]: number } } }) => ({
  reposStat: state.repos.reposStat,
}))(UserReposStat);
