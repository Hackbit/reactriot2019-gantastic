import React from 'react';
import { Route, Switch } from 'react-router-dom';

import * as constants from 'modules/router/constants';

import { AddFaces, History } from 'modules/faces/components';
import { Logout, UserAuth } from 'modules/user/components';

import { AnonRoute, AuthRoute, Home } from './components';


const Routes = () => (
  <Switch>
    <Route
      exact
      path={constants.Routes.HOME}
      component={Home}
    />

    <AnonRoute
      Component={UserAuth}
      path={constants.Routes.AUTH}
    />

    <AuthRoute
      Component={AddFaces}
      path={constants.Routes.FACES}
    />

    <AuthRoute
      Component={History}
      path={constants.Routes.HISTORY}
    />

    <AuthRoute
      Component={Logout}
      path={constants.Routes.LOGOUT}
    />
  </Switch>
);


export default Routes;
