import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app";
import * as serviceWorker from "./serviceWorker";

const MOUNT_NODE = document.getElementById("root");

const renderApp = Component => {
  render(
    <Router>
      <Provider store={store}>
        <Component />
      </Provider>
    </Router>,
    MOUNT_NODE
  );
};

renderApp(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
