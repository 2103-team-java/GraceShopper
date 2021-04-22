import {connect} from 'react-redux'
import React, { Component } from 'react';
import { getWatches, getUserWatches, updateUserWatchCount } from '../store/cart'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export class Cart extends Component {


  componentDidMount() {
    console.log('component mounted')
    console.log('this.state is ...', this.state)
    this.props.getWatchesFromServer()
    // this.setState({
    //   [evt.target.name]: evt.target.value
    // });
  }


  render() {
    const {globalusername} = this.props
    console.log('globalIs ..... ', globalusername)
    console.log('props are', this.props)
    // let usersOrders = []
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

    usersOrders[0].items.forEach((eachItem) => {
      eachItem.userId = usersOrders[0].id
    })

    //let usersOneOrder = usersOrders[0]
    //console.log('usersOrders is ....', usersOrders)
    return (
      <div>
        <h3>Your Cart {globalusername}</h3>
        {/* <div>
          {usersOneOrder}
        </div> */}
        <div>
        {usersOrders[0].items.map((eachItem) => {
          return (
            <div>
              <h3>ItemBrand: {eachItem.brand}</h3>
              <h3>ItemName: {eachItem.name}</h3>
              <h3>Quantity: {eachItem.order.quantity}</h3>
              <h3>Item Id: {eachItem.id}</h3>
              <h3>UserId: {eachItem.order.userId}</h3>
              {/* <button onClick={this.handleClick}>Add Item</button> */}
              {/* <button onClick={() => this.props.updateUserWatchQty({
                userId: eachItem.order.userId,
                itemId: eachItem.id,
                quantity:(eachItem.order.quantity + 1)
              })}>Add Item</button> */}
              <button onClick={() =>
              {
              this.props.updateUserWatchQty({
                userId: eachItem.order.userId,
                itemId: eachItem.id,
                quantity:(eachItem.order.quantity + 1)
              })

              this.props.getWatchesFromServer()

              }

              }>Add Item</button>
              {/* <button onClick={this.onClickFunc}>Add Item</button> */}
              {/* can i call multiple functions within my onClick */}
              <button onClick={() => this.props.updateUserWatchQty({
                userId: eachItem.order.userId,
                itemId: eachItem.id,
                quantity:(eachItem.order.quantity - 1)
              })}>Subtract Item</button>
              <button >Remove Item</button>


              {/* NEED TO ADD FUNCTIONALITY TO REMOVE ITEM AS WELL
              NEED TO ADD CHECKOUT BUTTON AND PASS PARAMS */}



            </div>
          )
        })}
        </div>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    globalusername: state.auth.username,
    orders: state.cart
  }
}

const mapDispatch = (dispatch) => ({
  getWatchesFromServer: () => dispatch(getWatches()),
  getUserWatchesFromServer: () => dispatch(getUserWatches()),
  updateUserWatchQty: (objectToUpdate) => dispatch(updateUserWatchCount(objectToUpdate))
});

export default connect(mapState, mapDispatch)(Cart)
