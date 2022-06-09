import useForm from '../../../hooks/useForm';
import classes from './MovieForm.module.scss';

interface Props {
  submitForm: Function;
};

const initialForm = {
  punctuation: '',
  comments: ''
};

export default function MovieForm({ submitForm }: Props) {

  const [formData, handleInputChange, reset] = useForm(initialForm);

  const { punctuation, comments } = formData;

  const callSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    submitForm(formData);
    reset();
  };

  return (
    <div className={classes.movie_form}>
      <form>
        <div className={classes.movie_form__fields}>
          <fieldset>
            <label htmlFor="punctuation">Punctuation</label>
            <input 
              type="number" 
              id="punctuation" 
              name="punctuation" 
              min={0} 
              max={5} 
              value={punctuation}
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor="comments">Comments</label>
            <textarea 
              rows={5} 
              id="comments" 
              name="comments" 
              value={comments}
              onChange={ handleInputChange }
            ></textarea>
          </fieldset>
        </div>
        <div className={classes.movie_form__submit}>
          <input onClick={callSubmit} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
