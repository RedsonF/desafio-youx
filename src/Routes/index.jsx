import { Switch, Route, Redirect } from 'react-router-dom';

import Patients from '../pages/Patients';
import Nurses from '../pages/Nurses';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <Route path="/patients" exact component={Patients} />
    <Route path="/nurses" exact component={Nurses} />
    <Route path="/login" exact component={Login} />
    <Redirect from="*" to="/login" />
  </Switch>
);

export default Routes;