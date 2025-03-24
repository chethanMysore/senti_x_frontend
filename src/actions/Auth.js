import {
  REGISTER_USER,
  LOGIN_USER,
  LOGOUT_USER,
  RELOAD_USER_DATA,
  INIT_URL,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
} from "constants/ActionTypes";

export const registerUser = (user) => {
  return { type: REGISTER_USER, payload: user };
};

export const loginUser = (authUser) => {
  return { type: LOGIN_USER, payload: authUser };
};

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const showAuthMessage = (message) => {
  return { type: SHOW_MESSAGE, payload: message };
};

export const hideAuthMessage = () => {
  return { type: HIDE_MESSAGE };
};

export const setInitURL = (url) => {
  return { type: INIT_URL, payload: url };
};

export const showAuthLoader = () => {
  return { type: SHOW_LOADER };
};

export const hideAuthLoader = () => {
  return { type: HIDE_LOADER };
};

export const reloadUserData = (payload) => {
  return { type: RELOAD_USER_DATA, payload };
};
