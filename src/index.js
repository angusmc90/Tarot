import React from "react";
import ReactDOM from "react-dom";

// import { Provider } from "react-redux"; <provider>all</provider>
// import { createStore } from "redux";
// import allReducers from "./reducers/index";

import App from "./App";

// const store = createStore(allReducers);
// const store = createStore();

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
