import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage/LandingPage";
import { Provider } from "react-redux"
import store from "./store"

const App = () => {

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route
              path="/"
              exact
              component={LandingPage}
            />
          </Switch>
        </Router>
      </Provider>
    </>

  );
}

export default App;
