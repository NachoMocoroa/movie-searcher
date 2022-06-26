import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface Props {
  data: string
}

const ErrorCardItem = (() => ({
  width: '100%',
  minWidth: 150,
  maxWidth: 350,
  margin: '0 auto',
}));

const ErrorCardWrapper = (() => ({
  width: '100%',
  margin: '0',
  padding: '0',
}));

const ErrorCardTitle = (() => ({
  width: '100%',
  margin: '0',
  padding: '1rem 1rem 0.5rem 1rem',
  fontSize: '1.5rem',
  fontWeight: '700',
  color: '#ffffff',
  backgroundColor: '#CC2062',
}));

const ErrorCardText = (() => ({
  width: '100%',
  margin: '0',
  padding: '1rem',
  fontSize: '1.25rem',
  color: '#3333333',
}));

export default function ErrorCard({ data }: Props) {
  
  return (
    <Card sx={ErrorCardItem}>
      <CardContent sx={ErrorCardWrapper}>
        <Typography sx={ErrorCardTitle} color="text.secondary" gutterBottom>
          ERROR
        </Typography>
        <Typography sx={ErrorCardText} variant="body2">
          {data}
        </Typography>
      </CardContent>
    </Card>
  );
}
