import axios from "axios";

//ACTION TYPE
export const GET_WATCHES = "GET_WATCHES";

//action CREATOR
export const getWatches = (items, brand) => ({
  type: GET_WATCHES,
  items,
  brand,
});

//THUNK
export const fetchWatches = (brand) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("/api/items");
      dispatch(getWatches(res.data, brand));
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
      const filteredProducts = action.items.filter((item) => {
        return action.brand === 'All' || action.brand === item.brand; 
      });
      return filteredProducts;
    default:
      return state;
  }
}

