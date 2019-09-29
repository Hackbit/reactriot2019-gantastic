import * as types from './types';


export const facesMergeRequest = configs => ({
  type: types.FACES_MERGE_REQUEST,
  payload: { configs },
});

export const facesMergeSuccess = (payload = {}) => ({
  type: types.FACES_MERGE_SUCCESS,
  payload: { ...payload },
});

export const facesMergeFailure = (message, error) => ({
  type: types.FACES_MERGE_FAILURE,
  payload: { error, message },
});

export const facesSaveConfigsRequest = configs => ({
  type: types.FACES_SAVE_CONFIGS_REQUEST,
  payload: { configs },
});

export const facesSaveConfigsSuccess = () => ({
  type: types.FACES_SAVE_CONFIGS_SUCCESS,
});

export const facesSaveConfigsFailure = (message, error) => ({
  type: types.FACES_SAVE_CONFIGS_FAILURE,
  payload: { error, message },
});

export const facesGetHistoryRequest = () => ({
  type: types.FACES_GET_HISTORY_REQUEST,
});

export const facesGetHistorySuccess = (byId, ids) => ({
  type: types.FACES_GET_HISTORY_SUCCESS,
  payload: { byId, ids },
});

export const facesGetHistoryFailure = (message, error) => ({
  type: types.FACES_GET_HISTORY_FAILURE,
  payload: { error, message },
});

export const facesMergeProgress = payload => ({
  type: types.FACES_MERGE_PROGRESS,
  payload,
});

export const facesGetResultRequest = storagePath => ({
  type: types.FACES_GET_RESULT_REQUEST,
  payload: { storagePath },
});

export const facesGetResultSuccess = (resultImageUrl) => ({
  type: types.FACES_GET_RESULT_SUCCESS,
  payload: { resultImageUrl },
});

export const facesGetResultFailure = (message, error) => ({
  type: types.FACES_GET_RESULT_FAILURE,
  payload: { error, message },
});
