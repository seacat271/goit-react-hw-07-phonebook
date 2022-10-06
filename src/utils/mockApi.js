import axios from 'axios';
axios.defaults.baseURL = 'https://633c5013f11701a65f73ed7d.mockapi.io/contacts';

export const addContactFetch = (value) => axios.post('/contacts', value);
export const deleteContactFetch = (value) => axios.delete(`/contacts/${value}`)
export const allContactFetch = () => axios.get('/contacts');