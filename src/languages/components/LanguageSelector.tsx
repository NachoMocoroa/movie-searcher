import { useContext } from 'react';
import { langs } from '../langsConstants';
import { LangContextProps } from '../langsModels';
import { LanguageContext } from '../LanguageProvider';

import SelectLangs from './SelectLangs/SelectLangs';

function LanguageSelector() {

	const { language, updateLanguage } = useContext<LangContextProps>(LanguageContext);
	const handleUpdateLanguage = (param: string) => {
		updateLanguage(param);
	};

	return (
		<SelectLangs  
			options={langs} 
			selectValue={language} 
			handleOnChange={handleUpdateLanguage} 
		/>
	);
};

export default LanguageSelector;
