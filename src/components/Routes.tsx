import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./landing_page/LandingPage";
import LogIn from "./auth/LogIn";
import SignUp from "./auth/SignUp";
import ErrorPage, { PageErrors } from "./Error";

const Routes = () => {
  return (
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
      <Route path="*">
        <ErrorPage err={PageErrors.NotFound} />
      </Route>
    </Switch>
  );
};

export default Routes;
