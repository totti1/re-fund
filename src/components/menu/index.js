import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  withStyles,
  Drawer,
  AppBar,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import add from "../../assets/images/icons/add.png";
import logout from "../../assets/images/icons/logout.png";
import management from "../../assets/images/icons/work-team.png";
import envelope from "../../assets/images/icons/envelope.png";

import styles from "./style/styles.js";

class MiniDrawer extends React.Component {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme, children } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open
              })}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              style={{ flex: 0.95 }}
            >
              Re-fund
            </Typography>
            <Link to="/business+added">
              <IconButton>
                <img src={add} alt="add_button" width={22} height={22} />
              </IconButton>
            </Link>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">
                Add a Business
              </button>
              {/* </Link> */}
              {/* <Link to="/add+a+company">
                <button class="dropdown-item" type="button">
                  Add an Company
                </button>
              </Link> */}
              <Link to="/add+an+agent">
                <button class="dropdown-item" type="button">
                  Add an Agent
                </button>
              </Link>
            </div>
            <div style={{ marginLeft: 20 }}>
              <Tooltip title="Logout">
                <IconButton
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={logout} alt="add_button" width={30} height={30} />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open
            })
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
            <Link to="/message">
              <ListItem button>
                <ListItemIcon>
                  <img src={envelope} alt="home icon" />
                </ListItemIcon>
                <ListItemText>
                  <h6 style={{ paddingTop: 20 }}>Inbox Messages</h6>
                </ListItemText>
              </ListItem>
            </Link>
            <Link to="/business+management">
              <ListItem button>
                <ListItemIcon>
                  <img src={management} alt="home icon" />
                </ListItemIcon>
                <ListItemText>
                  <h6 style={{ paddingTop: 20 }}>Manage Business</h6>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
          <Divider />
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MiniDrawer);
