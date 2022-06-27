import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const SelectComponent = (() => ({
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

const langs= [
	{
		value: 'es',
		label: 'Spanish',
		flag: 'images/flags/es.svg',
	},
	{
		value: 'en',
		label: 'English',
		flag: 'images/flags/gb.svg',
	}
];

function LanguageSelector() {
	const { language, updateLanguage } = useContext(LanguageContext)
	const handleUpdateLanguage = ({ target: { value } }) => {
		updateLanguage(value)
	}
	
	return (
		<Select 
			sx={SelectComponent}
			value={language} 
			onChange={handleUpdateLanguage}
		>
			{langs.map((lang) => (
				<MenuItem key={lang.value} value={lang.value}>
					<img width="20" src={lang.flag} />
				</MenuItem>
			))}
		</Select>
	)
};

export default LanguageSelector;
