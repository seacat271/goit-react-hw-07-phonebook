import axios from 'axios';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  getContactRequest,
  getContactSuccess,
  getContactError,
} from './contactsActions';
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://633c5013f11701a65f73ed7d.mockapi.io/contacts';

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());
try {
    const response = await axios.post('/contacts', contact);
    dispatch(addContactSuccess(response.data))
    
} catch (error) {dispatch(addContactError(error))}
};

export const deleteContact = id => async dispatch => {
    dispatch(deleteContactRequest());
try {
    await axios.delete(`/contacts/${id}`);
    dispatch(deleteContactSuccess(id));

} catch (error) {dispatch(deleteContactError(error))}
};

// export const getContact = () => async dispatch => {
//     dispatch(getContactRequest());
// try {
//     const response = await axios.get('/contacts');
//     dispatch(getContactSuccess(response.data))

// } catch (error) {dispatch(getContactError(error))}
// }


export const fetchAll = createAsyncThunk("contacts/get", async () => {
    const response = await axios.get('/contacts');
    return response.data
})