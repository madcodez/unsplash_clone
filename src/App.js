import React from "react";

import NavBar from "./NavBar";
import ImageContainer from "./ImageContainer";
import Login from "./Login";
import ImageEdit from "./ImageEditContainer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import store from "./reducers/reducers";
import { getImages } from "./actions/imageAction";
import { getAuth } from "./actions/authAction";
import { history } from "./helpers/history";

class App extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
  }

  componentDidMount() {
    store.dispatch(getImages());
  }
  render() {
    return (
      <Router history={history}>
        <>
          <NavBar />
          <div className="App">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/edit/:id" component={ImageEdit} />
              <Route path="/" component={ImageContainer} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default connect()(App);
