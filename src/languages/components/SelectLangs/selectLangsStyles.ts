export const SelectStyles = (() => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
	width: '100%',
    maxWidth: '50px',
	height: '100%',
	margin: { xs: '0 0 0 2rem', md: '0 0 0 3rem' },
	padding: '0',
	'&:before': {
		content: '""',
		position: 'absolute',
		top: '7px',
		left: '0',
		width: '1px',
		height: '70%',
		backgroundColor: '#FFFFFF',
	},
	'& .MuiSelect-select': {
		display: 'flex',
		width: 'auto',
		padding: '0 !important',
		backgroundColor: 'transparent',
		'& .MuiList-root': {
			padding: '0 !important',
			'& .MuiMenuItem-root': {
				padding: '0 !important',
			},
		},
	},
	'& .MuiSvgIcon-root': {
		display: 'none',
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: 'unset',
	},
}));
