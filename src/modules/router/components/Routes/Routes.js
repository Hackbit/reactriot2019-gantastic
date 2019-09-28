import React from 'react';
import { Switch } from 'react-router-dom';

import * as constants from 'modules/router/constants';

import { AddFaces, History } from 'modules/faces/components';
import { Logout, UserAuth } from 'modules/user/components';

import { AnonRoute, AuthRoute } from './components';


const Routes = () => (
  <Switch>
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
