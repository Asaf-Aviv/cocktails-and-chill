import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import { Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './index.css';
import configureStore from './store';
import App from './components/App/App';
import 'intersection-observer';

ReactGA.initialize('UA-142877210-3');

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
