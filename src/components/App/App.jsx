import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contactsSlice';
import Section from '../Section/Section';
import Container from '../Container/Container';
import ContactForm from '../ContactForm/ContactForm';
import SearchBox from '../SearchBox/SearchBox';
import ContactList from '../ContactList/ContactList';
import styles from './App.module.css';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <h1 className={styles.title}>Phonebook</h1>

        <ContactForm />

        <SearchBox />

        {loading && !error && <Loader />}
        {error && <ErrorMessage message={error} />}
        {contacts.length > 0 && <ContactList />}
      </Container>
    </Section>
  );
}

export default App;
