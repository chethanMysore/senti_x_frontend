/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import { put, takeEvery } from "redux-saga/effects";

import {
  CLEAR_ERRORS,
  HIDE_LOADER,
  CLEAR_NOTIFICATIONS,
} from "constants/ActionTypes";

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

export const notificationSagas = function* (_action) {
  yield takeEvery(CLEAR_ERRORS, (_action) => clearErrorMessages());
};
