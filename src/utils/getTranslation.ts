import axios from "axios";

export type Language = 'pt' | 'en' | 'es';

interface Translations {
    pt: string;
    en: string;
    es: string;
}

interface IItems  {
    id: number;
    title: Translations;
    description: Translations;
}

export const getItems = async () => await axios.get<IItems[]>("http://localhost:3001/items");

export const getTranslation = (data: IItems[], lang: Language) => data.map(({ id, description, title }) => ({ id, description: description[lang], title: title[lang] }));