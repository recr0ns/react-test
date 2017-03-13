import 'babel-polyfill';
import 'es6-promise';
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import './styles/index.scss';
import Root from './root';

import configureStore from './stores';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

function main() {
  render(
    <Root store={store} history={history} />,
    document.getElementById('root'),
  );
}

const loadedStates = ['complete', 'loaded', 'interactive'];

if (loadedStates.includes(document.readyState) && document.body) {
  main();
} else {
  window.addEventListener('DOMContentLoaded', main, false);
}

if (module.hot) {
  module.hot.accept('./root', () => {
    /* eslint-disable */
    let NextRoot = require('./root').default;
    /* eslint-enable */
    render(
      <NextRoot store={store} history={history} />,
      document.getElementById('app'),
    );
  });
}
