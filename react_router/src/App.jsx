import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" component={About} />
      </Switch>
    </>
  );
};
export default App;
