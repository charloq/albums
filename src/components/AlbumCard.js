import React from "react";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";

const styles = {
  media: {
    minHeight: "200px",
  },
  item: {
    minWidth: "350px",
    margin: "1em",
    boxSizing: "border-box",
  },
};

function AlbumCard(props) {
  return (
    <Card
      className={props.classes.item}
      onClick={() => props.setAlbum(props.album)}
    >
      <CardMedia
        className={props.classes.media}
        image={props.album.coverPhotoBaseUrl}
      />
      <CardContent>
        <Typography variant="h5" component="h2" glutterbottom="true">
          {props.album.title}
        </Typography>
        <Typography component="p">
          {props.album.mediaItemsCount} foto(s)
        </Typography>
      </CardContent>
    </Card>
  );
}

export default withStyles(styles)(AlbumCard);
