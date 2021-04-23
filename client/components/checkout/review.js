import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { ListItemSecondaryAction } from '@material-ui/core';

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

export default class Review extends Component {
    render() {
        const items = dummyData.items;
        let total = 0;
        dummyData.items.forEach((item) => (total += item.price));
        return (
            <React.Fragment>
                <Typography variant="h6" gutterBottom>
                    Review Order
                </Typography>
                <List>
                    {items.map((item) => (
                        <ListItem key={item.id}>
                            <ListItemText
                                primary={item.name}
                                secondary={item.description}
                            />
                            <Typography variant="body2">
                                ${item.price}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
                <ListItem>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1">${total}</Typography>
                </ListItem>
            </React.Fragment>
        );
    }
}
