import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import {
  Router,
} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import {App} from './components/app';
import {configureStore} from './redux/store';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
