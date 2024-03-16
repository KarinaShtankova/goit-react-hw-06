import { useId } from 'react';
import css from './SearchBar.module.css';
export default function SearchBar({ value, onFilter }) {
  const searchId = useId();
  return (
    <div className={css.container}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        name="search"
        id={searchId}
        value={value}
        onChange={e => onFilter(e.target.value)}
      />
    </div>
  );
}
