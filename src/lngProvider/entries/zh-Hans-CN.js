import zhMessages from "../locales/zh-Hans.json";

const ZhLan = {
  messages: {
    ...zhMessages,
  },
  locale: "zh-Hans-CN",
  data: require("@formatjs/intl-relativetimeformat/locale-data/zh-Hans"),
};
export default ZhLan;
