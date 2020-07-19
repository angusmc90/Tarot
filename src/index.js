import React from "react";
import ReactDOM from "react-dom";

// import { Provider } from "react-redux";
// import { createStore } from "redux";

import App from "./App";

// const store = createStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  // <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  //</Provider>
  rootElement
);
