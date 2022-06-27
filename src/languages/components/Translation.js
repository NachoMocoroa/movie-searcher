import { useContext } from 'react';
import { LanguageContext } from '../LanguageProvider';

export const Translation = ({ children }) => {
	const { strings } = useContext(LanguageContext)
	return strings[children] || children;
};
