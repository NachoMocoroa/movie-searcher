import { SetStateAction, useState } from 'react';
import classes from './SearchForm.module.scss';

interface Props {
  search: Function;
}

const emptyString: string = '';

export default function SearchForm({ search }: Props) {

  const [searchValue, setSearchValue] = useState(emptyString);

  const handleSearchInputChanges = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSearchValue(e.target.value);
  };

  const resetInputField = () => {
    setSearchValue(emptyString);
  };

  const callSearchFunction = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    search(searchValue);
    resetInputField();
  };

  return (
    <div className={classes.search_form}>
      <form>
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="search" />
      </form>
    </div>
  );
}
