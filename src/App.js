import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from "./pages/LandingPage/LandingPage";
import Post from "./pages/Post/Post";

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
            <Route
              path="/post/:id"
              exact
              component={Post}
            />
          </Switch>
        </Router>
      </Provider>
    </>

  );
}

export default App;
