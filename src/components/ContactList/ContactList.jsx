import {
  ItemList,
  Item,
  ItemContainer,
  NameStyle,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
// import { deleteContact } from 'redux/contacts/slice';
import { deleteContact } from 'redux/contacts/contactsActions';


const ContactList = () => {
const dispatch = useDispatch();
const filter = useSelector(state => state.filter);
const items = useSelector(state => state.contacts.items);


const getVisibleContacts = () => {
  const filterNormalize = filter.toLowerCase(); 
  return (filter) 
  ? items.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
  : items
};

  return (
    <ItemList>
      {getVisibleContacts().map(({ name, id, number }) => (
        <Item key={id}>
          <ItemContainer>
            {name}: <NameStyle>{number}</NameStyle>
          </ItemContainer>
          <ButtonDelete onClick={() => dispatch(deleteContact(id))}>Delete</ButtonDelete>
        </Item>
      ))}
    </ItemList>
  );
};

export default ContactList;
