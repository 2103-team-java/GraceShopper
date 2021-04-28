import { Button, Typography } from '@material-ui/core';
import React from 'react';

export const Thankyou = () => {
    return (
        <div align="center">
            <Typography variant="h1">Thank you for purchasing</Typography>
            <Typography variant="h3">
                your order will be at your doorstop shortly
            </Typography>
            <img src="https://images.unsplash.com/photo-1549032305-e816fabf0dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" />
        </div>
    );
};
