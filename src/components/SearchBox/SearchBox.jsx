import { useDispatch, useSelector } from 'react-redux';
import styles from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();

  const value = useSelector(selectNameFilter);

  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={styles.container}>
      <p className={styles.label}>Find contacts by name</p>
      <input
        className={styles.input}
        type="text"
        name="searchBox"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
