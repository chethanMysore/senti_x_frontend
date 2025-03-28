import enMessages from "../locales/en_US.json";

const EnLang = {
  messages: {
    ...enMessages,
  },
  locale: "en-US",
  data: require("@formatjs/intl-relativetimeformat/locale-data/en"),
};
export default EnLang;
