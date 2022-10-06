import {createAsyncThunk} from "@reduxjs/toolkit";
import { addContactFetch, deleteContactFetch, allContactFetch } from "utils/mockApi";

export const addContact = createAsyncThunk("contact/add", async (contact, thunkApi) => {
    try {
    const response = await addContactFetch(contact);
    return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error)
    }
}, {
    condition: (data, {getState}) => {
        const {items} = getState().contacts
               if (items.some(
                contact => contact.name.toLowerCase() === data.name.toLowerCase()
              )) {
                alert(`${data.name} is already in contacts`);
                return false;
              }
    
              if (items.some(
                contact => contact.phone === data.phone)) {
                alert(`${data.phone} is already in contacts`);
                return false;
              }
    }
})

export const deleteContact = createAsyncThunk("contact/delete", async (id, {rejectWithValue}) => {
try {
    await deleteContactFetch(id);
    return id
} catch (error) { 
    rejectWithValue(error)
}
})

export const fetchContacts = createAsyncThunk("contacts/get", async (_, {rejectWithValue}) => {
try {
    const response = await allContactFetch();
    return response.data
} catch (error) {
    rejectWithValue(error)
}
})