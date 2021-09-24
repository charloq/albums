import React from "react";
import { withStyles } from "@material-ui/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { PoseGroup } from "react-pose";

import Box from "../animations/Box";

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
    justifyContent: "center",
    padding: "1em 0",
  },
  img: {
    maxWidth: "100%",
    heigh: "auto",
  },
  card: {
    width: "300px",
    margin: "1em",
  },
};

function PhotosCarrousel(props) {
  return (
    <div className={props.classes.container}>
      <PoseGroup>
        {props.photos.map((photo, index) => {
          return (
            <Box key={photo.id} className={props.classes.card} position={index}>
              <Card>
                <img src={photo.baseUrl} className={props.classes.img} />
                <CardContent>
                  <Typography variant="caption" component="p">
                    {photo.filename}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </PoseGroup>
    </div>
  );
}

export default withStyles(styles)(PhotosCarrousel);
