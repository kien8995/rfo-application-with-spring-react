/*eslint-disable import/default*/
import "babel-polyfill";
import React from "react";
import {render} from "react-dom";
import {renderToString} from "react-dom/server";
import {Router, RouterContext, match, browserHistory} from "react-router";
import routes from "./routes.jsx";
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();


render(
    <Router history={browserHistory} routes={routes} />,
    document.getElementById("app")
);