let shared = null;

class Storage {
  static init = (firebase) => {
    shared = firebase.storage();
  };

  static get shared() {
    return shared;
  }
}


export default Storage;
