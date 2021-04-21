import axios from 'axios'

const initialState = {
  allWatches: []
}

const GOT_WATCHES_FROM_SERVER = 'GOT_WATCHES_FROM_SERVER'
const GOT_USER_WATCHES_FROM_SERVER = 'GOT_USER_WATCHES_FROM_SERVER'


export const getWatchesFromServer = (getWatchesFromServer) => {
  return {
    type: GOT_WATCHES_FROM_SERVER,
    getWatchesFromServer
  }
};

export const getUserWatchesFromServer = (userWatchesFromServer) => {
  return {
    type: GOT_USER_WATCHES_FROM_SERVER,
    userWatchesFromServer
  }
};

export const getWatches = () => {
  return async (dispatch) => {
    const { data: orders } = await axios.get('/api/orders');
    dispatch(getWatchesFromServer(orders));
  };
};

export const getUserWatches = (singleuser) => {
  return async (dispatch) => {
    const { data: orders } = await axios.get(`/api/orders/${singleuser}`);
    dispatch(getUserWatchesFromServer(orders));
  };
};

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_WATCHES_FROM_SERVER:
      return {...state, allWatches: action.getWatchesFromServer}
    case GOT_USER_WATCHES_FROM_SERVER:
      return {...state, allWatches: action.userWatchesFromServer}
    default:
      return state
  }
  // return null;
}
