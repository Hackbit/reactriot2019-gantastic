import Auth from './auth';


let shared = null;

class Database {
  static init = (firebase) => {
    shared = firebase.database();
  };

  static get shared() {
    return shared;
  }

  static saveConfigs = async (configs) => {
    const { uid } = Auth.user;

    Database
      .shared
      .ref('users')
      .child(uid)
      .child('configs')
      .push(configs);
  };

  static getConfigsHistory = async () => {
    const { uid } = Auth.user;

    const snapshot = await Database
      .shared
      .ref('users')
      .child(uid)
      .child('configs')
      .once('value');

    return snapshot.val();
  };

  static listenToRef = (path, callback) => {
    const ref = Database
      .shared
      .ref()
      .child(path);

    ref.on('value', callback);

    return ref;
  };
}


export default Database;
