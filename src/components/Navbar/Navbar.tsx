import React from 'react';
import Search from './Search';
import { SearchCardProps } from '../../interfaces/types';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import { Button } from 'primereact/button';

import './styles.css';

const Navbar: React.FC<SearchCardProps & RouteComponentProps> = ({ onSubmit, history }) => {
  return (
    <div className="p-d-flex p-ai-center toolbar p-shadow-3">
      <Switch>
        <Route exact path="/find" children={<Search onSubmit={onSubmit} />} />
        <Route
          path="/repositories/"
          children={
            <Button
              onClick={history.goBack}
              icon="pi pi-arrow-left"
              label="назад к репозиториям"
              className="goBack-button p-ml-3"
            />
          }
        />
      </Switch>
    </div>
  );
};

export default withRouter(Navbar);
