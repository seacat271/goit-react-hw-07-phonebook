import {createAsyncThunk} from "@reduxjs/toolkit";
import { addContactFetch, deleteContactFetch, allContactFetch } from "utils/mockApi";

export const addContact = createAsyncThunk("contact/add", async (contact, {rejectWithValue}) => {
    try {
    const response = await addContactFetch(contact);
    return response.data
    } catch (error) {
        return rejectWithValue(error)
    }
}, {})

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