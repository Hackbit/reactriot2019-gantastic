import React from 'react';

import * as constants from 'modules/router/constants';

import { Nav } from 'modules/core/components';

import { AddFaces } from 'modules/faces/components';
import { UserAuth } from 'modules/user/components';

import { AnonRoute, AuthRoute } from './components';


const authItems = [
  { name: 'Faces', label: 'Faces', to: constants.Routes.FACES },
  { name: 'History', label: 'History', to: constants.Routes.HISTORY },
  { name: 'Logout', label: 'Logout', to: constants.Routes.LOGOUT },
];

const anonItems = [
  { name: 'Login', label: 'Login', to: constants.Routes.AUTH },
];

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

    <AuthRoute
      render={() => (
        <Nav items={authItems} />
      )}
      path={[
        constants.Routes.FACES,
        constants.Routes.HISTORY
      ]}
    />

    <AnonRoute
      render={() => (
        <Nav items={anonItems} />
      )}
      path={constants.Routes.AUTH}
    />
  </React.Fragment>
);


export default Routes;
