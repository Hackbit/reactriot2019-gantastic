import React from 'react';
import { Router as AppRouter } from '@reach/router';

import * as constants from 'modules/router/constants';

import { UserAuth } from 'modules/user/components';


const Routes = () => (
  <AppRouter>
    <UserAuth path={constants.Routes.AUTH} />
  </AppRouter>
);


export default Routes;
