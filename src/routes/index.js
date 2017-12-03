
import React from "react";
import {
    Router,
    Route,
    hashHistory,
} from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "../store/configureStore";
const store = configureStore();
const history = syncHistoryWithStore(hashHistory, store);

history.listen(location => {
    let pathname = location.pathname;
    pathname = pathname.replace(/\//g, "_");
    pathname = pathname.toLowerCase();
});

module.exports = function Routes() {

    return (
        <Router
            history={history}>
            <Route path="/" component={require("../modules/home/")} />
            <Route path="/home" component={require("../modules/home/")} />
            <Route path="default" component={require("../modules/notFound/")} />
            <Route path="*" component={require("../modules/notFound/")} />
        </Router>
    );
};
