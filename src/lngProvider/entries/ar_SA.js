import saMessages from "../locales/ar_SA.json";

const saLang = {
  messages: {
    ...saMessages,
  },
  locale: "ar-SA",
  data: require("@formatjs/intl-relativetimeformat/locale-data/ar"),
};
export default saLang;
