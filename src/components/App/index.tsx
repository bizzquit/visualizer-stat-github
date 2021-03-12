import React from 'react';
import './App.css';
import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primeicons/primeicons.css';
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
      <div className="container d-flex justify-content-around mt-3 mb-3 flex-lg-wrap">
        <UserCard />
      </div>
    </Provider>
  );
};
