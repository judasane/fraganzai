import '@testing-library/jest-dom';

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

import en from './src/locales/en/translation.json';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, options?: { [key: string]: any }) => {
      const keys = key.split('.');
      let result: any = en;
      for (const k of keys) {
        if (result && typeof result === 'object' && k in result) {
          result = result[k];
        } else {
          return key; // Return the key if translation is not found
        }
      }

      if (typeof result === 'string' && options) {
        // Basic interpolation
        Object.keys(options).forEach(optKey => {
          result = result.replace(`{{${optKey}}}`, options[optKey]);
        });
      }

      return result;
    },
    i18n: {
      changeLanguage: () => new Promise(() => {}),
      isInitialized: true,
      language: 'en'
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  }
}));
