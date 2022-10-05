import axios from 'axios';

import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://633c5013f11701a65f73ed7d.mockapi.io/contacts';


export const addContact = createAsyncThunk("contact/add", async (contact, {rejectWithValue}) => {
    try {
    const response = await axios.post('/contact', contact);
    return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
})

export const deleteContact = createAsyncThunk("contact/delete", async (id, {rejectWithValue}) => {
try {
    await axios.delete(`/contacts/${id}`);
    return id
} catch (error) { 
    rejectWithValue(error)
}
})

export const fetchContacts = createAsyncThunk("contacts/get", async (_, {rejectWithValue}) => {
try {
    const response = await axios.get('/contacts');
    return response.data
} catch (error) {
    rejectWithValue(error)
}
})