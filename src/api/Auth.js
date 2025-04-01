/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import {
  apiInferenceBasePath,
  authRegisterPath,
  authLoginPath,
  userByUsernamePath,
} from "constants/DefaultValues";

import { Register, GetAccessToken, FetchData } from "util/apiCalls";

export const registerNewUser = async (params) => {
  return new Promise((resolve, reject) => {
    Register(apiInferenceBasePath, authRegisterPath, params.newUserData)
      .then((res) => {
        res.data && res.data.user
          ? resolve(res.data.user)
          : reject({
              ...res,
              isError: true,
              message: "Invalid response",
              status: 500,
            });
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const loginUser = async (params) => {
  return new Promise((resolve, reject) => {
    GetAccessToken(
      apiInferenceBasePath,
      authLoginPath,
      params.username,
      params.password
    )
      .then((_data) => {
        FetchData(
          apiInferenceBasePath,
          userByUsernamePath,
          true,
          params.username
        )
          .then((res) => {
            res.data && res.data.user
              ? resolve(res.data.user)
              : reject({
                  ...res,
                  isError: true,
                  message: "Invalid response",
                  status: 500,
                });
          })
          .catch((err) => {
            err.isError = true;
            reject(err);
          });
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
