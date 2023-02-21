import { List, Link, ButtonDelete, TextStyled } from './ContactsList.styled';
import { stringAvatar } from '../Utils/contactsAvatar';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getValue } from 'redux/contacts/selectors';
import { deleteContacts } from 'redux/contacts/operations';
import { MdDeleteForever } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { Avatar } from '@mui/material';

const ContactsList = () => {
  const { items, isLoading, error } = useSelector(getContacts);
  const filter = useSelector(getValue);
  const dispatch = useDispatch();

  const filterContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = Id => {
    dispatch(deleteContacts(Id));
    toast.success('Ви видалили контакт!');
  };

  return (
    <List>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}

      {filterContacts.map(({ id, name, number }) => (
        <Link key={id}>
          <div className="wraper">
            <div className="contact">
              <div className="contactWraper">
                <Avatar {...stringAvatar(`${name}`)} />
                <h2 className="contactName">{name}</h2>
              </div>
              <p>{number}</p>

              <ButtonDelete type="button" onClick={() => handleDelete(id)}>
                <MdDeleteForever size={16} />
                <TextStyled> Delete </TextStyled>
              </ButtonDelete>
            </div>
          </div>
        </Link>
      ))}
    </List>
  );
};

export default ContactsList;
