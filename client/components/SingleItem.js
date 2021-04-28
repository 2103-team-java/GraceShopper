import React from 'react';
import { connect } from 'react-redux';
import { getOneItem } from '../store/singleWatches';
import {
    createOrder,
    getUserWatches,
    updateUserWatchCount,
    getWatches,
    updateUserWatchCountTest,
} from '../store/cart';
import { gotUser } from '../store/user';

export class SingleItem extends React.Component {
    constructor() {
        super();
        this.updateCart = this.updateCart.bind(this);
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.oneItem(id);
        this.props.getWatchesFromServer();
        this.props.gotUsers();
    }

    updateCart() {
        const { globalusername } = this.props;
        const { singleItem } = this.props;
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

        let userID;

        for (let i = 0; i < this.props.users.users.length; i++) {
            if (this.props.users.users[i].username === globalusername) {
                userID = this.props.users.users[i].id;
            }
        }

        let check = false;

        usersOrders[0].items.map((eachItem) => {
            if (eachItem.id === singleItem.id) {
                check = true;
                this.props.updateUserWatchCountTest({
                    userId: userID,
                    itemId: eachItem.id,
                    quantity: eachItem.order.quantity + 1,
                });
                const { id } = this.props.match.params;
                this.props.oneItem(id);
                this.props.getWatchesFromServer();
            }
        });

        if (!check) {
            this.props.createOrder({
                userId: userID,
                itemId: singleItem.id,
                quantity: 1,
            });

            for (let i = 0; i < this.props.orders.allWatches.length; i++) {
                if (
                    this.props.orders.allWatches[i].username === globalusername
                ) {
                    this.props.orders.allWatches[i].items.push(singleItem);
                }
            }

            const { id } = this.props.match.params;
            this.props.oneItem(id);
            this.props.getWatchesFromServer();
        }
    }

    render() {
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        const { singleItem } = this.props;
        return (
            <div className="singleWatch">
                <img
                    src={singleItem.ImageURL}
                    alt={singleItem.name}
                    className="image"
                />
                <div className="watchInfo">
                    <h3 className="name">Name: {singleItem.name}</h3>
                    <h3 className="brand">Brand: {singleItem.brand}</h3>
                    <h3 className="price">
                        Price: {formatter.format(singleItem.price)}
                    </h3>
                    <h3>Description: {singleItem.description}</h3>
                </div>

                <button
                    className="btn-1"
                    type="submit"
                    onClick={() => this.updateCart(singleItem.id)}
                >
                    Add to cart
                </button>
            </div>
        );
    }
}

const mapState = (state) => {
    return {
        singleItem: state.oneItemReducer.item,
        globalusername: state.auth.username,
        orders: state.cart,
        users: state.userReducer,
    };
};

const mapDispatch = (dispatch) => {
    return {
        oneItem: (id) => dispatch(getOneItem(id)),
        createOrder: (obj) => dispatch(createOrder(obj)),
        updateUserWatchQty: (obj) => dispatch(updateUserWatchCount(obj)),
        getUserWatchesFromServer: () => dispatch(getUserWatches()),
        getWatchesFromServer: () => dispatch(getWatches()),
        updateUserWatchCountTest: (objectToUpdate) => {
            dispatch(updateUserWatchCountTest(objectToUpdate));
        },
        gotUsers: () => dispatch(gotUser()),
    };
};

export default connect(mapState, mapDispatch)(SingleItem);
