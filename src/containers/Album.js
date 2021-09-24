import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

import PhotosList from "../components/PhotosList";
import { setPhotos, clearPhotos, clearAlbum } from "../initializers/actions";

class Album extends Component {
  loadPhotos() {
    axios({
      method: "POST",
      url: "https://photoslibrary.googleapis.com/v1/mediaItems:search",
      headers: {
        Authorization: `Bearer ${this.props.token}`,
      },
      data: {
        albumId: this.props.mainAlbum.id,
      },
    }).then((response) => {
      console.log(response.data);
      this.props.setPhotos(response.data.mediaItems);
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.mainAlbum) {
      if (process.env.NODE_ENV === "production") {
        this.loadPhotos();
      } else {
        import("../data/photos").then((module) => {
          this.props.setPhotos(module.default.mediaItems);
        });
      }
    }
  }

  render() {
    return (
      <PhotosList
        album={this.props.mainAlbum}
        photos={this.props.photos}
        clearAlbum={this.props.clearAlbum}
        clearPhotos={this.props.clearPhotos}
      ></PhotosList>
    );
  }
}

const mapStateToProps = (state) => ({
  mainAlbum: state.mainAlbum,
  token: state.token,
  photos: state.photos,
});

const mapDispatchToProps = {
  setPhotos,
  clearPhotos,
  clearAlbum,
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
