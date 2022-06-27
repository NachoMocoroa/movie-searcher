import useForm from '../../../hooks/useForm';
import { MovieFormParams } from '../../../models/models';
import { 
  DisplayColumn, 
  FieldssRow, 
  FieldColumn, 
  FieldColumnNumber, 
  NumberFieldStyle, 
  TextareaStyle, 
  ButtonsRow 
} from "./MovieFormStyles";

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Translation } from '../../../languages/components/Translation';

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

  return (
    <Box 
      component="form"
      sx={DisplayColumn}
    >
      <Box sx={FieldssRow}>
        <Box sx={FieldColumnNumber}>
          <Typography>
            <Translation>form-punctuation</Translation>
          </Typography>
          <TextField 
            type="number" 
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
        </Box>
        <Box sx={FieldColumn}>
          <Typography>
            <Translation>form-comments</Translation>
          </Typography>
          <TextField 
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
          >
            <Translation>button-delete</Translation>
          </Button>
        }
        <Button 
          type="submit" 
          variant="contained" 
          onClick={callSubmit} 
        >
          <Translation>button-submit</Translation>
        </Button>
      </Box>
    </Box>
  );
}
