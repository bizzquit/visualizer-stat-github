import React from 'react';
import './styles.css';
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import RepositoryView from '../../containers/RepositoryView';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import { Provider } from 'react-redux';
import Navbar from '../../containers/Navbar';
import UserCard from '../../containers/UserCard';

const store = createStore(rootReducer);

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Route
          path='/repositories/:name'
          render={(props) => (<RepositoryView name={props.match.params.name} />) }
        />
        <Route path='/find' render={() => (
          <>
            <Navbar />
            <div className="p-d-flex ">
              <UserCard />
            </div>
          </>
        )} />
        <Redirect from='/' to='/find'/>
      </Switch>


    </Provider>
  );
};

export default withRouter(App);
