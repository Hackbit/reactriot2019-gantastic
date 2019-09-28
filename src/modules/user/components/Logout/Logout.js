import React, { useEffect } from 'react';

import { Auth } from 'services';


const Logout = () => {
  useEffect(() => {
    async function handleSignout() {
      await Auth.shared.signOut();
    }

    handleSignout().then();
  });

  return <div>Logging out...</div>;
};


export default Logout;
