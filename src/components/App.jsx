import ContactForm from './ContactForm/ContactForm.';
import SearchBar from './SearchBar/SearchBar';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';

export default function App() {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBar />
      <ContactList />
    </div>
  );
}
