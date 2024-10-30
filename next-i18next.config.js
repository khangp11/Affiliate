import vi from "./public/locales/vi/common.json";
import en from "./public/locales/en/common.json";

const messages = {
  vi,
  en,
};

const supportedLngs = ["en", "vi"];

export const ni18nConfig = {
  fallbackLng: "vi",
  supportedLngs,
  ns: ["translation"],
  messages,
  react: {
    useSuspense: false,
  },
};

export default ni18nConfig;
