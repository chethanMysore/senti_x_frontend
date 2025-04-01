import { WRITE_ERROR_MESSAGE } from "constants/ActionTypes";
import { HANDLE_ERROR } from "constants/ActionTypes";
import { CLEAR_ERRORS } from "constants/ActionTypes";
import {
  DISPLAY_ERROR_MESSAGE,
  DISPLAY_INFO_MESSAGE,
  DISPLAY_SUCCESS_MESSAGE,
  DISPLAY_WARNING_MESSAGE,
  DISPLAY_DEFAULT_MESSAGE,
  CLEAR_NOTIFICATIONS,
} from "constants/ActionTypes";
import { NotificationPlacement } from "constants/DefaultValues";

export const showErrorNotification = (
  message,
  options = { position: NotificationPlacement.TOP_CENTER }
) => {
  return { type: DISPLAY_ERROR_MESSAGE, payload: { message, options } };
};

export const showInfoNotification = (
  message,
  options = { position: NotificationPlacement.TOP_LEFT }
) => {
  return { type: DISPLAY_INFO_MESSAGE, payload: { message, options } };
};

export const showWarningNotification = (
  message,
  options = { position: NotificationPlacement.TOP_RIGHT }
) => {
  return {
    type: DISPLAY_WARNING_MESSAGE,
    payload: { message, options },
  };
};

export const showSuccessNotification = (
  message,
  options = { position: NotificationPlacement.TOP_CENTER }
) => {
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

export const displayErrorPage = (message, source) => {
  return { type: WRITE_ERROR_MESSAGE, payload: { message, source } };
};

export const clearNotifications = () => {
  return { type: CLEAR_NOTIFICATIONS };
};

export const clearErrors = () => {
  return { type: CLEAR_ERRORS };
};

export const handleError = (error, source) => {
  return { type: HANDLE_ERROR, payload: { error, source } };
};
