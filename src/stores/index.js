import { createStore, applyMiddleware, compose } from 'redux';
import promiseMiddleware from 'redux-promise';
import immutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import logger from '../dev/logger';
import rootSaga from '../reducers/sagas/sagas';

import rootReducer from '../reducers';

const isProduction = process.env.NODE_ENV === 'production';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  const middleWares = [
    promiseMiddleware,
    sagaMiddleware,
    immutableStateInvariant(),
  ];

  if (isProduction) {
    const middleware = applyMiddleware(middleWares);
    const store = createStore(
      rootReducer,
      middleware,
    );

    sagaMiddleware.run(rootSaga);

    return store;
  }

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
