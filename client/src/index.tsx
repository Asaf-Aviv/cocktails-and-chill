import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import * as Sentry from '@sentry/browser';
import './index.css';
import configureStore from './store';
import App from './components/App/App';
import 'intersection-observer';

// @ts-ignore
ReactGA.initialize(process.env.REACT_APP_GA as string, { cookieDomain: 'auto' });
Sentry.init({ dsn: 'https://c37a80cde17f463292c07592f2353107@sentry.io/1810396' });

const history = createHistory();

history.listen((location) => {
  ReactGA.set({ page: location.pathname });
  ReactGA.pageview(location.pathname);
});

render(
  <Provider store={configureStore()}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
