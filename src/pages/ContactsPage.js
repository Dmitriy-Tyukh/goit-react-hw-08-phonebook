import { Wraper, BoxContact,} from '../components/ContactForm/ContactForm.styled';
import ContactsList from '../components/ContactsList/ContactsList';
import { fetchContacts } from '../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import { getContacts } from '../redux/contacts/selectors';
import Filter from 'components/Filter';
import { useEffect } from 'react';

const ContactPage = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wraper>
      <div>
        <h1>Phonebook </h1>
        <ContactForm />
        {isLoading && !error && <b>Request in progress...</b>}
      </div>

      <BoxContact>
        <h2>Contacts</h2>
        <Filter />
        <ContactsList />
      </BoxContact>
    </Wraper>
  );
};

export default ContactPage;
