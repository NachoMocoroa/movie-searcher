import { MoviesInfoJSON, MovieResult, MoviesSearchJSON } from '../../models/models';
import { GridWrapper, GridItem, LabelText } from './GalleryGridStyles';

import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import MessageCard from '../Atoms/MessageCard/MessageCard';

interface Props {
  data: MoviesInfoJSON | MoviesSearchJSON;
  retrieveItem: Function;
}

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
