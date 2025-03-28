import { CLEAR_ERRORS } from "constants/ActionTypes";
import {
  DISPLAY_ERROR_MESSAGE,
  DISPLAY_INFO_MESSAGE,
  DISPLAY_SUCCESS_MESSAGE,
  DISPLAY_WARNING_MESSAGE,
  DISPLAY_DEFAULT_MESSAGE,
  CLEAR_NOTIFICATIONS,
  WRITE_ERROR_MESSAGE,
} from "constants/ActionTypes";
import { NotificationOptions } from "constants/DefaultValues";
import { NotificationTypes } from "constants/DefaultValues";

const INIT_STATE = {
  notificationMessage: "",
  notificationType: NotificationTypes.DEFAULT,
  notificationOptions: NotificationOptions,
  isError: false,
  source: null,
  errorMessage: "",
};

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case DISPLAY_ERROR_MESSAGE: {
      return {
        ...state,
        notificationType: NotificationTypes.ERROR,
        notificationMessage: payload.message,
        notificationOptions: { ...state.options, ...payload.options },
      };
    }
    case DISPLAY_INFO_MESSAGE: {
      return {
        ...state,
        notificationType: NotificationTypes.INFO,
        notificationMessage: payload.message,
        notificationOptions: { ...state.options, ...payload.options },
      };
    }
    case DISPLAY_SUCCESS_MESSAGE: {
      return {
        ...state,
        notificationType: NotificationTypes.SUCCESS,
        notificationMessage: payload.message,
        notificationOptions: { ...state.options, ...payload.options },
      };
    }
    case DISPLAY_WARNING_MESSAGE: {
      return {
        ...state,
        notificationType: NotificationTypes.WARNING,
        notificationMessage: payload.message,
        notificationOptions: { ...state.options, ...payload.options },
      };
    }
    case DISPLAY_DEFAULT_MESSAGE: {
      return {
        ...state,
        notificationType: NotificationTypes.DEFAULT,
        notificationMessage: payload.message,
        notificationOptions: { ...state.options, ...payload.options },
      };
    }
    case CLEAR_NOTIFICATIONS: {
      return {
        ...state,
        notificationType: NotificationTypes.DEFAULT,
        notificationMessage: "",
        notificationOptions: NotificationOptions,
      };
    }
    case WRITE_ERROR_MESSAGE: {
      return {
        ...state,
        isError: true,
        source: payload.source,
        errorMessage: payload.message,
      };
    }
    case CLEAR_ERRORS: {
      return {
        ...state,
        isError: false,
        source: null,
        errorMessage: "",
      };
    }
    default:
      return { ...state };
  }
};
