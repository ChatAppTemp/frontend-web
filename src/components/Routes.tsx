import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./landing_page/LandingPage";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LogIn />
        </Route>
        <Route path="/signup" exact>
          <SignUp />
        </Route>
        <Route path="/" exact>
          <LandingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
