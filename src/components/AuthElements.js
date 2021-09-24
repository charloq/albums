import React from "react";
import { Button, Avatar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ExitToApp } from "@material-ui/icons";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
};

const AuthElements = function (props) {
  const loginButton = () => {
    if (props.user)
      return [
        <Avatar key="auth-avatar" src={props.user.providerData[0].photoURL} />,
        <IconButton
          key="auth-icon-button"
          onClick={props.logout}
          color="inherit"
        >
          <ExitToApp />
        </IconButton>,
      ];
    return (
      <Button variant="contained" onClick={props.login}>
        Ingresar
      </Button>
    );
  };

  return <div className={props.classes.container}>{loginButton()}</div>;
};

export default withStyles(styles)(AuthElements);
