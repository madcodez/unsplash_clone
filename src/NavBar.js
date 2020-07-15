import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router-dom";
import store from "./reducers/reducers";
import { setAuth, removeUser } from "./actions/authAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  button: {
    color: "white",
    textDecoration: "none",
  },
}));

export default function NavBar({ auth }) {
  let history = useHistory();

  function handleLogout(e) {
    e.preventDefault();
    store.dispatch(setAuth());
    store.dispatch(removeUser());
    history.push("/");
  }
  const classes = useStyles();
  const user = (
    <Button color="inherit">
      <a className={classes.button} href=" " onClick={handleLogout}>
        Logout
      </a>
    </Button>
  );

  const guest = (
    <>
      <Button color="inherit">
        <Link className={classes.button} to="/login">
          Login
        </Link>
      </Button>
      <Button color="inherit">
        <Link className={classes.button} to="/register">
          Sign Up
        </Link>
      </Button>
    </>
  );
  // console.log(auth);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link className={classes.button} to="/">
              Unsplash Clone
            </Link>
          </Typography>
          {auth ? user : guest}
        </Toolbar>
      </AppBar>
    </div>
  );
}

//const mapStatetoProps = (state) => ({ auth: false });

//export default connect(mapStatetoProps)(withStyles(useStyles)(NavBar));
