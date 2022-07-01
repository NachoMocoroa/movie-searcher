import {
	useState,
	createContext,
	useCallback,
	useEffect,
	useRef 
} from 'react';

import { LangContextProps, LangProviderProps } from './langsModels';

const initialLang: string = 'es';
const initialLanguageContext: LangContextProps = {
	language: initialLang,
	strings: {},
	updateLanguage: () => {}
};

export const LanguageContext = createContext<LangContextProps>(initialLanguageContext);

export const LanguageProvider = ({ children, fetchTranslations }: LangProviderProps) => {
	
	const initialStringsLoaded = useRef<boolean>(false);
	const [{ language, strings }, setLanguage] = useState({
		language: initialLang,
		strings: {}
	});

	const updateLanguage = useCallback(
		async (newLang: any) => {
			if (initialStringsLoaded.current && newLang === language) return;
			const newStrings: any = await fetchTranslations({ language: newLang });
			initialStringsLoaded.current = true;
			setLanguage({
				language: newLang,
				strings: newStrings
			});
		},
		[language, fetchTranslations]
	);

	useEffect(() => {
		updateLanguage(language);
	}, [language, updateLanguage]);

	const context: LangContextProps = {
		language,
		strings,
		updateLanguage: updateLanguage
	};

	return (
		<LanguageContext.Provider value={context}>
			{children}
		</LanguageContext.Provider>
	)
};
