import {
  ON_FETCH_ALL_MODELS_SUCCESS,
  ON_FETCH_MODEL_DETAILS_SUCCESS,
  ON_UPDATE_MODELS_DATA_SUCCESS,
  ON_UPDATE_MODEL_DETAILS_SUCCESS,
  ON_CREATE_MODEL_SUCCESS,
  ON_FETCH_MODELS_BY_FILTER_SUCCESS,
} from "constants/ActionTypes";
import { UpdateItemInList } from "util";

const INIT_STATE = {
  modelsList: [],
  modelDetails: {},
};

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ON_FETCH_ALL_MODELS_SUCCESS: {
      return Object.assign({}, state, { modelsList: payload });
    }
    case ON_FETCH_MODELS_BY_FILTER_SUCCESS: {
      return Object.assign({}, state, { modelsList: payload });
    }
    case ON_FETCH_MODEL_DETAILS_SUCCESS: {
      return Object.assign({}, state, { modelDetails: payload });
    }
    case ON_UPDATE_MODELS_DATA_SUCCESS: {
      let newState = { ...state };
      newState.modelsList = UpdateItemInList(
        state.modelsList,
        payload.model,
        "modelID"
      );
      return { ...newState };
    }
    case ON_CREATE_MODEL_SUCCESS: {
      let newState = { ...state };
      newState.modelsList = [...state.modelsList, payload.model];
      newState.modelDetails = payload.model;
      return { ...newState };
    }
    case ON_UPDATE_MODEL_DETAILS_SUCCESS: {
      let newState = { ...state };
      if (state.modelDetails.modelID === payload.model.modelID) {
        newState.modelDetails = { ...state.modelDetails, ...payload.model };
      }
      return { ...newState };
    }
    default:
      return state;
  }
};
