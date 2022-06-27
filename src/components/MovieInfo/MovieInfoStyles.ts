export const DisplayColumn = (() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: '0',
}));
  
export const DisplayRow = (() => ({
    display: 'flex',
    flexDirection: 'row',
    margin: '0',
    padding: '0',
}));
  
export const CardWrapper = (() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0',
    padding: '0',
    boxShadow: 'unset',
}));
  
export const CardContentWrapper = (() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
}));
  
export const CardTitle = (() => ({
    width: '100%',
    margin: '0',
    padding: '1rem 1rem 0.5rem 1rem',
    fontSize: '1.5rem',
    fontWeight: '700',
    color: '#ffffff',
    backgroundColor: '#666666',
}));
  
export const InfoText = (() => ({
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
  
export const InfoTextComment = (() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem 0',
    padding: '0 1rem',
    '& .MuiTypography-root': {
        fontSize: '1.25rem',
        color: '#3333333',
        maxHeight: '100px',
        overflowX: 'hidden',
        overflowY: 'auto',
    },
}));