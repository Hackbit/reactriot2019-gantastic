import React from 'react';
import { Router as AppRouter } from '@reach/router';

import * as constants from 'modules/router/constants';

import { AddFaces } from 'modules/faces/components';
import { UserAuth } from 'modules/user/components';

import { AnonRoute, AuthRoute } from './components';


const Routes = () => (
  <AppRouter>
    <AuthRoute
      Component={AddFaces}
      path={constants.Routes.FACES}
    />

    <AnonRoute
      Component={UserAuth}
      path={constants.Routes.AUTH}
    />
  </AppRouter>
);


export default Routes;
