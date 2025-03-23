import {
  apiInferenceBasePath,
  usersListPath,
  userByIDPath,
  usersByNamePath,
  userByUsernamePath,
  userEditByIDPath,
} from "constants/DefaultValues";

import { FetchData, UpdateData } from "util/apiCalls";

export const fetchAllUsers = async () => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, usersListPath)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchUserByID = async (userID) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, userByIDPath, true, userID)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchUserByUsername = async (username) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, userByUsernamePath, true, username)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchUsersByName = async (name) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, usersByNamePath, true, name)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const updateUserByID = async (userID, updatedUser) => {
  return new Promise((resolve, reject) => {
    UpdateData(apiInferenceBasePath, userEditByIDPath, userID, updatedUser)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
