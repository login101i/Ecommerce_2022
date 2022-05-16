import React from "react";
import ReactDOM from "react-dom";
import { AppHOC } from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate persistor={persistor}>
        <AppHOC />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
