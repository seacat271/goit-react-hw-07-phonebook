import { createSelector } from "@reduxjs/toolkit";
export const getItems = state => state.contacts.items;
export const getFilter = state => state.filter;


  export const getVisibleContacts = createSelector(
    [getItems, getFilter],
    (items, filter) => {
      const filterNormalize = filter.toLowerCase();
      return (filter) 
    ? items.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
    : items
    }
  );