import { MoviesInfoJSON, MovieResult, MoviesSearchJSON } from '../../models/models';

import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MessageCard from '../MessageCard/MessageCard';

interface Props {
  data: MoviesInfoJSON | MoviesSearchJSON;
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
  margin: '0 !important',
  padding: '0 0.5rem 1rem 0.5rem !important',
  backgroundColor: 'transparent',
  cursor: 'pointer',
  transition: 'all .4s cubic-bezier(0.175, 0.885, 0, 1)',
  '&:hover': {
    transform: 'scale(1.05, 1.05)',
    '& .MuiImageListItem-root': {
      border: '1px solid rgba(255, 255, 255, 0.8)',
    },
  },
  '& .MuiImageListItem-root': {
    margin: '0 !important',
  },
}));

const LabelText = (() => ({
  padding: '0',
  '& .MuiImageListItemBar-titleWrap': {
    padding: '0.25rem 0.5rem',
    color: '#FFFFFF',
    '& .MuiImageListItemBar-title': {
      fontSize: '1.5rem',
    },
    '& .MuiImageListItemBar-subtitle': {
      fontSize: '1rem',
    },
  },
}));

export default function GalleryGrid({ data, retrieveItem }: Props) {
  
  const { results } = data;

  const dataMessage = {
    title: '',
    text: ''
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
      {(results && results.length > 0) ? 
        (<Grid sx={GridWrapper} container>
          {results.map((item, index) => (
            <Grid 
              sx={GridItem} 
              item 
              xs={6} sm={4} md={3} lg={2} 
              key={index} 
              onClick={() => getData(item)}
            >
              <ImageListItem 
                key={item.title} 
                sx={{ width: 220, height: 330 }}
              >
                <img
                  src={getPoster(item.poster_path)}
                  srcSet={getPoster(item.poster_path)}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar 
                  sx={LabelText} 
                  title={item.title}
                  subtitle={item.release_date} 
                />
              </ImageListItem>
            </Grid>
          ))}
        </Grid>)
        :(<MessageCard data={dataMessage} />)
      }
    </>
  );
}
