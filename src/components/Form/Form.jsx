import { useState } from 'react';
import { FormInput, ButtonAdd, Input, Label } from './Form.styled';
import { useDispatch} from 'react-redux/es/exports';
import { addContact } from "../../redux/contacts/contactsOperations"


const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case "name":
          setName(value);
        break;
      case "phone":
          setPhone(value);
        break;
      default:
        return;
  }
};

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(addContact({name, phone}));
    reset()
  };

  const reset = () => {
    setName("");
    setPhone("");
  };

  return(<FormInput onSubmit={handleSubmit}>
    <Label>
      Name
      <Input
        value={name}
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
    <Label>
      Number
      <Input
        value={phone}
        onChange={handleChange}
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
    <ButtonAdd type="submit">Add contact</ButtonAdd>
  </FormInput>)
}

export { Form, ButtonAdd, Label, Input };

