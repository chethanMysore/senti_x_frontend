import {
  FETCH_ALL_USERS,
  FETCH_USER_DETAILS,
  UPDATE_USERS_DATA,
  UPDATE_USER_DETAILS,
} from "constants/ActionTypes";

export const fetchAllUsers = () => {
  return { type: FETCH_ALL_USERS };
};

export const fetchUserDetails = (username) => {
  return { type: FETCH_USER_DETAILS, payload: username };
};

export const updateUserInList = (userID, usersList) => {
  return { type: UPDATE_USERS_DATA, payload: { userID, usersList } };
};

export const updateUserDetails = (userID, userData) => {
  return { type: UPDATE_USER_DETAILS, payload: { userID, userData } };
};
