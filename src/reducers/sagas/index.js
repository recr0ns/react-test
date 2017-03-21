import itemsSaga from './items';

export default function* rootSaga() {
  yield [
    ...itemsSaga(),
  ];
}
