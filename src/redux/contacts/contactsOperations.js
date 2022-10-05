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

axios.defaults.baseURL = 'https://633c5013f11701a65f73ed7d.mockapi.io/contacts';

export const addContact = contact => dispatch => {
  dispatch(addContactRequest());
  axios
    .post('/contacts', contact)
    .then(response => dispatch(addContactSuccess(response.data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
    dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export const getContact = () => dispatch => {
    dispatch(getContactRequest());
    axios.get('/contacts').then(response => dispatch(getContactSuccess(response.data))).catch(error => dispatch(getContactError(error)))
}
