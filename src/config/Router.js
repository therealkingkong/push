import React from "react";
import Home from "../Home";
import Login from "../Login";
import history from "./History";
import { Route, Router } from "react-router-dom";

export default function Routers() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Login} />
      <Route path="/Home" component={Home} />
    </Router>
  );
}
