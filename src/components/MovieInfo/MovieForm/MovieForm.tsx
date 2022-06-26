import useForm from '../../../hooks/useForm';
import { MovieFormParams } from '../../../models/models';
import { TEXTS } from '../../../constants/constants';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {
  deleteButton?: boolean;
  actionDelete?: Function;
  submitForm: Function;
};

const DisplayColumn = (() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0',
  padding: '0',
}));

const FieldssRow = (() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  width: '100%',
  margin: '0 0 1rem 0',
  padding: '0',
}));

const NumberFieldStyle = (() => ({
  width: '100%',
  maxWidth: '100px',
  '& .MuiInputBase-root': {
    '& input': {
      padding: '1.5rem 10px 1.5rem 1rem',
      textAlign: 'center',
      fontSize: '1.15rem',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      '& legend': {
        fontSize: '1.5rem',
      },
    },
  },
}));

const TextareaStyle = (() => ({
  width: '100%',
  maxWidth: { xs: 275, sm: 375, md: 425 }, 
  '& .MuiInputBase-root.MuiInputBase-multiline': {
    width: '100%',
    padding: '0',
    '& textarea': {
      width: '100%',
      padding: '1.5rem 10px 1.5rem 1rem',
      fontSize: '1.15rem',
    },
  },
}));

const ButtonsRow = (() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '100%',
  margin: '1rem 0 0 0',
  padding: '0',
  '& .MuiButton-root': {
    fontSize: '1.35rem !important',
  },
}));

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

  return (
    <Box 
      component="form"
      sx={DisplayColumn}
    >
      <Box sx={FieldssRow}>
        <TextField 
          type="number" 
          label={TEXTS.FORMS.MOVIE.punctuation}
          id={punctuationValue} 
          name={punctuationValue} 
          InputProps={{
            inputProps: { 
              max: 5, min: 0 
            }
          }}
          sx={NumberFieldStyle}
          value={punctuation}
          onChange={handleInputChange}
        />
        <TextField 
          label="Comments"
          id={commentsValue} 
          name={commentsValue} 
          multiline 
          minRows={5}
          maxRows={5} 
          sx={TextareaStyle}
          value={comments}
          onChange={ handleInputChange }
        />
      </Box>
      <Box sx={ButtonsRow} 
        style={{
          justifyContent: `${deleteButton ? 'space-between' : 'flex-end'}`
        }}
      >
        {deleteButton && 
          <Button 
            variant="outlined"
            onClick={(e) => onDelete(e)}
          >{TEXTS.FORMS.MOVIE.delete}</Button>
        }
        <Button 
          type="submit" 
          variant="contained" 
          onClick={callSubmit} 
        >
          {TEXTS.FORMS.MOVIE.submit}
        </Button>
      </Box>
    </Box>
  );
}
