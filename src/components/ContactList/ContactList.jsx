import {
  ItemList,
  Item,
  ItemContainer,
  NameStyle,
  ButtonDelete,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { deleteContact } from 'redux/contacts/slice';


const ContactList = () => {
const dispatch = useDispatch();
const contacts = useSelector(state => state.contacts);
const filter = useSelector(state => state.filter);

const getVisibleContacts = () => {
  const filterNormalize = filter.toLowerCase(); 
  return (filter) 
  ? contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalize))
  : contacts
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
