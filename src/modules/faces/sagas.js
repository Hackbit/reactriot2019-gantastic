import { all, call, fork, put, select, take } from 'redux-saga/effects';

import { Storage } from 'services';

import { selectors as userSelectors } from 'modules/user';

import * as actions from './actions';
import * as api from './api';
import * as types from './types';
import * as selectors from './selectors';


function* handleMergeFaces(imageSliderConfigs) {
  try {
    const userId = yield select(userSelectors.getId);

    const configs = {
      op: ['+'],
    };

    const pairs = Object.entries(imageSliderConfigs);
    pairs.forEach(([url, sliderValue]) => {
      const opVal = [
        '*',
        sliderValue.toString(),
        ['image', url],
      ];

      configs.op.push(opVal);
    });

    const response = yield call(api.postFacesUrls, { configs, userId });

    const { payload } = response.data;

    yield all([
      put(actions.facesMergeSuccess(payload)),
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

function* handleGetResult() {
  try {
    const resultUrl = yield select(selectors.getCurrentResultCallback);
    const pathResponse = yield call(api.getResultPath, resultUrl);
    const { storagePath } = pathResponse.data.payload;
    const imgUrl = yield call(Storage.getDownloadUrl, storagePath);

    yield put(actions.facesGetResultSuccess(imgUrl));
  } catch (error) {
    yield put(actions.facesGetResultFailure(error.message, error));
  }
}

function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      types.FACES_GET_HISTORY_REQUEST,
      types.FACES_GET_RESULT_REQUEST,
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

      case types.FACES_GET_RESULT_REQUEST:
        yield fork(handleGetResult);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
