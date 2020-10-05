import React, { FC } from "react";
import { routes } from "./router";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { observer } from "mobx-react-lite";

export const App: FC = observer(() => {
  return (
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
  );
});
