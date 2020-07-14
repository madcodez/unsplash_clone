import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class NavBarContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { auth } = this.props;
    //console.log(this.props);
    return (
      <div>
        <NavBar auth={auth.auth} />
      </div>
    );
  }
}
const mapStatetoProps = (state) => ({ auth: state.auth });
export default connect(mapStatetoProps)(NavBarContainer);
