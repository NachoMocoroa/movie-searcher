import Typography from "@mui/material/Typography";
import { Translation } from '../../languages/components/Translation';

const InfoTextItemStyles = (() => ({
  fontSize: '1.25rem',
  color: '#3333333',
  '& span': {
    marginRight: '0.5rem',
    fontWeight: '700',
  },
}));

interface InfoTextItemProps {
  translation?: string;
  data: string;
}

export default function InfoTextItem({ translation, data }: InfoTextItemProps) {

  return (
    <Typography sx={InfoTextItemStyles}>
      {translation && (
        <span>
          <Translation>{translation}</Translation>
        </span>
      )}
      {data}
    </Typography>
  );
}
