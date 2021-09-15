import React, { Component } from "react";
import googleLogin from "./initializers/firebase";
import { getAuth } from "firebase/auth";
import { Button, Avatar, IconButton } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { ExitToApp } from "@material-ui/icons";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
  },
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.logout = this.logout.bind(this);
    this.state = {
      userLoggedIn: false,
      photoURL: "",
    };
  }

  componentDidMount() {
    getAuth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          userLoggedIn: true,
          photoURL: user.providerData[0].photoURL,
        });
      } else {
        this.setState({
          userLoggedIn: false,
          photoURL: "",
        });
      }
    });
  }

  login() {
    googleLogin();
  }

  logout() {
    getAuth().signOut().then(console.log);
  }

  loginButton() {
    if (this.state.userLoggedIn)
      return [
        <Avatar src={this.state.photoURL} />,
        <IconButton onClick={this.logout} color="inherit">
          <ExitToApp />
        </IconButton>,
      ];
    return (
      <Button variant="contained" onClick={this.login}>
        Ingresar
      </Button>
    );
  }

  render() {
    return (
      <div className={this.props.classes.container}>{this.loginButton()}</div>
    );
  }
}

export default withStyles(styles)(Login);
