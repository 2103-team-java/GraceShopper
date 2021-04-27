import axios from 'axios';

const GOT_ORDER_HISTORY = 'GET_ORDER_HISTORY';
const TOKEN = 'token';

export const gotOrderHistory = (orderHistory) => {
    return {
        type: GOT_ORDER_HISTORY,
        orderHistory,
    };
};

export const getOrderHistory = (userId) => {
    return async (dispatch) => {
        const token = window.localStorage.getItem(TOKEN);
        const { data: orders } = await axios.get(`/api/users/${userId}`, {
            headers: {
                authorization: token,
            },
        });
        dispatch(gotOrderHistory(orders));
    };
};

const initialState = [];
export default function cartHistoryReducer(state = initialState, action) {
    switch (action.type) {
        case GOT_ORDER_HISTORY:
            return action.orderHistory;
        default:
            return state;
    }
}
