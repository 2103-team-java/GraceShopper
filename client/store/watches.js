import axios from "axios";

//ACTION OBJECT
export const GET_WATCHES = "GET_WATCHES";

//action CREATOR
export const getWatches = (Item) => ({
  type: GET_WATCHES,
  Item,
});

//THUNK
export const fetchWatches = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/watches");
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
      return action.Item;
    default:
      return state;
  }
}
