import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";

import PhotosList from "../components/PhotosList";
import { setPhotos, clearPhotos } from "../initializers/actions";

class Album extends Component {
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
    }).then((result) => {
      console.log(result);
      this.props.setPhotos(result.data.mediaItems);
    });
  }

  render() {
    return <PhotosList></PhotosList>;
  }
}

const mapStateToProps = (state) => ({
  mainAlbum: state.mainAlbum,
  token: state.token,
  
});

const mapDispatchToProps = {
  setPhotos,
  clearPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(Album);
