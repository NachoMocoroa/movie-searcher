export const DisplayColumn = (() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    margin: '0',
    padding: '0',
}));
  
export const FieldssRow = (() => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    margin: '0 0 1rem 0',
    padding: '0',
    '& .MuiTypography-root': {
        color: '#666666', 
        margin: '0 0 5px 0', 
        fontSize: '1.25rem'
    },
}));
  
export const FieldColumn = (() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: '0',
    width: '100%',
}));
  
export const FieldColumnNumber = (() => ({
    display: 'flex',
    flexDirection: 'column',
    margin: '0',
    padding: '0 1.5rem 0 0',
    width: '100%',
    maxWidth: '150px',
}));
  
export const NumberFieldStyle = (() => ({
    width: '100%',
    maxWidth: '100px',
    '& .MuiInputBase-root': {
        '& input': {
            padding: '1.5rem 10px 1.5rem 1rem',
            textAlign: 'center',
            fontSize: '1.15rem',
        },
        '& .MuiOutlinedInput-notchedOutline': {
            '& legend': {
                fontSize: '1.5rem',
            },
        },
    },
}));
  
export const TextareaStyle = (() => ({
    width: '100%',
    maxWidth: { xs: 275, sm: 375, md: 425 }, 
    '& .MuiInputBase-root.MuiInputBase-multiline': {
        width: '100%',
        padding: '0',
        '& textarea': {
            width: '100%',
            padding: '1.5rem 10px 1.5rem 1rem',
            fontSize: '1.15rem',
        },
    },
}));
  
export const ButtonsRow = (() => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    margin: '1rem 0 0 0',
    padding: '0',
    '& .MuiButton-root': {
        fontSize: '1.35rem !important',
    },
}));