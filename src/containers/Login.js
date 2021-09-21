import React, { Component } from "react";
import { auth } from "../initializers/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { connect } from "react-redux";
import { saveToken, clearToken } from "../initializers/actions";
import AuthElements from "../components/AuthElements";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    console.log(this.props.token);
  }

  login() {
    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/photoslibrary.readonly");

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        let token = credential.accessToken;
        this.props.saveToken(token);
        console.log("Ingresa con exito");
      })
      .catch((error) => {
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        console.log(error);
      });
  }

  logout() {
    getAuth()
      .signOut()
      .then(() => {
        this.props.clearToken();
      });
  }

  render() {
    return (
      <AuthElements
        login={this.login}
        logout={this.logout}
        token={this.props.token}
        user={this.props.user}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.token,
    user: state.user,
  };
};

const mapDispatchToProps = {
  saveToken: saveToken,
  clearToken: clearToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
