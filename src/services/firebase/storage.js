import Auth from './auth';


let shared = null;

class Storage {
  static init = (firebase) => {
    shared = firebase.storage();
  };

  static get shared() {
    return shared;
  }

  static uploadImages = async (fileList = []) => {
    const { uid } = await Auth.shared.currentUser;

    const urls = [];

    await fileList.reduce(async (promise, file) => {
      await promise;

      try {
        const md = { contentType: file.type };
        const ref = shared.ref('test').child(uid).child(file.name);
        await ref.put(file, md);
        const url = await ref.getDownloadURL();

        urls.push(url);
      } catch (e) {
        console.log(e);
      }
    }, Promise.resolve());

    return urls;
  };

  static deleteImage = async (downloadUrl) => {
    try {
      const imageRef = Storage.shared.refFromURL(downloadUrl);
      await imageRef.delete();
      return true;
    } catch (e) {
      console.log(e);
      return undefined;
    }
  };
}


export default Storage;
