import { Link, makeStyles } from '@material-ui/core';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

import Routes from './routes';
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
    navLink: {
        padding: 5,
    },
}));
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
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
                        <Typography variant="h6" className={classes.title}>
                            Home
                        </Typography>
                    </Link>
                    <Link
                        href="/login"
                        color="inherit"
                        className={classes.navLink}
                    >
                        <Typography variant="h6" className={classes.title}>
                            Login
                        </Typography>
                    </Link>
                    <Link
                        href="/cart"
                        color="inherit"
                        className={classes.navLink}
                    >
                        <Typography variant="h6" className={classes.title}>
                            Cart
                        </Typography>
                    </Link>
                    <Link
                        href="/cart/checkout"
                        color="inherit"
                        className={classes.navLink}
                    >
                        <Typography variant="h6" className={classes.title}>
                            Checkout
                        </Typography>
                    </Link>
                </Toolbar>
            </AppBar>
            <Routes />
        </div>
    );
};

export default App;
