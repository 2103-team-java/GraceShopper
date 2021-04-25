import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Cart from './components/Cart';
import { me } from './store';
import CheckoutPage from './components/checkout/CheckoutPage';
import SingleItem from './components/SingleItem';
import AllWatches from './components/watches';

/**
 * COMPONENT
 */
class Routes extends Component {
    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        return (
            <div>
                <Route exact path="/watches/:id" component={SingleItem} />
                <Route exact path="/watches" exact component={AllWatches} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route exact path="/cart" component={Cart} />
                <Route path="/cart/checkout" component={CheckoutPage} />
            </div>
        );
    }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
    return {
        // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
        // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
        isLoggedIn: !!state.auth.id,
    };
};

const mapDispatch = (dispatch) => {
    return {
        loadInitialData() {
            dispatch(me());
        },
    };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
