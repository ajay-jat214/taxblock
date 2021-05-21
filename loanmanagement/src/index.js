import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "antd/dist/antd.css";
import "react-notifications/lib/notifications.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "tachyons";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { searchRoute } from "./redux/reducers";
import { emailDetails } from "./redux/reducers";
import { loanDetails } from "./redux/reducers";

const rootReducer = combineReducers({ searchRoute, emailDetails, loanDetails });

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
