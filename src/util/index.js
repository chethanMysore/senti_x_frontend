/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import { CountryNameAndCodeList } from "constants/DefaultValues";
import cookie from "react-cookies";

export const UpdateItemInList = (listData, updatedItem, idParam = "id") => {
  return listData.map((item, _index) => {
    if (item[idParam] !== updatedItem[idParam]) return item;
    return {
      ...item,
      ...updatedItem,
    };
  });
};

export const tokenValidator = () => {
  const accessToken = cookie.load("access_token");
  if (accessToken && accessToken.token && accessToken.expires_in) {
    if (accessToken.expires_in > new Date().getTime()) return true;
  }
  return false;
};

export const getCountryNameFromCode = (code) => {
  let countryName = CountryNameAndCodeList.find(
    (country) => country.code === code
  );
  return countryName ? countryName.name : "Unknown";
};
