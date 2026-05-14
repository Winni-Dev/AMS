import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locale/en.json';
import translationFR from './locale/fr.json';

const resources = {
  en: {
    translation: translationEN
  },
  fr: {
    translation: translationFR
  }
};

const storedLang =
  typeof localStorage !== 'undefined' ? localStorage.getItem('ams_lang') : null;
const initialLng = storedLang === 'fr' || storedLang === 'en' ? storedLang : 'en';

i18n.on('languageChanged', (lng) => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('ams_lang', lng);
  }
});

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: initialLng,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;