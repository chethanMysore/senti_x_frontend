import {
  ON_FETCH_ALL_MODELS_SUCCESS,
  ON_FETCH_MODEL_DETAILS_SUCCESS,
  ON_UPDATE_MODELS_DATA_SUCCESS,
  ON_UPDATE_MODEL_DETAILS_SUCCESS,
  ON_CREATE_MODEL_SUCCESS,
} from "constants/ActionTypes";
import { UpdateItemInList } from "util";

const INIT_STATE = {
  modelsList: [],
  modelDetails: {},
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case ON_FETCH_ALL_MODELS_SUCCESS: {
      return Object.assign({}, state.modelsList, data);
    }
    case ON_FETCH_MODEL_DETAILS_SUCCESS: {
      return Object.assign({}, state.modelDetails, data);
    }
    case ON_UPDATE_MODELS_DATA_SUCCESS: {
      let newState = { ...state };
      newState.modelsList = UpdateItemInList(
        state.modelsList,
        data.model,
        "modelID"
      );
      return { ...newState };
    }
    case ON_CREATE_MODEL_SUCCESS: {
      let newState = { ...state };
      newState.modelsList = [...state.modelsList, data.model];
      newState.modelDetails = data.model;
      return { ...newState };
    }
    case ON_UPDATE_MODEL_DETAILS_SUCCESS: {
      let newState = { ...state };
      if (state.modelDetails.modelID === data.model.modelID) {
        newState.modelDetails = { ...state.modelDetails, ...data.model };
      }
      return { ...newState };
    }
    default:
      return state;
  }
};
