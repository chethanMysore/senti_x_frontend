import {
  FETCH_ALL_USERS,
  FETCH_USER_DETAILS,
  UPDATE_USERS_DATA,
  FETCH_USERS_BY_FILTER,
} from "constants/ActionTypes";

export const fetchAllUsers = () => {
  return { type: FETCH_ALL_USERS };
};

export const fetchUsersByName = (name) => {
  return {
    type: FETCH_USERS_BY_FILTER,
    payload: { paramName: "name", paramVal: name },
  };
};

export const fetchUserDetails = (username) => {
  return {
    type: FETCH_USER_DETAILS,
    payload: { paramName: "username", paramVal: username },
  };
};

export const updateUserInList = (userID, usersList) => {
  return { type: UPDATE_USERS_DATA, payload: { userID, usersList } };
};
