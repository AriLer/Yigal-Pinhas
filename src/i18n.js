import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import he from "./locales/he/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      he: { translation: he },
      en: { translation: en }
    },
    lng: "he", // Default language
    fallbackLng: "he",
    interpolation: { escapeValue: false },
  });

export default i18n;