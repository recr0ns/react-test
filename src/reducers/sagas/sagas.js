import { takeEvery } from 'redux-saga';

export function* watchFetchUser() {
  console.log('redux-saga is running user/fetch action listener...');
}

export default function* rootSaga() {
  yield [
    watchFetchUser(),
  ];
}
