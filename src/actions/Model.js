import {
  FETCH_ALL_MODELS,
  FETCH_MODEL_DETAILS,
  UPDATE_MODELS_DATA,
  UPDATE_MODEL_DETAILS,
  CREATE_MODEL,
} from "constants/ActionTypes";

export const fetchAllModels = () => {
  return { type: FETCH_ALL_MODELS };
};

export const fetchModelDetails = (modelID) => {
  return { type: FETCH_MODEL_DETAILS, payload: modelID };
};

export const createNewModel = (model) => {
  return { type: CREATE_MODEL, payload: model };
};

export const updateModelInList = (modelID, modelsList) => {
  return { type: UPDATE_MODELS_DATA, payload: { modelID, modelsList } };
};

export const updateModelDetails = (modelID, modelData) => {
  return { type: UPDATE_MODEL_DETAILS, payload: { modelID, modelData } };
};
