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

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case ON_FETCH_ALL_USERS_SUCCESS: {
      return Object.assign({}, state, { usersList: data });
    }
    case ON_FETCH_USER_DETAILS_SUCCESS: {
      return Object.assign({}, state, { userDetails: data.user });
    }
    case ON_UPDATE_USERS_DATA_SUCCESS: {
      let newState = { ...state };
      newState.usersList = UpdateItemInList(state.usersList, data, "userID");
      return { ...newState };
    }
    case ON_UPDATE_USER_DETAILS_SUCCESS: {
      let newState = { ...state };
      if (state.userDetails.userID === data.user.userID) {
        newState.userDetails = { ...state.userDetails, ...data.user };
      }
      return { ...newState };
    }
    default:
      return state;
  }
};
