import {
  ON_FETCH_ALL_USERS_SUCCESS,
  ON_FETCH_USER_DETAILS_SUCCESS,
  ON_UPDATE_USERS_DATA_SUCCESS,
  ON_UPDATE_USER_DETAILS_SUCCESS,
} from "constants/ActionTypes";
import { UpdateItemInList } from "util";
const INIT_STATE = {
  usersList: [],
  userDetails: {},
};

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ON_FETCH_ALL_USERS_SUCCESS: {
      return Object.assign({}, state, { usersList: payload });
    }
    case ON_FETCH_USER_DETAILS_SUCCESS: {
      return Object.assign({}, state, { userDetails: payload.user });
    }
    case ON_UPDATE_USERS_DATA_SUCCESS: {
      let newState = { ...state };
      newState.usersList = UpdateItemInList(state.usersList, payload, "userID");
      return { ...newState };
    }
    case ON_UPDATE_USER_DETAILS_SUCCESS: {
      let newState = { ...state };
      if (state.userDetails.userID === payload.user.userID) {
        newState.userDetails = { ...state.userDetails, ...payload.user };
      }
      return { ...newState };
    }
    default:
      return state;
  }
};
