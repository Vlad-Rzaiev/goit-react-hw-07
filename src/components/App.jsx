import styles from './App.module.css';
import Section from './Section/Section';
import Container from './Container/Container';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';

function App() {
  return (
    <Section>
      <Container>
        <h1 className={styles.title}>Phonebook</h1>

        <ContactForm />

        <SearchBox />

        <ContactList />
      </Container>
    </Section>
  );
}

export default App;
