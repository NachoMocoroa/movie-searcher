import { useContext } from 'react';
import { LangContextProps, TranslationProp } from '../langsModels';
import { LanguageContext } from '../LanguageProvider';

export const Translation = ({ children }: TranslationProp) => {
	const { strings } = useContext<LangContextProps>(LanguageContext);
	return strings[children] || children;
};
