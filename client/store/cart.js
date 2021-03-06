import axios from 'axios';

const initialState = {
    allWatches: [],
    updatedUserWatches: {},
    destroyTracker: {},
};

const TOKEN = 'token';
const GOT_WATCHES_FROM_SERVER = 'GOT_WATCHES_FROM_SERVER';
const GOT_USER_WATCHES_FROM_SERVER = 'GOT_USER_WATCHES_FROM_SERVER';
const UPDATE_USER_WATCH_QUANTITY = 'UPDATE_USER_WATCH_QUANTITY';
const POST_ORDER = 'POST_ORDER';
const DESTROY_A_ORDER = 'DESTROY_A_ORDER';

export const getWatchesFromServer = (getWatchesFromServer) => {
    return {
        type: GOT_WATCHES_FROM_SERVER,
        getWatchesFromServer,
    };
};

export const getUserWatchesFromServer = (userWatchesFromServer) => {
    return {
        type: GOT_USER_WATCHES_FROM_SERVER,
        userWatchesFromServer,
    };
};

export const updateUserWatchQty = (userWatchQty) => {
    return {
        type: UPDATE_USER_WATCH_QUANTITY,
        userWatchQty,
    };
};

export const postOrder = (order) => {
    return {
        type: POST_ORDER,
        order,
    };
};

export const destroyOrder = (orderToDestroy) => {
    return {
        type: DESTROY_A_ORDER,
        orderToDestroy,
    };
};

//api/orders
// header ... localstorage should work here ... !

export const getWatches = () => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        const { data: orders } = await axios.get('/api/orders', {
            headers: {
                authorization: token,
            },
        });
        dispatch(getWatchesFromServer(orders));
    };
};

export const getUserWatches = (singleuser) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        const { data: orders } = await axios.get(`/api/orders/${singleuser}`);
        dispatch(getUserWatchesFromServer(orders));
    };
};

export const updateUserWatchCount = (updatedUserWatchObj) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        //const {data: updated} = await axios.put('/api/orders', updatedUserWatchObj);
        const { data: updated } = await axios.put(
            '/api/orders',
            updatedUserWatchObj,
            { headers: { authorization: token } }
        );
        dispatch(updateUserWatchQty(updated));
    };
};

//https://blog.jscrambler.com/async-dispatch-chaining-with-redux-thunk/
export const updateUserWatchCountTest = (updatedUserWatchObj) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        await Promise.all([
            dispatch(updateUserWatchCount(updatedUserWatchObj)),
        ]);
        return dispatch(getWatches());
    };
};

export const createOrder = (order) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        const response = await axios.post('/api/orders', order, {
            headers: { authorization: token },
        });
        const orderData = response.data;
        dispatch(postOrder(orderData));
    };
};

export const deleteOrder = (orderToDestroyId) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        await axios.delete(`api/orders/${orderToDestroyId}`, {
            headers: { authorization: token },
        });
        dispatch(destroyOrder(orderToDestroyId));
    };
};

export const deleteOrderTest = (orderToDestroyId) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        await Promise.all([dispatch(deleteOrder(orderToDestroyId))]);
        return dispatch(getWatches());
    };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case GOT_WATCHES_FROM_SERVER:
            return { ...state, allWatches: action.getWatchesFromServer };
        case GOT_USER_WATCHES_FROM_SERVER:
            return { ...state, allWatches: action.userWatchesFromServer };
        case UPDATE_USER_WATCH_QUANTITY:
            return { ...state, updatedUserWatches: action.userWatchQty };
        case POST_ORDER:
            return { ...state, updatedUserWatches: action.userWatchQty };
        case DESTROY_A_ORDER: {
            return { ...state, destroyTracker: action.orderToDestroy };
        }
        default:
            return state;
    }
    // return null;
}
