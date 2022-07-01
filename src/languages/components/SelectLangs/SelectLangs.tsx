import { SelectStyles } from './selectLangsStyles';
import { LangSelectProps } from '../../langsModels';

import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function SelectLangs({ options, selectValue, handleOnChange }: LangSelectProps) {
	
	const onChangeHandle = ({ target: { value } }: any) => {
		handleOnChange(value);
	};
	
	return (
		<Select 
			sx={SelectStyles}
			value={selectValue} 
			onChange={onChangeHandle}
		>
			{options.map((lang) => (
				<MenuItem key={lang.value} value={lang.value}>
					<img width="20" src={lang.flag} alt={lang.label} />
				</MenuItem>
			))}
		</Select>
	)
};
