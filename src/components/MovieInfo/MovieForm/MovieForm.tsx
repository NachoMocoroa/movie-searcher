import { BaseSyntheticEvent, useState } from 'react';
import useForm from '../../../hooks/useForm';
import { MovieFormParams } from '../../../models/models';
import { 
  DisplayColumn, 
  FieldssRow, 
  FieldError, 
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
  const [showError, setShowError] = useState<boolean>(false);
  const [errorPunctuation, setErrorPunctuation] = useState<boolean>(false);
  const [errorComments, setErrorComments] = useState<boolean>(false);

  const { punctuation, comments } = formData;

  const errorMessageNode = (): React.ReactNode => <Translation>error-field-required</Translation>;

  const checkError = (name: string, value: any) => {
    setShowError(false);
    if (name === punctuationValue) {
      value.length === 0 ? setErrorPunctuation(true) : setErrorPunctuation(false);
    } else if (name === commentsValue) {
      value.length === 0 ? setErrorComments(true) : setErrorComments(false);
    }
  };

  const checkValue = (e: BaseSyntheticEvent) => {
    checkError(e.target.name, e.target.value);
    handleInputChange(e);
  };

  const checkForm = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const valuesEmpty = Object.values(formData).includes('');
    if (!valuesEmpty) {
      callSubmit();
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  const callSubmit = () => {
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
            error={errorPunctuation} 
            helperText={
              errorPunctuation && errorMessageNode()
            } 
            onChange={checkValue}
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
            error={errorComments} 
            helperText={
              errorComments && errorMessageNode()
            } 
            onChange={checkValue}
          />
        </Box>
      </Box>
      <Box 
        sx={FieldError}
        style={{
          display: showError ? 'flex' : 'none'
        }}
      >
        <Typography>
          <Translation>error-empty-fields</Translation>
        </Typography>
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
          onClick={checkForm} 
        >
          <Translation>button-submit</Translation>
        </Button>
      </Box>
    </Box>
  );
}
