import React from "react";

import NavBarContainer from "./NavBarContainer";
import ImageContainer from "./ImageContainer";
import Login from "./Login";
import ImageEdit from "./ImageEditContainer";
import Register from "./Register";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import store from "./reducers/reducers";
import { getImages } from "./actions/imageAction";
import { getAuth } from "./actions/authAction";
import { history } from "./helpers/history";

class App extends React.Component {
  componentDidMount() {
    store.dispatch(getImages());
    store.dispatch(getAuth());
  }
  render() {
    return (
      <Router history={history}>
        <>
          <NavBarContainer />
          <div className="App">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/edit/:id" component={ImageEdit} />
              <Route path="/" exact component={ImageContainer} />
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default connect()(App);
