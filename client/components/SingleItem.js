import React from "react";
import { connect } from "react-redux";
import { getOneItem } from "../store/singleWatches";
import {
  createOrder,
  getUserWatches,
  updateUserWatchCount,
  getWatches,
  updateUserWatchCountTest,
} from "../store/cart";

export class SingleItem extends React.Component {
  constructor () {
    super()
    this.updateCart = this.updateCart.bind(this)
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.oneItem(id);
    this.props.getWatchesFromServer()
  }

  updateCart(id) {
    const {globalusername} = this.props
    const { singleItem } = this.props;
    let usersOrders = [
      {items: [
        {id: 1, name: "PlaceHolder1", brand: "PHBrand1", order: {quantity: 1, userId: 1}}
      ]}
    ]

    for (let i = 0; i < this.props.orders.allWatches.length; i++) {
      if (this.props.orders.allWatches[i].username === globalusername) {
        usersOrders[0] = this.props.orders.allWatches[i]
      }
    }

    usersOrders[0].items.map((eachItem) => {
      if (eachItem.id !== singleItem.id) {
        return this.props.createOrder({
          userId: eachItem.order.userId,
          itemId: singleItem.id,
          quantity: 1,
        })
      }
      // if (eachItem.id === singleItem.id) {
      //   return this.props.updateUserWatchCountTest({
      //     userId: eachItem.order.userId,
      //     itemId: eachItem.id,
      //     quantity:(eachItem.order.quantity + 1)
      //   })
      // }
    })
  }

  render() {
    const { singleItem } = this.props;

    console.log("props", this.props);

    return (
      <div>
        <img
          src={singleItem.ImageURL}
          alt={singleItem.name}
          className="image"
        />

        <h3>Name: {singleItem.name}</h3>
        <h3>Brand: {singleItem.brand}</h3>
        <h3>Price: $ {singleItem.price}</h3>
        <h3>Description: {singleItem.description}</h3>

        <button type="submit" onClick={() => this.updateCart(singleItem.id)}>
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
    orders: state.cart
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
      dispatch(updateUserWatchCountTest(objectToUpdate))
    },
  };
};

export default connect(mapState, mapDispatch)(SingleItem);
