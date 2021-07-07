import React, { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Patients from "../pages/Patients";
import Nurses from "../pages/Nurses";
import Login from "../pages/Login";
import { Context } from "../context/authContext";

const Routes = () => {

  const CustomRoute = ({ isPrivate, ...rest }) => {
    const { loading, authenticated } = useContext(Context);
  
    if (loading) {
      return <div />;
    }
  
    if (isPrivate && !authenticated) {
      return <Redirect to="/" />;
    }
  
    if (!isPrivate && authenticated) {
      return <Redirect to="/patients" />;
    }
  
    return <Route {...rest} />;
  };

  return (
    <Switch>
      <CustomRoute isPrivate path="/patients" exact component={Patients} />
      <CustomRoute isPrivate path="/nurses" exact component={Nurses} />
      <CustomRoute path="/" exact component={Login} />
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default Routes;
