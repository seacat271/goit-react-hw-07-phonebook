import { createAction } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://633c5013f11701a65f73ed7d.mockapi.io';
// export const addContact = createAction("contacts/add");

// export const addContact = contact => dispatch => {

//     dispatch({type: "contacts/addRequest"})
//   axios
//     .post('https://633c5013f11701a65f73ed7d.mockapi.io/contacts', contact)
//     .then(response =>
//       dispatch({ type: 'contacts/addSuccess', payload: response.data })
//     )
//     .catch(error => dispatch({type: 'contacts/addError', payload: error,} ));
// };
// export const getContactRequest = createAction('contacts/getRequest');
// export const getContactSuccess = createAction('contacts/getSuccess');
// export const getContactError = createAction('contacts/getError');

export const addContactRequest = createAction("contacts/addRequest");
export const addContactSuccess = createAction("contacts/addSuccess");
export const addContactError = createAction("contacts/addError");

export const deleteContactRequest = createAction('contacts/deleteRequest');
export const deleteContactSuccess = createAction('contacts/deleteSuccess');
export const deleteContactError = createAction('contacts/deleteError');