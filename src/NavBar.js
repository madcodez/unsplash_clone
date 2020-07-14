import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/core/styles";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { setAuth } from "./actions/authAction";

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
  },
}));

export default function NavBar() {
  // const [auth, setAuth] = React.useState(true);

  // console.log(cart)

  //const { auth } = props;
  const classes = useStyles();

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
            Unsplash Clone
          </Typography>
          <Button color="inherit">
            <Link className={classes.button} to="/login">
              Login
            </Link>
          </Button>
          {/* //<Button color="inherit">{auth ? user : guest}</Button> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}

//const mapStatetoProps = (state) => ({ auth: false });

//export default connect(mapStatetoProps)(withStyles(useStyles)(NavBar));
