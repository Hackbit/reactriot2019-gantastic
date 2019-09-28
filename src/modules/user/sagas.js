import { eventChannel, END } from 'redux-saga'
import { all, call, fork, put, take } from 'redux-saga/effects';

import { Auth } from 'services';

import * as actions from './actions';
import * as types from './types';


function authChannel() {
  return eventChannel(emitter => {
    const handleAuthChange = (user) => {
      if (user) {
        emitter(user);
      } else {
        emitter(END);
      }
    };

    const unsubscribe = Auth.shared.onAuthStateChanged(handleAuthChange);

    return () => {
        unsubscribe()
      }
    }
  )
}

function* handleUserLogin() {
  try {
    yield null;
  } catch (error) {
    yield null;
  }
}

function* watchEvents() {
  const chan = yield call(authChannel);

  try {
    while (true) {
      const user = yield take(chan);
      yield put(actions.userLoginSuccess(user));
    }
  } finally {
    console.log('countdown terminated')
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
  yield all([
    watch(),
    watchEvents(),
  ]);
}
