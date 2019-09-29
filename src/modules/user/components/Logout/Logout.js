import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { constants } from 'modules/router';

import { Auth } from 'services';

import { Nav } from 'modules/core/components';


const Logout = ({ history }) => {
  useEffect(() => {
    async function handleSignout() {
      await Auth.shared.signOut();
    }

    handleSignout().then(() => {
      history.push(constants.Routes.AUTH);
    });
  });

  return (
    <>
      <div>Logging out...</div>

      <Nav
        items={constants.authRoutes}
        selectedItem="Logout"
      />
    </>
  );
};

Logout.propTypes = {
  history: PropTypes.shape().isRequired,
};


export default Logout;
