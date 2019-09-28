import { eventChannel } from 'redux-saga'
import { call, put, take } from 'redux-saga/effects';

import { Auth } from 'services';

import * as actions from './actions';


function authChannel() {
  return eventChannel(emitter => {
    const handleAuthChange = (user) => {
      if (user) {
        emitter({ user });
      } else {
        emitter({});
      }
    };

    const unsubscribe = Auth.shared.onAuthStateChanged(handleAuthChange);

    return () => {
        unsubscribe()
      }
    }
  )
}

function* watchEvents() {
  const chan = yield call(authChannel);

  try {
    while (true) {
      const payload = yield take(chan);

      if (payload.user) {
        yield put(actions.userLoginSuccess(payload.user));
      } else {
        yield put(actions.userLoginFailure());
      }
    }
  } catch (err) {
    yield put(actions.userLoginFailure(err.message, err));
  }
}

export default function* rootSaga() {
  yield watchEvents();
}
