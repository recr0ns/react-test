import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../reducers/sagas';

import rootReducer from '../reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [
    promiseMiddleware,
    sagaMiddleware,
    immutableStateInvariant(),
  ];

  const middleware = applyMiddleware(middleWares);
  const store = createStore(
    rootReducer,
    middleware,
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
