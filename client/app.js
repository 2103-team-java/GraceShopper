import { Link, makeStyles } from "@material-ui/core";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";

import Routes from "./routes";
import { ShoppingBasket } from "@material-ui/icons";
const useStyles = makeStyles((theme) => ({
  linkText: {
    fontSize: 17,
  },
  navLink: {
    padding: 8,
  },
  navlinks: {
    flex: 1,
    justifyContent: "flex-end",
  },
}));
const App = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.navlinks}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Link href="/watches" color="inherit" className={classes.navLink}>
            <Typography variant="h6" className={classes.linkText}>
              Home
            </Typography>
          </Link>
          <Link href="/login" color="inherit" className={classes.navLink}>
            <Typography variant="h6" className={classes.linkText}>Login</Typography>
          </Link>
          <Link href="/cart" color="inherit">
            <ShoppingBasket fontSize="large" />
          </Link>
        </Toolbar>
      </AppBar>
      <Routes />
    </div>
  );
};

export default App;
