import React from 'react';

import * as constants from 'modules/router/constants';

import { AddFaces } from 'modules/faces/components';
import { UserAuth } from 'modules/user/components';

import { AnonRoute, AuthRoute } from './components';


const Routes = () => (
  <React.Fragment>
    <AuthRoute
      Component={AddFaces}
      path={constants.Routes.FACES}
    />

    <AnonRoute
      Component={UserAuth}
      path={constants.Routes.AUTH}
    />
  </React.Fragment>
);


export default Routes;
