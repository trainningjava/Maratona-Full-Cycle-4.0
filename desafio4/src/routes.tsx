import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import UserList from "./pages/UserList";

function Routes() {
  return (
    <Router>
      <Route path="/" exact component={Principal} />
      <Route path="/users" component={UserList} />
    </Router>
  );
}

export default Routes;
