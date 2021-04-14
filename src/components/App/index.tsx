import React from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { Provider } from 'react-redux';
import Navbar from '../../containers/Navbar';
import UserCard from '../../containers/UserCard';
import './styles.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <>
        <Navbar />
        <div className="p-d-flex">
          <UserCard />
        </div>
      </>
      <Redirect from="/" to="/find" />
    </Provider>
  );
};

export default withRouter(App);
