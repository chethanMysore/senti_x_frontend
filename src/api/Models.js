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

export const fetchAllModels = async () => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelsListPath)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchModelByID = async (modelID) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelByIDPath, true, modelID)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchModelsByUsername = async (username) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelsByUsernamePath, true, username)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const fetchModelsByName = async (name) => {
  return new Promise((resolve, reject) => {
    FetchData(apiInferenceBasePath, modelsByNamePath, true, name)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const createNewModel = async (modelData) => {
  return new Promise((resolve, reject) => {
    CreateDataInstance(apiInferenceBasePath, modelCreatePath, modelData)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};

export const updateModelByID = async (modelID, updatedModel) => {
  return new Promise((resolve, reject) => {
    UpdateData(apiInferenceBasePath, modelEditPath, modelID, updatedModel)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
