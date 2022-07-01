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
  
export const LabelText = (() => ({
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