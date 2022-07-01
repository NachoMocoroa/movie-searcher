import { Message } from '../../../models/models';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Translation } from '../../../languages/components/Translation';

interface Props {
  data: Message
}

const CardItem = (() => ({
  width: '100%',
  minWidth: 150,
  maxWidth: 350,
  margin: '0 auto',
}));

const CardWrapper = (() => ({
  width: '100%',
  margin: '0',
  padding: '0',
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

const CardText = (() => ({
  width: '100%',
  margin: '0',
  padding: '1rem',
  fontSize: '1.25rem',
  color: '#3333333',
}));

export default function MessageCard({ data }: Props) {
  
  const { title, text } = data;
  
  return (
    <Card sx={CardItem}>
      <CardContent sx={CardWrapper}>
        <Typography sx={CardTitle} color="text.secondary" gutterBottom>
          {title.length === 0 ? (
            <Translation>no-results-title</Translation>
          ) : (title)
          }
        </Typography>
        <Typography sx={CardText} variant="body2">
          {text.length === 0 ? (
            <Translation>no-results-text</Translation>
          ) : (text)
          }
        </Typography>
      </CardContent>
    </Card>
  );
}
