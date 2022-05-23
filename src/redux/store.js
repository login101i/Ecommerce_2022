import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import { persistReducerStorage } from "./root.reducer";
import { rootSaga } from "./root.saga";

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = createStore(
  persistReducerStorage,
  applyMiddleware(...middlewares)
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
