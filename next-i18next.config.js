import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en.json';
import vi from './public/locales/vi.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi },
    },
    lng: "vi",
    fallbackLng: "vi",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
