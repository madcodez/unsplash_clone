import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "./ImageList";
import { images } from "./data.js";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";

class ImageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { images, auth } = this.props;
    // console.log(images);
    return (
      <div>
        <Grid container spacing={3}>
          {images.map((image) => (
            <Grid key={image.id} item xs={3}>
              <ImageList image={image} auth={auth.auth} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ ...state.images, auth: state.auth });
export default connect(mapStateToProps)(ImageContainer);
