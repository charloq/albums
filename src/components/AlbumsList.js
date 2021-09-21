import React from "react";
import { withStyles, Grid } from "@material-ui/core";

import AlbumCard from "./AlbumCard";

const styles = {};

function AlbumsList(props) {
  return (
    <Grid container spacing={16} justifyContent="center">
      {props.albums.map((album, index) => {
        return (
          <AlbumCard setAlbum={props.setAlbum} album={album} key={index} />
        );
      })}
    </Grid>
  );
}

export default withStyles(styles)(AlbumsList);
