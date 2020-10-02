import React from "react";
import { routes } from "./router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              component={route.component}
              exact
              path={route.path}
            ></Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
