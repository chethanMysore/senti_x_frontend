import {
  ON_REGISTER_USER_SUCCESS,
  ON_LOGIN_USER_SUCCESS,
  ON_LOGOUT_USER_SUCCESS,
  ON_RELOAD_USER_DATA_SUCCESS,
  INIT_URL,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
} from "constants/ActionTypes";

const INIT_STATE = {
  loader: false,
  initURL: "",
  alertMessage: "",
  showMessage: false,
  authUser: {},
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case ON_REGISTER_USER_SUCCESS: {
      return { ...state, loader: false, authUser: data.user };
    }
    case ON_LOGIN_USER_SUCCESS: {
      return { ...state, loader: false, authUser: data.user };
    }
    case INIT_URL: {
      return { ...state, initURL: data };
    }
    case ON_LOGOUT_USER_SUCCESS: {
      return { ...state, authUser: null, loader: false, initURL: "/" };
    }
    case SHOW_LOADER: {
      return { ...state, loader: true };
    }
    case HIDE_LOADER: {
      return { ...state, loader: false };
    }
    case SHOW_MESSAGE: {
      return { ...state, alertMessage: data, showMessage: true, loader: false };
    }
    case HIDE_MESSAGE: {
      return { ...state, alertMessage: "", showMessage: false, loader: false };
    }
    case ON_RELOAD_USER_DATA_SUCCESS: {
      return { ...state, loader: false, authUser: data.user };
    }
    default:
      return state;
  }
};
