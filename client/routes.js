import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Login, Signup } from './components/AuthForm';
import Cart from './components/Cart'
import Home from './components/Home';
import {me} from './store'
import CheckoutPage from './components/CheckoutPage';
import AllWatches from './components/watches'

/**
 * COMPONENT
 */
class Routes extends Component {
    componentDidMount() {
        this.props.loadInitialData();
    }

    render() {
        const { isLoggedIn } = this.props;

    // return (
    //   <div>
    //     {isLoggedIn ? (
    //       <Switch>
    //         <Route path="/test" component={Cart}/>
    //         <Route path="/home" component={Home} />
    //         <Route path="/checkout" component={CheckoutPage} />
    //         <Route path="/watches" component={AllWatches} />
    //         <Redirect to="/home" />

    //         {/* <Route path="/test" component={Cart}/> */}
    //       </Switch>
    //     ) : (
    //       <Switch>
    //         <Route path="/watches" component={AllWatches} />
    //         <Route path='/' exact component={ Login } />
    //         <Route path="/login" component={Login} />
    //         <Route path="/signup" component={Signup} />
    //       </Switch>
    //     )}
    //   </div>
    // )

    return (
      <div>
          <Switch>
            <Route path="/test" component={Cart}/>
            <Route path="/home" component={Home} />
            <Route path="/checkout" component={CheckoutPage} />
            <Route path="/watches" component={AllWatches} />
            {/* <Redirect to="/home" /> */}
            <Route path="/watches" component={AllWatches} />
            <Route path='/' exact component={ Login } />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            {/* <Route path="/test" component={Cart}/> */}
          </Switch>
      </div>
    )

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
