import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import formatters from "./format/formatters";
export type Language = 'en' | 'ar';
// TBD beter way to define this type
export type SupportedLanguages = {
    Language: string
}
export type Config = {
    supportedLangs: SupportedLanguages,
    defaultLang: Language
}
export function config({supportedLangs, defaultLang} : Config) {
    i18next
        .use(HttpApi)
        .use(LanguageDetector)
        .use(initReactI18next)        // init i18next
        // for all options read: https://www.i18next.com/overview/configuration-options
        .init({
            fallbackLng: defaultLang,
            supportedLngs: Object.keys(supportedLangs),
            debug: process.env.NODE_ENV === 'development',
            interpolation: {
                escapeValue: false, // not needed for react as it escapes by default
            },
        });

    Object.entries(formatters).forEach(([key, resolver]) => {
        i18next.services.formatter?.add(key, resolver);
        });
}

export default i18next;