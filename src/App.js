import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage/LandingPage";
import { Provider } from "react-redux"
import store from "./store"
import "antd/dist/antd.less"
import 'antd/dist/antd.css'

const App = () => {

  return (
    <>
      <Provider store={store}>
        <h1 style={{ "text-align": "center" }}>BLOGS</h1>
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
