import MessageCard from '../MessageCard/MessageCard';
import { MovieResult } from '../../models/models';
import { 
  GridWrapper, 
  GridItem, 
  DisplayColumn, 
  CardWrapper, 
  CardTitle, 
  InfoText, 
  CornerItem, 
  InfoTextComment 
} from './MoviesListStyles';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import InfoTextItem from '../InfoTextItem/InfoTextItem';

interface Props {
  data: any;
  retrieveItem: Function;
}

export default function MoviesList({ data, retrieveItem }: Props) {

  const dataMessage = {
    title: '',
    text: ''
  };

  const getData = (item: MovieResult) => {
    retrieveItem(item);
  };

  const getPoster = (poster_path: string) => {
    const imgUrlPrefix = `${process.env.REACT_APP_IMAGES_URL}`;
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
                    <InfoTextItem translation="info-original_title" data={item.movie.original_title} />
                    <InfoTextItem translation="info-original_language" data={item.movie.original_language} />
                    <InfoTextItem translation="info-release_date" data={item.movie.release_date} />
                  </Box>
                  <Box sx={InfoTextComment}>
                    <InfoTextItem data={item.comments} />
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
