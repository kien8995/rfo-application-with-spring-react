import React from "react";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import IconMenu from "material-ui/IconMenu";
import MenuItem from "material-ui/MenuItem";
import ActionSettings from "material-ui/svg-icons/action/settings";
import FlatButton from "material-ui/FlatButton";
import Avatar from "material-ui/Avatar";
import FontIcon from "material-ui/FontIcon";
import List from "material-ui/List/List";
import ListItem from "material-ui/List/ListItem";
import {Grid, Row, Col} from "react-flexbox-grid";
import styles from "./AppBarLayout.module.css";

const AppBarLayout = ({handleToggle}) => {
  return (
    <div>
      <AppBar
        title="Honda"
        onLeftIconButtonTouchTap={handleToggle}
        iconElementRight={
          <Row>
            <FlatButton label="Cars" className={styles.button} />
            <FlatButton label="Motorcyles" className={styles.button}/>
            <FlatButton label="Power Equipment" className={styles.button} />
            <FlatButton label="Intranet" className={styles.button}/>
            <FlatButton label="System" className={styles.button}/>
            
            <IconMenu
              iconButtonElement={
                <IconButton><ActionSettings className={styles.textWhite}/></IconButton>
              }
              targetOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "top" }}
              >
              <MenuItem primaryText="Refresh" />
              <MenuItem primaryText="Help" />
              <MenuItem primaryText="Sign out" />
            </IconMenu>
          </Row>
        }
        />
    </div>
  );
};

export default AppBarLayout;