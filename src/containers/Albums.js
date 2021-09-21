import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setAlbums, clearAlbums, setAlbum } from "../initializers/actions";
import AlbumsList from "../components/AlbumsList";

class Albums extends Component {
  loadPhotos() {
    axios({
      url: "https://photoslibrary.googleapis.com/v1/albums",
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
    })
      .then(console.log())
      .catch(console.log);
  }

  componentDidMount() {
    if (process.env.NODE_ENV === "production") {
      this.loadPhotos();
    } else {
      import("../data/albums").then((module) => {
        this.props.setAlbums(module.default.albums);
      });
    }
  }

  render() {
    return [
      this.props.mainAlbum ? this.props.mainAlbum.title : "",
      <AlbumsList
        albums={this.props.albums}
        setAlbum={this.props.setAlbum}
      ></AlbumsList>,
    ];
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums,
    token: state.token,
    mainAlbum: state.mainAlbum,
  };
};

const mapDispatchToProps = {
  setAlbums,
  clearAlbums,
  setAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(Albums);
