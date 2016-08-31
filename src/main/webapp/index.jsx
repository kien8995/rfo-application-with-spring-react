/*eslint-disable import/default*/
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {renderToString} from "react-dom/server";
import {Router, RouterContext, match, browserHistory} from "react-router";
import {Provider} from "react-redux";
import configureStore from "./store/configureStore";
import routes from "./routes.jsx";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById("app")
);