/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "params"}]*/
import {
  apiInferenceBasePath,
  usersListPath,
  userByIDPath,
  usersByNamePath,
  userByUsernamePath,
  userEditByIDPath,
} from "constants/DefaultValues";

import { FetchData, UpdateData } from "util/apiCalls";

export const fetchAllUsers = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, usersListPath)
      .then((res) => {
        res.data && res.data.users
          ? resolve(res.data.users)
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

export const fetchUserByID = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, userByIDPath, true, params.userID)
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

export const fetchUserByUsername = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, userByUsernamePath, true, params.username)
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

export const fetchUsersByName = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, usersByNamePath, true, params.name)
      .then((res) => {
        res.data && res.data.users
          ? resolve(res.data.users)
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

export const updateUserByID = async (params) => {
  return new Promise((resolve, reject) => {
    UpdateData(
      apiInferenceBasePath,
      userEditByIDPath,
      params.userID,
      params.updatedUser
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
  });
};
