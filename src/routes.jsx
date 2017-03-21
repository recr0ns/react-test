import React from 'react';
import { Redirect, Route, IndexRoute } from 'react-router';

import Layout from './templates/layout';
import Home from './templates/home';
import Todo from './templates/todo';

const publicPath = '/';

export const routeCodes = {
  HOME: publicPath,
  ABOUT: `${publicPath}about`,
};

export default (
  <Route path={publicPath} component={Layout}>
    <IndexRoute component={Todo} />
    <Route path={routeCodes.ABOUT} component={Home} />
    <Route path="404" component={Home} />
    <Redirect from="*" to="404" />
  </Route>
);
