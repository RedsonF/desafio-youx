import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';

const Routes = () => (
    <Switch>
      <Route path="/home" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Redirect from="*" to="/login" />
    </Switch>
);

export default Routes;