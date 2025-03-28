import saMessages from "../locales/fr_FR.json";

const saLang = {
  messages: {
    ...saMessages,
  },
  locale: "fr-FR",
  data: require("@formatjs/intl-relativetimeformat/locale-data/fr"),
};
export default saLang;
