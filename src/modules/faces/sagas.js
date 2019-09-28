import { all, call, fork, put, take } from 'redux-saga/effects';

import * as actions from './actions';
import * as api from './api';
import * as types from './types';


function* handleMergeFaces(urls) {
  try {
    const configs = {
      callback: api.endpoint,
      op: [
        '+',
        ...urls.map(url => (['*', '0.5', ['image', url]])),
      ],
    };

    const response = yield call(api.postFacesUrls, { configs });

    const { id } = response.data;

    yield all([
      put(actions.facesMergeSuccess(id)),
      put(actions.facesSaveConfigsRequest(configs))
    ]);
  } catch (error) {
    yield put(actions.facesMergeFailure(error.message, error));
  }
}

function* handleSaveConfigs(configs) {
  try {
    yield call(api.saveConfigs, configs);

    yield put(actions.facesSaveConfigsSuccess());
  } catch (error) {
    yield put(actions.facesSaveConfigsFailure(error.message, error));
  }
}

function* handleGetConfigs() {
  try {
    const byId = yield call(api.getHistory);
    const ids = Object.keys(byId);

    yield put(actions.facesGetHistorySuccess(byId, ids));
  } catch (error) {
    yield put(actions.facesGetHistoryFailure(error.message, error));
  }
}

function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      types.FACES_GET_HISTORY_REQUEST,
      types.FACES_MERGE_REQUEST,
      types.FACES_SAVE_CONFIGS_REQUEST,
    ]);

    switch (type) {
      case types.FACES_MERGE_REQUEST:
        yield fork(handleMergeFaces, payload.configs);
        break;

      case types.FACES_SAVE_CONFIGS_REQUEST:
        yield fork(handleSaveConfigs, payload.configs);
        break;

      case types.FACES_GET_HISTORY_REQUEST:
        yield fork(handleGetConfigs);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
