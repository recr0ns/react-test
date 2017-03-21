import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import logger from '../dev/logger';
import rootSaga from '../reducers/sagas';

import rootReducer from '../reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [
    promiseMiddleware,
    sagaMiddleware,
    immutableStateInvariant(),
  ];

  const middleware = applyMiddleware(...middleWares, logger);
  const enhancer = compose(
    middleware,
    /* eslint-disable no-underscore-dangle */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    /* eslint-enable */
  );

  const store = createStore(rootReducer, enhancer);
  sagaMiddleware.run(rootSaga);

  return store;
}
