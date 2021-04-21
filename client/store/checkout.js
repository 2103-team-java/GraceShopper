import axios from 'axios';

const SET_ADDRESS = 'SET_ADDRESS';
const UPDATE_STATUS = 'UPDATE_STATUS';

export const setAddress = (address) => ({
    type: SET_ADDRESS,
    address,
});

export const updateStatus = () => ({
    type: UPDATE_STATUS,
});

export const setAddressThunk = (id, address) => {
    return async (dispatch) => {
        try {
            const res = await axios.put(`/api/users`);
        } catch (error) {}
    };
};
