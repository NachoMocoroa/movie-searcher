export const GridWrapper = (() => ({
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
  
export const GridItem = (() => ({
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
  
export const DisplayColumn = (() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0',
    padding: '0',
}));
  
export const CardWrapper = (() => ({
    position: 'relative',
    display: 'flex',
    width: '100%',
    margin: '0',
    padding: '0',
    boxShadow: 'unset',
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
  
export const CornerItem = (() => ({
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
  
export const InfoTextComment = (() => ({
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