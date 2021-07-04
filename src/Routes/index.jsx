import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/home" exact component={Home} />
    <Route path="/login" exact component={Login} />
    <Redirect from="*" to="/home" />
  </Switch>
);

export default Routes;