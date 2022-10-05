import axios from 'axios';

import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://633c5013f11701a65f73ed7d.mockapi.io/contacts';

// export const addContact = contact => async dispatch => {
//   dispatch(addContactRequest());
// try {
//     const response = await axios.post('/contacts', contact);
//     dispatch(addContactSuccess(response.data))
    
// } catch (error) {dispatch(addContactError(error))}
// };

export const addContact = createAsyncThunk("contact/add", async (contact) => {
    const response = await axios.post('/contacts', contact);
    return response.data
})

// export const deleteContact = id => async dispatch => {
//     dispatch(deleteContactRequest());
// try {
//     await axios.delete(`/contacts/${id}`);
//     dispatch(deleteContactSuccess(id));

// } catch (error) {dispatch(deleteContactError(error))}
// };
export const deleteContact = createAsyncThunk("contact/delete", async (id) => {
    await axios.delete(`/contacts/${id}`);
    return id
})


export const fetchContacts = createAsyncThunk("contacts/get", async () => {
    const response = await axios.get('/contacts');
    return response.data
})