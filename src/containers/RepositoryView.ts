import { connect } from 'react-redux';
import { Repository } from '../interfaces/api-types';
import RepositoryView from '../components/RepositoryView';

export default connect(
  (state: { repos: { data: Repository[] } }, ownProps: { name: string }) =>
    ({ data: state.repos.data.find(repo => repo.name === ownProps.name) || {} as Repository }),
  () => ({})
)(RepositoryView);
