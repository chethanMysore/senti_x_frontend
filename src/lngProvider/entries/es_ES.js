import saMessages from "../locales/es_ES.json";

const saLang = {
  messages: {
    ...saMessages,
  },
  locale: "es",
  data: require("@formatjs/intl-relativetimeformat/locale-data/es"),
};
export default saLang;
