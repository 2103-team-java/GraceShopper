import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    getWatches,
    getUserWatches,
    updateUserWatchCount,
    deleteOrder,
} from '../store/cart';
import { Link } from 'react-router-dom';

export class Cart extends Component {
    componentDidMount() {
        this.props.getWatchesFromServer();
    }

    render() {
        const { globalusername } = this.props;
        let usersOrders = [
            {
                items: [
                    {
                        id: 1,
                        name: 'PlaceHolder1',
                        brand: 'PHBrand1',
                        order: { quantity: 1, userId: 1 },
                    },
                ],
            },
        ];
        for (let i = 0; i < this.props.orders.allWatches.length; i++) {
            if (this.props.orders.allWatches[i].username === globalusername) {
                usersOrders[0] = this.props.orders.allWatches[i];
            }
        }
        usersOrders[0].items.forEach((eachItem) => {
            eachItem.userId = usersOrders[0].id;
        });

        return (
            <div>
                {globalusername ? (
                    <div>
                        <h3>{globalusername}'s Cart</h3>
                        <Link
                            to={{
                                pathname: '/cart/checkout',
                                state: { userData: usersOrders[0] },
                            }}
                        >
                            <div>
                                <h3>Checkout Page</h3>
                            </div>
                        </Link>
                        <div>
                            {usersOrders[0].items.map((eachItem) => {
                                return (
                                    <div>
                                        <img src={eachItem.ImageURL} />
                                        <h3>ItemBrand: {eachItem.brand}</h3>
                                        <h3>ItemName: {eachItem.name}</h3>
                                        <h3>
                                            Quantity: {eachItem.order.quantity}
                                        </h3>
                                        <h3>Item Id: {eachItem.id}</h3>
                                        <h3>UserId: {eachItem.order.userId}</h3>
                                        <button
                                            onClick={() => {
                                                this.props.updateUserWatchQty({
                                                    userId:
                                                        eachItem.order.userId,
                                                    itemId: eachItem.id,
                                                    quantity:
                                                        eachItem.order
                                                            .quantity + 1,
                                                });
                                                this.props.getWatchesFromServer();
                                            }}
                                        >
                                            Increase Quantity
                                        </button>
                                        <button
                                            onClick={() => {
                                                this.props.updateUserWatchQty({
                                                    userId:
                                                        eachItem.order.userId,
                                                    itemId: eachItem.id,
                                                    quantity:
                                                        eachItem.order
                                                            .quantity - 1,
                                                });
                                                this.props.getWatchesFromServer();
                                            }}
                                        >
                                            Decrease Quantity
                                        </button>
                                        <button
                                            onClick={() => {
                                                this.props.deleteOrder(
                                                    eachItem.order.orderId
                                                );
                                                this.props.getWatchesFromServer();
                                            }}
                                        >
                                            Remove Item from Cart
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <Link
                        to={{
                            pathname: '/login',
                        }}
                    >
                        <div>
                            <h3>Please Log In</h3>
                            {/* Log in Page doesn't auto refresh after logging in */}
                        </div>
                    </Link>
                )}
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        globalusername: state.auth.username,
        orders: state.cart,
    };
};

const mapDispatch = (dispatch) => ({
    getWatchesFromServer: () => dispatch(getWatches()),
    getUserWatchesFromServer: () => dispatch(getUserWatches()),
    updateUserWatchQty: (objectToUpdate) =>
        dispatch(updateUserWatchCount(objectToUpdate)),
    deleteOrder: (orderToDestroy) => {
        dispatch(deleteOrder(orderToDestroy));
    },
});

export default connect(mapState, mapDispatch)(Cart);