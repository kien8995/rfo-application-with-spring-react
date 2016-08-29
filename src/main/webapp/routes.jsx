import React from "react";
import {Route, IndexRoute} from "react-router";
import {App} from "./components";
import {Dashboard} from "./components/Dashboard";
import {DashboardHomePage} from "./components/DashboardHomePage";
import {AddNewPage, Search} from "./components/DashboardAgreement";

export default (
    <Route name="app" path="/" component={App}>
        <Route name="dashboard" path="/dashboard" component={Dashboard}>
            <Route name="dashboard.home" path="home" component={DashboardHomePage} />
            <Route name="dashboard.addNewAgreement" path="add-new-agreement" component={AddNewPage} />
            <Route name="dashboard.searchAgreement" path="search-agreement" component={Search} />
        </Route>
    </Route>
);
