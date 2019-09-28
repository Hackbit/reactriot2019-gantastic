import { sagas as user } from '../modules/user';


export default function* rootSaga() {
  yield [
    user(),
  ];
}
