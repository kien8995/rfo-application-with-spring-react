import React, {Component} from "react";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Badge from "material-ui/Badge";
import {Grid, Row, Col}  from "react-flexbox-grid";
import styles from "./DashboardHomePage.module.css";

class DashboardHomePage extends Component {
    render() {
        return (
            <div>
                <h4 className={styles.subTitle}>Recent Activity</h4>
                <Grid>
                    <Row>
                        <Col mdOffset={2} md={4} sm={6}>
                            <List>
                                <Subheader className={styles.subHeader}>Agreements</Subheader>
                                <ListItem
                                    primaryText="Draft"
                                    rightIcon={<Badge
                                        badgeContent={12}
                                        primary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Awaiting Approval"
                                    rightIcon={<Badge
                                        badgeContent={21}
                                        primary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Signature Required"
                                    rightIcon={<Badge
                                        badgeContent={3}
                                        primary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Approved"
                                    rightIcon={<Badge
                                        badgeContent={183}
                                        primary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Rejected"
                                    rightIcon={<Badge
                                        badgeContent={3}
                                        primary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Discontinued"
                                    rightIcon={<Badge
                                        badgeContent={28}
                                        primary={true}
                                        />}
                                    />
                            </List>
                        </Col>
                        <Col md={4} sm={6}>
                            <List>
                                <Subheader className={styles.subHeader}>Claims</Subheader>
                                <ListItem
                                    primaryText="Exceptions"
                                    rightIcon={<Badge
                                        badgeContent={2}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Awaiting Approval"
                                    rightIcon={<Badge
                                        badgeContent={1}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Approved"
                                    rightIcon={<Badge
                                        badgeContent={28}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Rejected"
                                    rightIcon={<Badge
                                        badgeContent={1}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Cancelled"
                                    rightIcon={<Badge
                                        badgeContent={1}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Backdated"
                                    rightIcon={<Badge
                                        badgeContent={16}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Manual Claims"
                                    rightIcon={<Badge
                                        badgeContent={3}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Amended Registrations"
                                    rightIcon={<Badge
                                        badgeContent={1}
                                        secondary={true}
                                        />}
                                    />
                                <ListItem
                                    primaryText="Auto Claims"
                                    rightIcon={<Badge
                                        badgeContent={147}
                                        secondary={true}
                                        />}
                                    />
                            </List>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default DashboardHomePage;