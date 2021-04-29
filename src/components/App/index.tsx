import React from 'react';
import { BrowserRouter, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { Provider } from 'react-redux';
import Navbar from '../Navbar';
import InfoCardUser from '../InfoCardUser';
import './styles.css';
import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';

import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Redirect from="/" to="/find" />
        <Navbar />
        <div className="p-d-flex">
          <InfoCardUser />
        </div>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
