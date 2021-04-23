import axios from "axios";

//ACTION TYPE
const GET_WATCHES = "GET_WATCHES";


//action CREATOR
export const getWatches = (items) => ({
  type: GET_WATCHES,
  items,
});


//THUNK
export const fetchWatches = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/items");
      dispatch(getWatches(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};


//REDUCER
const initialState = [];


export default function watchesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WATCHES:
      return action.items;
    default:
      return state;
  }
}
