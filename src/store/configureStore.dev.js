import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promiseMiddleware from "../utils/promise-middleware";

//引入redux-devtools-extension的可视化工具
import { composeWithDevTools } from "redux-devtools-extension"; //devToolsEnhancer,
import rootReducer from "../reducers";

var buildStore = composeWithDevTools(applyMiddleware(thunk, promiseMiddleware))(
    createStore
);

export default function configureStore() {
    const store = buildStore(rootReducer);
    // mount redux store on window
    window.store = store;
    return store;
}
