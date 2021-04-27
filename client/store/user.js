import axios from 'axios'

const initialState = {
  users: [],
}

/**
 * ACTION TYPES
 */
 const GET_USER = 'GET_USER'

 /**
  * ACTION CREATORS
  */
 export const getUser = (user) => {
  return {
    type: GET_USER,
    user,
  }
};

 /**
  * THUNK CREATORS
  */
//  export const gotUser = () => async dispatch => {
//   const token = window.localStorage.getItem(TOKEN)
//   console.log("token---->", token)
//   if (token) {
//     const res = await axios.get('/api/users', {
//       headers: {
//         authorization: token
//       }
//     })
//     console.log("response ---->", res)
//     const { id, username } = res.data
//     return dispatch(getUser({ id, username } ))
//   }
//  }

 export const gotUser = () => {
  return async (dispatch) => {
    const token = window.localStorage.getItem(TOKEN)
    const { data: users } = await axios.get('/api/users', {
      headers: {
        "authorization": token
      }
    });

    dispatch(getUser(users));
  };
};

 /**
  * REDUCER
  */
 export default function userReducer (state = initialState, action) {
   switch (action.type) {
     case GET_USER:
       return {...state, users: action.user}
     default:
       return state
   }
 }
