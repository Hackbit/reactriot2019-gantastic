let shared = null;
let singleton = null;

class Auth {
  static init = (firebase) => {
    shared = firebase.auth();
    singleton = firebase.auth;
  };

  static get shared() {
    return shared;
  }

  static get singleton() {
    return singleton;
  }

  static get user() {
    return shared.currentUser;
  }
}


export default Auth;
