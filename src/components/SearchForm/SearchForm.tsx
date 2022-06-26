import useForm from '../../hooks/useForm';
import { TEXTS } from '../../constants/constants';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  submitSearch: Function;
}

const initialForm: any = {
  search: ''
};

const FormWrapper = (() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  margin: '3rem 0',
  paddingLeft: '1rem !important',
  paddingRight: '1rem !important',
  backgroundColor: 'transparent',
}));

const FormSearch = (() => ({
  flex: 1,
  marginLeft: '1rem',
  fontSize: '1.5rem',
}));

export default function SearchForm({ submitSearch }: Props) {

  const [formData, handleSearchInputChanges, reset] = useForm(initialForm);

  const { search } = formData;

  const callSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    submitSearch(formData.search);
    reset();
  };

  return (
    <Box sx={FormWrapper}>
      <Paper
        component="form"
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
        <InputBase
          sx={FormSearch} 
          id="search" 
          name="search" 
          placeholder={TEXTS.FORMS.SEARCH.button}
          inputProps={{ 'aria-label': `${TEXTS.FORMS.SEARCH.button}` }} 
          value={search}
          onChange={handleSearchInputChanges}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search" onClick={callSubmit}>
          <SearchIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Paper>
    </Box>
  );
}
