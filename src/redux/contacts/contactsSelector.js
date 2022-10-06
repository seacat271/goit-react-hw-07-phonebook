export const getItems = state => state.contacts.items;
export const getFilter = state => state.filter;

export const getVisibleContacts = (state) => {
    const items = getItems(state);
    const filter = getFilter (state);
    const filterNormalize = filter.toLowerCase(); 
    return (filter) 
    ? items.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
    : items
  };
  