let shared = null;

class Database {
  static init = (firebase) => {
    shared = firebase.database();
  };

  static get shared() {
    return shared;
  }
}


export default Database;
