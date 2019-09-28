import { fork, take } from 'redux-saga/effects';

import * as types from './types';


function* handleMergeFaces() {
  try {
    yield null;
  } catch (error) {
    yield null;
  }
}

function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      types.FACES_MERGE_FAILURE,
    ]);

    switch (type) {
      case types.FACES_MERGE_FAILURE:
        yield fork(handleMergeFaces, payload);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
