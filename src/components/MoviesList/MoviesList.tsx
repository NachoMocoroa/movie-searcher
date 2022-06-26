import MessageCard from '../MessageCard/MessageCard';
import { MovieResult } from '../../models/models';
import { TEXTS } from '../../constants/constants';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

interface Props {
  data: any;
  retrieveItem: Function;
}

const GridWrapper = (() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100% !important',
  maxWidth: 'lg',
  height: '100%',
  margin: '0 auto !important',
  padding: '0 !important',
  backgroundColor: 'transparent',
}));

const GridItem = (() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '100%',
  marginLeft: '0.5rem !important',
  marginRight: '0.5rem !important',
  marginBottom: '1rem !important',
  paddingLeft: '0 !important',
  paddingTop: '0 !important',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  '&:hover': {
    transform: 'scale(1.025, 1.025)',
    '& .MuiPaper-root': {
      border: '3px solid rgba(204, 32, 98, 0.8)',
    },
  },
  '& .MuiImageListItem-root': {
    margin: '0 !important',
  },
}));

const DisplayColumn = (() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: '0',
  padding: '0',
}));

const CardWrapper = (() => ({
  position: 'relative',
  display: 'flex',
  width: '100%',
  margin: '0',
  padding: '0',
  boxShadow: 'unset',
}));

const CardTitle = (() => ({
  width: '100%',
  margin: '0',
  padding: '1rem 1rem 0.5rem 1rem',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#ffffff',
  backgroundColor: '#666666',
}));

const InfoText = (() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem 0',
  padding: '0 1rem',
  '& .MuiTypography-root': {
    fontSize: '1.25rem',
    color: '#3333333',
    '& span': {
      marginRight: '0.5rem',
      fontWeight: '700',
    },
  },
}));

const CornerItem = (() => ({
  position: 'absolute',
  right: '0',
  top: '0',
  width: '0',
  height: '0',
  borderTop: '50px solid #CC2062',
  borderBottom: '50px solid transparent',
  borderLeft: '50px solid transparent',
  '& h6': {
    position:'absolute',
    top: '-54px',
    right: '7px',
    textAlign: 'right',
    fontSize: '24px',
    fontWeight: '700',
    color: '#FFFFFF',
    display:'block',
  },
}));

const InfoTextComment = (() => ({
  display: 'flex',
  flexDirection: 'column',
  margin: '0.5rem 0',
  padding: '0 1rem',
  '& .MuiTypography-root': {
    fontSize: '1.25rem',
    color: '#3333333',
    maxHeight: '89px',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
}));

export default function MoviesList({ data, retrieveItem }: Props) {

  const dataMessage = {
    title: TEXTS.NO_RESULTS.title,
    text: TEXTS.NO_RESULTS.text
  };

  const getData = (item: MovieResult) => {
    retrieveItem(item);
  };

  const getPoster = (poster_path: string) => {
    const imgUrlPrefix = 'https://www.themoviedb.org/t/p/w220_and_h330_face/';
    return poster_path ? `${imgUrlPrefix}${poster_path}` : './images/no-image.png';
  };

  return (
    <>
      {(data && data.length > 0) ? 
        (<Grid sx={GridWrapper} container spacing={{ xs: 1, md: 2 }}>
          {data.map((item: any, index: number) => (
            <Grid 
              sx={GridItem} 
              item 
              xs={12} md={5} 
              key={index} 
              onClick={() => getData(item)}
            >
              <Card sx={CardWrapper}>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={getPoster(item.movie.poster_path)}
                  alt={item.movie.title}
                />
                <CardContent sx={DisplayColumn}>
                  <Typography sx={CardTitle} gutterBottom>
                    {item.movie.title}
                  </Typography>
                  <Box sx={InfoText}>
                    <Typography><span>{TEXTS.MOVIE.original_title}</span>{item.movie.original_title}</Typography>
                    <Typography><span>{TEXTS.MOVIE.original_language}</span>{item.movie.original_language}</Typography>
                    <Typography><span>{TEXTS.MOVIE.release_date}</span>{item.movie.release_date}</Typography>
                  </Box>
                  <Box sx={InfoTextComment}>
                    <Typography>{item.comments}</Typography>
                  </Box>
                </CardContent>
                <Box sx={CornerItem}>
                  <Typography variant="h6">{item.punctuation}</Typography>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>)
        :(<MessageCard data={dataMessage} />)
      }
    </>
  );
}
