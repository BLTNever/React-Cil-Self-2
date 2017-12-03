import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "../utils/promise-middleware";

import rootReducer from "../reducers";

var buildStore = compose(applyMiddleware(thunk, promiseMiddleware))(
    createStore
);

export default function configureStore(initialState) {
    const store = buildStore(rootReducer, initialState);
    // for debuging on production
    window.store = store;
    return store;
}
