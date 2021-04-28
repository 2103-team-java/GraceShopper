import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItemDetails, getOrderHistory } from '../store/cartHistory';

class CartHistory extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        const userId = this.props.location.state.userData.id;
        this.props.getOrderHistory(userId);
    }

    render() {
        const allItems = this.props.cartHistory.items;
        let items;
        if (allItems !== undefined) {
            items = allItems.filter((item) => item.order.active === false);
        }
        return (
            <div>
                <h1> Cart History</h1>
                {items ? (
                    <div>
                        {items.map((item) => (
                            <div key={item.id}>
                                <img src={item.ImageURL} />
                                <h3>Brand: {item.brand}</h3>
                                <h3>Name: {item.name}</h3>
                                <h3>Quantity: {item.order.quantity}</h3>
                                <h3>Purchase Date: {item.order.updatedAt}</h3>
                            </div>
                        ))}
                    </div>
                ) : (
                    'Loading...'
                )}
            </div>
        );
    }
}
const mapState = (state) => {
    return {
        cartHistory: state.cartHistoryReducer,
    };
};

const mapDispatch = (dispatch) => {
    return {
        getOrderHistory: (userId) => dispatch(getOrderHistory(userId)),
    };
};

export default connect(mapState, mapDispatch)(CartHistory);
