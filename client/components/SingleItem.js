import React from "react";
import { connect } from "react-redux";
import { getOneItem } from "../store/singleWatches";
import {
  createOrder,
  getUserWatches,
  updateUserWatchCount,
  getWatches,
} from "../store/cart";

export class SingleItem extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.oneItem(id);
  }

  updateCart(id) {}

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

        <button type="submit" onClick={() => updateCart(singleItem.id)}>
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
  };
};

const mapDispatch = (dispatch) => {
  return {
    oneItem: (id) => dispatch(getOneItem(id)),
    createOrder: (obj) => dispatch(createOrder(obj)),
    updateUserWatchQty: (obj) => dispatch(updateUserWatchCount(obj)),
    getUserWatchesFromServer: () => dispatch(getUserWatches()),
    getWatchesFromServer: () => dispatch(getWatches()),
  };
};

export default connect(mapState, mapDispatch)(SingleItem);
