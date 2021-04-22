import axios from "axios";

const GOT_ONE_ITEM = "GOT_ONE_ITEM";


export const gotOneItem = (item) => {
  return {
    type: GOT_ONE_ITEM,
    item,
  };
};


export const getOneItem = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/api/items/${id}`);
    const itemData = response.data;
    const action = gotOneItem(itemData);
    dispatch(action);
  };
};

const initialState = {
  item: {},
};

export default function oneItemReducer(state = initialState, action) {
  switch (action.type) {
    case GOT_ONE_ITEM:
      return {
        ...state,
        item: action.item,
      };
    default:
      return state;
  }
}
