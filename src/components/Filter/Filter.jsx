import { useDispatch, useSelector } from 'react-redux';
import { searchContact } from 'redux/contacts/filterSlice';
import { Input, Label } from './Filter.styled';
import { getValue } from 'redux/contacts/selectors';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(getValue);

  const handelFilter = event => {
    const value = event.target.value;
    dispatch(searchContact(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        onChange={handelFilter}
        placeholder="Find contacts"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
  );
}

export default Filter;
