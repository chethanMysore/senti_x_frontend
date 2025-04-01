/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import { all, put, takeEvery } from "redux-saga/effects";

import {
  CLEAR_ERRORS,
  HIDE_LOADER,
  CLEAR_NOTIFICATIONS,
  HANDLE_ERROR,
} from "constants/ActionTypes";

import {
  ERROR_401,
  SESSION_EXPIRED,
  // INVALID_CREDENTIALS
} from "constants/DefaultValues";
import {
  showErrorNotification,
  // showInfoNotification,
  showWarningNotification,
  // showSuccessNotification,
  setInitURL,
  displayErrorPage,
} from "actions";

const clearErrorMessages = function* () {
  yield [
    put({
      type: CLEAR_NOTIFICATIONS,
    }),
    put({
      type: HIDE_LOADER,
    }),
  ];
};

const handleErrorSideEffects = function* ({ error, source }) {
  if (error && error.status) {
    switch (error.status) {
      case ERROR_401:
        yield all([
          put(showErrorNotification(SESSION_EXPIRED)),
          put(setInitURL("/login")),
        ]);
        break;
      default:
        yield all([
          put(showWarningNotification(error.message)),
          put(displayErrorPage(error.message, source)),
        ]);
    }
  }
};

export const notificationSagas = function* (_action) {
  yield takeEvery(CLEAR_ERRORS, (_action) => clearErrorMessages());
  yield takeEvery(HANDLE_ERROR, (_action) =>
    handleErrorSideEffects(_action.payload)
  );
};
