import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import combineReducers from "./reducers";
import rootSaga from "./sagas";

let middlewares = [];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const sagaMiddleware = createSagaMiddleware();
middlewares.push(sagaMiddleware);

let store = createStore(combineReducers, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

if (module.hot) {
  module.hot.accept("./reducers", () => {
    const nextCombineReducers = require("./reducers").default;
    store.replaceReducer(nextCombineReducers);
  });
}

export default store;
