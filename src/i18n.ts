import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import your translation files
import translationEN from '../public/locales/en/translation.json';
import translationES from '../public/locales/es/translation.json';

// The translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  }
};

i18n
  .use(LanguageDetector) // Detect browser language
  .use(initReactI18next) // Pass i18n to react-i18next
  .init({
    resources,
    fallbackLng: 'es', // Fallback language
    debug: true, // Enable debug mode

    interpolation: {
      escapeValue: false, // Not needed for React
    }
  });

export default i18n;