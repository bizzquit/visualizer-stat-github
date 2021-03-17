import React from 'react';

import './App.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import Navbar from '../../containers/Navbar';
import UserCard from '../../containers/UserCard';

const store = createStore(rootReducer);

export default () => {
  return (
    <Provider store={store}>
      <Navbar />
      <div className="p-d-flex container">
        <UserCard />
      </div>
    </Provider>
  );
};
