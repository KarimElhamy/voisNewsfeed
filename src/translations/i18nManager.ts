import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationsEn from './english/translations';
import translationsAr from './arabic/translations';

i18next.use(initReactI18next).init({
  resources: {
    en: {translation: translationsEn},
    ar: {translation: translationsAr},
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
});

export {};
