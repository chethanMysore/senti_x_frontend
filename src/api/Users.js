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
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchUserByID = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, userByIDPath, true, params.userID)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchUserByUsername = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, userByUsernamePath, true, params.username)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchUsersByName = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, usersByNamePath, true, params.name)
      .then((data) => resolve(data))
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
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
