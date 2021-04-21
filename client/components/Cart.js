import {connect} from 'react-redux'
import React, { Component } from 'react';
import { getWatches, getUserWatches } from '../store/cart'
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export class Cart extends Component {

  componentDidMount() {
    console.log('component mounted')
    this.props.getWatchesFromServer()
    //this.props.getUserWatchesFromServer(this.props.globalusername)
    //this.props.getUserWatchesFromServer('sam')
  }

  render() {
    const {globalusername} = this.props
    console.log('globalIs ..... ', globalusername)
    console.log('props are', this.props)
    let usersOrders = []
    for (let i = 0; i < this.props.orders.allWatches.length; i++) {
      if (this.props.orders.allWatches[i].username === globalusername) {
        usersOrders.push(this.props.orders.allWatches[i])
      }
    }
    console.log('usersOrders is ....', usersOrders)
    // const filteredItems = this.props.orders.allWatches.filter((eachUsersWatches) => {
    //   return eachUsersWatches.username = globalusername
    // })
    // console.log('filteredItems are', filteredItems)
    return (
      <div>
        <h3>Your Cart {globalusername}</h3>
        <div>


        {this.props.allProjects.map((eachProject) => {
            return (
              <div key={eachProject.id} className='each-item'>
                <Link to={`/projects/${eachProject.id}`}>
                  <div>
                    <h3>Project: {eachProject.title}</h3>
                    <h3>Deadline: {eachProject.deadline}</h3>
                  </div>
                </Link>
                <form onSubmit={(event) => event.preventDefault()}>
                  <button className='delete-button' onClick={() => this.props.deleteProject(eachProject)}>
                    X
                  </button>
                </form>
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
  getUserWatchesFromServer: () => dispatch(getUserWatches())
});

export default connect(mapState, mapDispatch)(Cart)
