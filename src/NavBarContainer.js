import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";

class NavBarContainer extends Component {
  render() {
    const { auth, history, dispatch } = this.props;
    //console.log(this.props);
    return (
      <div>
        <NavBar auth={auth.auth} history={history} dispatch={dispatch} />
      </div>
    );
  }
}
const mapStatetoProps = (state) => ({ auth: state.auth });
export default connect(mapStatetoProps)(NavBarContainer);
