import React, { Component } from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import Login from "../Login";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = {
  grow: {
    flexGrow: 1,
    textAlign: "left",
  },
};

class AppNav extends Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              component="h1"
              className={this.props.classes.grow}
            >
              Albumes
            </Typography>
            <Login />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(AppNav);
