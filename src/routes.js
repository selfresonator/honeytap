import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import App from './App';
import FrontPage from './FrontPage';
import Main from './Main';

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FrontPage}/>
      <Route path="/main" component={Main} />
    </Route>
  </Router>
);

export default Routes;
