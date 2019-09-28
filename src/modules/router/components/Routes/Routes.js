import React from 'react';
import { Router as AppRouter } from '@reach/router';

import * as constants from 'modules/router/constants';

import { AddFaces } from 'modules/faces/components';
import { UserAuth } from 'modules/user/components';


const Routes = () => (
  <AppRouter>
    <AddFaces path={constants.Routes.FACES} />

    <UserAuth path={constants.Routes.AUTH} />
  </AppRouter>
);


export default Routes;
