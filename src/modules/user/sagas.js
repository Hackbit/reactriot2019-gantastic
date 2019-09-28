import { fork, take } from 'redux-saga/effects';

import * as types from './types';


function* handleUserLogin() {
  try {
    yield null;
  } catch (error) {
    yield null;
  }
}

function* watch() {
  while (true) {
    const { type, payload = {} } = yield take([
      types.USER_LOGIN_REQUEST,
    ]);

    switch (type) {
      case types.USER_LOGIN_REQUEST:
        yield fork(handleUserLogin, payload);
        break;

      default:
        yield null;
    }
  }
}

export default function* rootSaga() {
  yield watch();
}
