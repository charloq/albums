import React from "react";
import { PoseGroup } from "react-pose";
import { withStyles, Grid } from "@material-ui/core";

import AlbumCard from "./AlbumCard";
import Box from "../animations/Box";

const styles = {};

function AlbumsList(props) {
  return (
    <Grid container spacing={16} justifyContent="center">
      <PoseGroup>
        {props.albums.map((album, index) => {
          return (
            <Box
              key={index}
              position={index}
              pose={props.mainAlbum ? "exit" : "enter"}
            >
              <AlbumCard setAlbum={props.setAlbum} album={album} />
            </Box>
          );
        })}
      </PoseGroup>
    </Grid>
  );
}

export default withStyles(styles)(AlbumsList);
