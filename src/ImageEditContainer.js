import React, { Component } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router";
import ImageEdit from "./ImageEdit";

class ImageEditContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { paramsId, images, history } = this.props;

    let image = images.find((image) => image.id == paramsId.id);

    return <ImageEdit image={image} history={history} />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state.images,
  paramsId: ownProps.match.params,
});

const ImageEditContainerWithRouter = withRouter(ImageEditContainer);
export default connect(mapStateToProps)(ImageEditContainerWithRouter);
