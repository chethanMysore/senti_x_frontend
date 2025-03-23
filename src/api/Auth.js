/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import {
  apiInferenceBasePath,
  authRegisterPath,
  authLoginPath,
  userByUsernamePath,
} from "constants/DefaultValues";

import { Register, GetAccessToken, FetchData } from "util/apiCalls";

export const registerNewUser = async (newUserData) => {
  return new Promise((resolve, reject) => {
    Register(apiInferenceBasePath, authRegisterPath, newUserData)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const loginUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    GetAccessToken(apiInferenceBasePath, authLoginPath, username, password)
      .then((_data) => {
        FetchData(apiInferenceBasePath, userByUsernamePath, true, username)
          .then((user) => resolve(user))
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
