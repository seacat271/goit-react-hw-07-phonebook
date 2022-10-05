import {
  ItemList,
  Item,
  ItemContainer,
  NameStyle,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { deleteContact } from 'redux/contacts/slice';
import { deleteContact, fetchAll} from 'redux/contacts/contactsOperations';
import { useEffect } from 'react';



const ContactList = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.filter);
const items = useSelector(state => state.contacts.items);

useEffect(() => {
  dispatch(fetchAll())
},[dispatch])

const getVisibleContacts = () => {
  const filterNormalize = filter.toLowerCase(); 
  return (filter) 
  ? items.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
  : items
};

  return (
    <ItemList>
      {getVisibleContacts().map(({ name, id, phone }) => (
        <Item key={id}>
          <ItemContainer>
            {name}: <NameStyle>{phone}</NameStyle>
          </ItemContainer>
          <ButtonDelete onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDelete>
        </Item>
      ))}
    </ItemList>
  );
};

export default ContactList;
