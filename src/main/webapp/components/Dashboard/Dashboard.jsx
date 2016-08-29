import React, {Component, PropTypes} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {DashboardHeader} from "../DashboardHeader";
import styles from "./Dashboard.module.css";

class Dashboard extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <DashboardHeader />
                    <h2 className={styles.title}>Corporate Sales Solution</h2>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default Dashboard;