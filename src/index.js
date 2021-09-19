import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import store from "./initializers/store";
import { setUser, clearUser } from "./initializers/actions";
import { getAuth } from "firebase/auth";

getAuth().onAuthStateChanged((user) => {
  console.log(user);
  if (user) {
    store.dispatch(setUser(user));
  } else {
    store.dispatch(clearUser());
  }
});

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
