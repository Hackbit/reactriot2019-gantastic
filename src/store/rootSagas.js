import { all } from 'redux-saga/effects';

import { sagas as faces } from 'modules/faces';
import { sagas as user } from 'modules/user';


export default function* rootSaga() {
  yield all([
    faces(),
    user(),
  ]);
}
