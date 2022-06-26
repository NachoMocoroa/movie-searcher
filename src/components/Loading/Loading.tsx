import Box from '@mui/material/Box';

const Loginrapper = (() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '50vh',
  '& img': {
    width: '100%',
    maxWidth: '50px',
  },
}));

export default function Loading() {

  return (
    <Box sx={Loginrapper}>
      <img src='./images/loading.gif' alt='Loading' />
    </Box>
  );
}
