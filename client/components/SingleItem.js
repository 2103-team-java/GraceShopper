import React from "react";
import { connect } from "react-redux";
import { getOneItem } from "../store/singleWatches";
import { Link } from "react-router-dom";

export class SingleItem extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.oneItem(id);
  }

  updateCart() {
    this.props.singleItem.orders.quantity++
  }

  render() {
    const { singleItem } = this.props;

    console.log("props", this.props)

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

        <button type="submit" onClick={() => updateCart()}>
          Add to cart
        </button>

      </div>
    );
  }
}

const mapState = (state) => {
  return {
    singleItem: state.oneItemReducer.item,
  };
};

const mapDispatch = (dispatch) => {
  return {
    oneItem: (id) => dispatch(getOneItem(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleItem);
