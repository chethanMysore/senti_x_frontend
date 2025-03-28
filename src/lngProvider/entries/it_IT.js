import saMessages from "../locales/it_IT.json";

const itLang = {
  messages: {
    ...saMessages,
  },
  locale: "it-IT",
  data: require("@formatjs/intl-relativetimeformat/locale-data/it"),
};
export default itLang;
