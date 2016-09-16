import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import ActionSettings from "material-ui/svg-icons/action/settings";
import NavigationExpandMore from "material-ui/svg-icons/navigation/expand-more";
import Drawer from "material-ui/Drawer";
import {List, ListItem} from "material-ui/List";
import FlatButton from "material-ui/FlatButton";
import ActionGrade from "material-ui/svg-icons/action/grade";
import ContentInbox from "material-ui/svg-icons/content/inbox";
import ContentDrafts from "material-ui/svg-icons/content/drafts";
import ContentSend from "material-ui/svg-icons/content/send";

import { browserHistory } from "react-router";

const NavigationDrawer = ({
    open, handleToggle
}) => {

    let goHome = () => {
        browserHistory.push("/dashboard/home");
    };

    let goAddAgreement = () => {
        browserHistory.push("/dashboard/add-new-agreement");
    };

    let goSearchAgreement = () => {
        browserHistory.push("/dashboard/search-agreement");
    };

    return (
        <div>
            <Drawer
                docked={false}
                width={200}
                open={open}
                onRequestChange={handleToggle}
                width={250}
                >
                <AppBar title="Honda"
                    showMenuIconButton={false}/>
                <List>
                    <ListItem
                        primaryText="Home"
                        leftIcon={<ContentDrafts />}
                        onTouchTap={goHome} />
                    <ListItem
                        primaryText="Agreements"
                        leftIcon={<ContentInbox />}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Add New"
                                leftIcon={<ActionGrade />}
                                onTouchTap={goAddAgreement}
                                />,
                            <ListItem
                                key={2}
                                primaryText="Search"
                                leftIcon={<ContentSend />}
                                onTouchTap={goSearchAgreement} />,
                            <ListItem
                                key={3}
                                primaryText="Awaiting Appr."
                                leftIcon={<ContentInbox />}
                                />,
                            <ListItem
                                key={4}
                                primaryText="Daily Stats"
                                leftIcon={<ContentSend />}
                                />
                        ]}
                        />

                    <ListItem
                        primaryText="Claims"
                        leftIcon={<ContentInbox />}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Create Manual"
                                leftIcon={<ActionGrade />}
                                />,
                            <ListItem
                                key={2}
                                primaryText="Exceptions"
                                leftIcon={<ContentSend />}
                                />,
                            <ListItem
                                key={3}
                                primaryText="Search"
                                leftIcon={<ContentInbox />}
                                />,
                            <ListItem
                                key={4}
                                primaryText="Daily Stats"
                                leftIcon={<ContentSend />}
                                />
                        ]}
                        />

                    <ListItem
                        primaryText="Reports"
                        leftIcon={<ContentInbox />}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Business Objects"
                                leftIcon={<ActionGrade />}
                                />
                        ]}
                        />

                    <ListItem
                        primaryText="Administration"
                        leftIcon={<ContentInbox />}
                        primaryTogglesNestedList={true}
                        nestedItems={[
                            <ListItem
                                key={1}
                                primaryText="Approval Matrix"
                                leftIcon={<ActionGrade />}
                                />,
                            <ListItem
                                key={2}
                                primaryText="Classifications"
                                leftIcon={<ContentSend />}
                                />,
                            <ListItem
                                key={3}
                                primaryText="Parameters"
                                leftIcon={<ContentInbox />}
                                />,
                            <ListItem
                                key={4}
                                primaryText="Funding Methods"
                                leftIcon={<ContentSend />}
                                />,
                            <ListItem
                                key={5}
                                primaryText="Metallic Paints"
                                leftIcon={<ContentSend />}
                                />,
                            <ListItem
                                key={6}
                                primaryText="System Config"
                                leftIcon={<ContentInbox />}
                                />,
                            <ListItem
                                key={7}
                                primaryText="User Preferences"
                                leftIcon={<ContentSend />}
                                />
                        ]}
                        />
                </List>
            </Drawer>
        </div>
    );
};

export default NavigationDrawer;