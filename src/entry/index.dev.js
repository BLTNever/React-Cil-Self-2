import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "../store/configureStore";

import Routes from "../routes/";


const store = configureStore();

/**
 * <Route path="introduce/:id" component={IntroduceCtl}/>   :id为参数，必选；introduce/(:id)可选参数
 * IndexRedirect 如果直接访问/直接跳转到default路由
 */


ReactDOM.render(
    <Provider store={store}>
        <Routes />
    </Provider>,
    document.getElementById("app")
);

