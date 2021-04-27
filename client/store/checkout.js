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
    return async () => {
        const token = window.localStorage.getItem(TOKEN)
        try {
            const res = await axios.put(`/api/users/checkout/${id}`, address, {headers: {"authorization": token}});
        } catch (error) {
            console.log(error);
        }
    };
};

export const setInactive = (orderId) => {
    return async () => {
        const token = window.localStorage.getItem(TOKEN)
        try {
            await axios.put(`/api/orders/checkout/${orderId}`, {headers: {"authorization": token}});
        } catch (error) {
            console.log(error);
        }
    };
};
