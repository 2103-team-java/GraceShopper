import { Link, makeStyles } from '@material-ui/core';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import Routes from './routes';
import { ShoppingBasket } from '@material-ui/icons';
import { logout } from './store';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    linkText: {
        fontSize: 17,
    },
    navLink: {
        padding: 8,
    },
    navlinks: {
        flex: 1,
        justifyContent: 'flex-end',
    },
}));
const App = ({ handleClick, isLoggedIn }) => {
    const classes = useStyles();
    return (
        <div id="navbar">
            <AppBar position="static">
                <Toolbar className={classes.navlinks}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    ></IconButton>
                    <Link
                        href="/watches"
                        color="inherit"
                        className={classes.navLink}
                    >
                        <Typography variant="h6" className={classes.linkText}>
                            Home
                        </Typography>
                    </Link>
                    {isLoggedIn ? (
                        <div>
                            {/* The navbar will show these links after you log in */}
                            <Link
                                onClick={handleClick}
                                color="inherit"
                                className={classes.linkText}
                            >
                                <Typography
                                    variant="h6"
                                    className={classes.linkText}
                                >
                                    Logout
                                </Typography>
                            </Link>
                        </div>
                    ) : (
                        <div className={classes.navLink}>
                            <Link
                                href="/login"
                                color="inherit"
                                className={classes.linkText}
                            >
                                <Typography
                                    variant="h6"
                                    className={classes.linkText}
                                >
                                    Login
                                </Typography>
                            </Link>
                        </div>
                    )}
                    <Link
                        href="/signup"
                        color="inherit"
                        className={classes.linkText}
                    >
                        <Typography variant="h6" className={classes.linkText}>
                            Signup
                        </Typography>
                    </Link>
                    <Link
                        className="cart"
                        href="/cart"
                        color="inherit"
                        className={classes.linkText}
                    >
                        <Typography variant="h6" className={classes.linkText}>
                            Cart
                        </Typography>
                        {'      '}
                        {/* <ShoppingBasket fontSize="large" /> */}
                    </Link>
                </Toolbar>
            </AppBar>
            <Routes />
        </div>
    );
};
const mapState = (state) => {
    return {
        isLoggedIn: !!state.auth.id,
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleClick() {
            dispatch(logout());
        },
    };
};
export default connect(mapState, mapDispatch)(App);
