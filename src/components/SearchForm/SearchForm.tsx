import useForm from '../../hooks/useForm';
import classes from './SearchForm.module.scss';
import { TEXTS } from '../../constants/constants';

interface Props {
  submitSearch: Function;
}

const initialForm: any = {
  search: ''
};

export default function SearchForm({ submitSearch }: Props) {

  const [formData, handleSearchInputChanges, reset] = useForm(initialForm);

  const { search } = formData;

  const callSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    submitSearch(formData.search);
    reset();
  };

  return (
    <div className={classes.search_form}>
      <form>
        <input 
          type="text" 
          id="search" 
          name="search" 
          value={search}
          onChange={handleSearchInputChanges} 
        />
        <input onClick={callSubmit} type="submit" value={TEXTS.FORMS.SEARCH.button} />
      </form>
    </div>
  );
}
