import useForm from '../../../hooks/useForm';
import { MovieFormParams } from '../../../models/models';
import classes from './MovieForm.module.scss';
import { TEXTS } from '../../../constants/constants';

interface Props {
  deleteButton?: boolean;
  actionDelete?: Function;
  submitForm: Function;
};

const initialForm: MovieFormParams = {
  punctuation: '',
  comments: ''
};

const punctuationValue = 'punctuation';
const commentsValue = 'comments';

export default function MovieForm({ deleteButton, actionDelete, submitForm }: Props) {

  const [formData, handleInputChange, reset] = useForm(initialForm);

  const { punctuation, comments } = formData;

  const callSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    submitForm(formData);
    reset();
  };

  const onDelete = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    actionDelete && actionDelete();
  };

  const getButtonsAlignment = () => {
    return deleteButton ? `${classes.two_buttons}`: `${classes.one_button}`;
  };

  return (
    <div className={classes.movie_form}>
      <form>
        <div className={classes.movie_form__fields}>
          <fieldset>
            <label htmlFor={punctuationValue}>{TEXTS.FORMS.MOVIE.punctuation}</label>
            <input 
              type="number" 
              id={punctuationValue} 
              name={punctuationValue} 
              min={0} 
              max={5} 
              value={punctuation}
              onChange={handleInputChange}
            />
          </fieldset>
          <fieldset>
            <label htmlFor={commentsValue}>{TEXTS.FORMS.MOVIE.comments}</label>
            <textarea 
              rows={5} 
              id={commentsValue} 
              name={commentsValue} 
              value={comments}
              onChange={ handleInputChange }
            ></textarea>
          </fieldset>
        </div>
        <div className={`${classes.movie_form__submit} ${getButtonsAlignment()}`}>
          {deleteButton && 
            <button 
              className={classes.delete_btn}
              onClick={(e) => onDelete(e)}
            >{TEXTS.FORMS.MOVIE.delete}</button>
          }
          <input onClick={callSubmit} type="submit" value={TEXTS.FORMS.MOVIE.submit} />
        </div>
      </form>
    </div>
  );
}
