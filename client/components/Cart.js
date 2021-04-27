import { connect } from 'react-redux';
import React, { Component } from 'react';
import {
    getWatches,
    getUserWatches,
    updateUserWatchCount,
    updateUserWatchCountTest,
    deleteOrder,
    deleteOrderTest,
} from '../store/cart';
import { Link } from 'react-router-dom';

export class Cart extends Component {
  constructor () {
    super()
    this.helpFunc = this.helpFunc.bind(this)
  }

  componentDidMount() {
    console.log('component mounted');
    // console.log('this.state is ...', this.state);
    this.props.getWatchesFromServer();
    // console.log('output of getWatches is.... ', this.props.orders)
  }

    helpFunc(evt, passedObj) {
        // this.props.updateUserWatchQty(passedObj)
        evt.preventDefault();
        this.props.updateUserWatchCountTest(passedObj);
        this.props.getWatchesFromServer();
    }

    helpDeleteFunc(evt, toDelete) {
      // this.props.updateUserWatchQty(passedObj)
      evt.preventDefault();
      this.props.deleteOrderTest(toDelete);
      this.props.getWatchesFromServer();
  }

  render() {
    const { globalusername } = this.props;
    console.log('output of getWatches is.... ', this.props.orders)
    let usersOrders = [
      {
        items: [
          {
            id: 1,
            name: '',
            brand: '',
            order: {}
          }
        ]
      }
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
            <Link
              to={{
                pathname: '/cart/checkout',
                state: { userData: usersOrders[0] }
              }}
            >
              <div>
                <h3>Checkout Here</h3>
              </div>
            </Link>
            <Link
                            to={{
                                pathname: '/cart/history',
                                state: { userData: usersOrders[0] },
                            }}
                        >
                            <div>
                                <h3>Cart History</h3>
                            </div>
                        </Link>
            <div>
              {usersOrders[0].items.map((eachItem) => {
                return (
                  <div>
                    {eachItem.name ? (
                      <div>
                      <img src={eachItem.ImageURL} />
                      <h3>Brand: {eachItem.brand}</h3>
                      <h3>Watch: {eachItem.name}</h3>
                      <h3>Quantity in Cart: {eachItem.order.quantity}</h3>
                      {/* <h3>Item Id: {eachItem.id}</h3>
                      <h3>UserId: {eachItem.order.userId}</h3> */}
                      <button type='button'
                        onClick={(evt) => {
                          this.helpFunc(evt,{
                            userId: eachItem.order.userId,
                            itemId: eachItem.id,
                            quantity: eachItem.order.quantity + 1})
                          }
                        }
                      >
                        Add One
                      </button>
                      <button type='button'
                        onClick={(evt) => {
                          this.helpFunc(evt,{
                            userId: eachItem.order.userId,
                            itemId: eachItem.id,
                            quantity: eachItem.order.quantity - 1})
                          }
                        }
                      >
                        Remove One
                      </button>
                      {/* <button
                        onClick={() => {
                          this.props.deleteOrder(eachItem.order.orderId);
                          this.props.getWatchesFromServer();
                        }}
                      > */}
                      <button
                        onClick={(evt) => {
                          this.helpDeleteFunc(evt, eachItem.order.orderId)
                        }}
                      >
                        Remove All from Cart
                      </button>
                      </div>
                      ) : (
                        <h3>Your Cart is Empty!</h3>
                      )
                    }
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Link
          to={{
            pathname: '/login'
          }}
        >
          <div>
            <h3>Please Log In Here</h3>
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
    updateUserWatchCountTest: (objectToUpdate) => {
        dispatch(updateUserWatchCountTest(objectToUpdate));
    },
    deleteOrder: (orderToDestroy) => {
        dispatch(deleteOrder(orderToDestroy));
    },
    deleteOrderTest: (orderToDestroy) => {
        dispatch(deleteOrderTest(orderToDestroy));
    },
});

export default connect(mapState, mapDispatch)(Cart);
