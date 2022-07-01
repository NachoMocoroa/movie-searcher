import { ReactNode } from 'react';

export interface Lang {
	value: string;
	label: string;
	flag: string;
}

export interface TranslationProp {
	children: string;
}

export interface LangContextProps {
	language: string;
	strings: any;
	updateLanguage: Function;
}

export interface LangProviderProps {
	children: ReactNode;
	fetchTranslations: Function;
}

export interface LangSelectProps {
	options: Lang[];
	selectValue: string;
	handleOnChange: Function;
}
