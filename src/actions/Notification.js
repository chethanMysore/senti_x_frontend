import { WRITE_ERROR_MESSAGE } from "constants/ActionTypes";
import { CLEAR_ERRORS } from "constants/ActionTypes";
import {
  DISPLAY_ERROR_MESSAGE,
  DISPLAY_INFO_MESSAGE,
  DISPLAY_SUCCESS_MESSAGE,
  DISPLAY_WARNING_MESSAGE,
  DISPLAY_DEFAULT_MESSAGE,
  CLEAR_NOTIFICATIONS,
} from "constants/ActionTypes";

export const showErrorNotification = (message, options = {}) => {
  return { type: DISPLAY_ERROR_MESSAGE, payload: { message, options } };
};

export const showInfoNotification = (message, options = {}) => {
  return { type: DISPLAY_INFO_MESSAGE, payload: { message, options } };
};

export const showWarningNotification = (message, options = {}) => {
  return {
    type: DISPLAY_WARNING_MESSAGE,
    payload: { message, options },
  };
};

export const showSuccessNotification = (message, options = {}) => {
  return {
    type: DISPLAY_SUCCESS_MESSAGE,
    payload: { message, options },
  };
};

export const showDefaultNotification = (message, options = {}) => {
  return {
    type: DISPLAY_DEFAULT_MESSAGE,
    payload: { message, options },
  };
};

export const writeErrorMessage = (message, source) => {
  return { type: WRITE_ERROR_MESSAGE, payload: { message, source } };
};

export const clearNotifications = () => {
  return { type: CLEAR_NOTIFICATIONS };
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};
