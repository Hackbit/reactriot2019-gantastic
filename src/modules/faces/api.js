import axios from 'axios';

import { Database } from 'services';


export const endpoint = 'https://us-central1-face-tricks.cloudfunctions.net/api/faces';

export const postFacesUrls = async data => axios.post(endpoint, data);

export const saveConfigs = async (configs) => (
  Database.saveConfigs(configs)
);

export const getHistory = async () => (
  Database.getConfigsHistory()
);

export const get12 = async () => {
  return axios.get(`${endpoint}/12/result`);
};
