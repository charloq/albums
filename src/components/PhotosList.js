import React from "react";

import { withStyles } from "@material-ui/styles";
import { Typography, Button } from "@material-ui/core";

import Album from "../containers/Album";
import PhotosCarrousel from "./PhotosCarrousel";

const styles = {
  topSpace: {
    marginTop: "2em",
  },
};

function PhotosList(props) {
  function clear() {
    props.clearAlbum();
    props.clearPhotos();
  }

  return (
    <div className={props.classes.topSpace}>
      {props.album && [
        <Typography key="album-title" variant="h4" component="h2">
          {props.album ? props.album.title : ""}
        </Typography>,
        <Button key="album-button" onClick={clear}>
          Regresar atrás
        </Button>,
        <Typography key="album-subtitle" variant="h5" component="h3">
          Fotos del album
        </Typography>,
        <Typography key="album-caption" variant="caption" component="p">
          {props.photos ? props.photos.length : ""} foto(s) en este album
        </Typography>,
        <PhotosCarrousel key="album-carrousel" photos={props.photos} />,
      ]}
    </div>
  );
}

export default withStyles(styles)(PhotosList);
