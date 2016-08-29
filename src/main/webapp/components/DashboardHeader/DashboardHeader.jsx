import React, {Component} from "react";
import {AppBarLayout} from "./AppBarLayout";
import {NavigationDrawer} from "./NavigationDrawer";

class DashboardHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleToggle = this.handleToggle.bind(this);
    }

    handleToggle() {
        this.setState({ open: !this.state.open });
    }

    render() {
        return (
            <div>
                <AppBarLayout handleToggle={this.handleToggle}/>
                <NavigationDrawer open={this.state.open} handleToggle={this.handleToggle}/>
            </div>
        );
    }
}

export default DashboardHeader;