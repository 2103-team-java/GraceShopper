import React, { Component, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { List, Paper } from '@material-ui/core';
import { setAddressThunk, setInactive } from '../../store/checkout';
import { connect } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const dummyData = {
    id: 1,
    username: 'sam',
    password: '$2b$05$lHc/5BCJQug5Xm0rteJWeeH4ctCjayJgE7.IsvdTwuUafxMrG2tdC',
    shippingAddress: '322 road, little neck, ny',
    billingAddress: null,
    createdAt: '2021-04-21T15:30:58.731Z',
    updatedAt: '2021-04-21T15:30:58.731Z',
    items: [
        {
            id: 3,
            name: 'Constellation',
            brand: 'Omega',
            price: 4300,
            decription:
                'Discover the new look of these famous watches for women.',
            ImageURL: null,
            createdAt: '2021-04-21T15:30:58.766Z',
            updatedAt: '2021-04-21T15:30:58.766Z',
            order: {
                quantity: 13,
                createdAt: '2021-04-21T15:30:58.877Z',
                updatedAt: '2021-04-21T15:30:58.877Z',
                userId: 1,
                itemId: 3,
            },
        },
        {
            id: 4,
            name: 'GlobeMaster',
            brand: 'Omega',
            price: 7000,
            decription:
                'As the world"s first Master Chronometer, the Globemaster has set incredible new standards of watchmaking.',
            ImageURL: null,
            createdAt: '2021-04-21T15:30:58.767Z',
            updatedAt: '2021-04-21T15:30:58.767Z',
            order: {
                quantity: 10,
                createdAt: '2021-04-21T15:30:58.877Z',
                updatedAt: '2021-04-21T15:30:58.877Z',
                userId: 1,
                itemId: 4,
            },
        },
    ],
};

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(5),
    },
}));

function Checkout(props) {
    const classes = useStyles();
    const userId = dummyData.id;
    const [address, addAddress] = useState({});
    console.log(props);
    const handleSubmit = () => {
        const shippingAddress = `${address.address1}, ${address.country},${address.city},${address.state},${address.zip}`;
        props.saveAddress(userId, {
            shippingAddress: shippingAddress,
        });
        props.closeOrder(1);
    };

    const handleChange = (event) => {
        addAddress({ ...address, [event.target.name]: event.target.value });
        console.log(address);
    };

    const items = dummyData.items;
    let total = 0;
    dummyData.items.forEach(
        (item) => (total += item.price * item.order.quantity)
    );
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return (
        <React.Fragment>
            <form onSubmit={() => this.handleSubmit}>
                <React.Fragment>
                    <Paper className={classes.paper}>
                        <Typography variant="h1" align="center">
                            Checkout page
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Shipping address
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}></Grid>
                        </Grid>
                    </Paper>
                </React.Fragment>
                <React.Fragment>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" gutterBottom>
                            Payment details
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    onChange={handleChange}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="cardNumber"
                                    name="cardNumber"
                                    label="Card number"
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="cardNumber"
                                    name="cardNumber"
                                    label="Name on card"
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="expiryDate"
                                    name="expiryDate"
                                    label="Expriry date"
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    required
                                    id="cvv"
                                    name="cvv"
                                    label="CVV"
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                    </Paper>
                </React.Fragment>
                <React.Fragment>
                    <Paper className={classes.paper}>
                        <Typography variant="h6" gutterBottom>
                            Review Order
                        </Typography>
                        <List>
                            {items.map((item) => (
                                <ListItem key={item.id}>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.decription}
                                    />
                                    <Typography variant="body2">
                                        {item.order.quantity} x{' '}
                                        {formatter.format(item.price)}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                        <ListItem>
                            <ListItemText primary="Total" />
                            <Typography variant="subtitle1">
                                {formatter.format(total)}
                            </Typography>
                        </ListItem>
                    </Paper>
                </React.Fragment>
            </form>
            <Grid item xs={12} align="center">
                <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleSubmit()}
                >
                    {' '}
                    pay for items
                </Button>
            </Grid>
        </React.Fragment>
    );
}

const mapDispatch = (dispatch) => {
    return {
        saveAddress: (id, address) => dispatch(setAddressThunk(id, address)),
        closeOrder: (orderId) => dispatch(setInactive(orderId)),
    };
};

export default connect(null, mapDispatch)(Checkout);
