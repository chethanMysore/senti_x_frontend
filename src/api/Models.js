/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "params"}]*/
import {
  apiInferenceBasePath,
  modelsListPath,
  modelByIDPath,
  modelsByNamePath,
  modelsByUsernamePath,
  modelEditPath,
  modelCreatePath,
} from "constants/DefaultValues";

import { FetchData, UpdateData, CreateDataInstance } from "util/apiCalls";

export const fetchAllModels = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelsListPath)
      .then((res) => {
        res.data && res.data.models
          ? resolve(res.data.models)
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

export const fetchModelByID = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelByIDPath, true, params.modelID)
      .then((res) => {
        res.data && res.data.model
          ? resolve(res.data.model)
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

export const fetchModelsByUsername = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelsByUsernamePath, true, params.username)
      .then((res) => {
        res.data && res.data.models
          ? resolve(res.data.models)
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

export const fetchModelsByName = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelsByNamePath, true, params.name)
      .then((res) => {
        res.data && res.data.models
          ? resolve(res.data.models)
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

export const createNewModel = async (params) => {
  return new Promise((resolve, reject) => {
    CreateDataInstance(apiInferenceBasePath, modelCreatePath, params.modelData)
      .then((res) => {
        res.data && res.data.model
          ? resolve(res.data.model)
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

export const updateModelByID = async (params) => {
  return new Promise((resolve, reject) => {
    UpdateData(
      apiInferenceBasePath,
      modelEditPath,
      params.modelID,
      params.updatedModel
    )
      .then((res) => {
        res.data && res.data.model
          ? resolve(res.data.model)
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
