/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import { call, put, takeLatest } from "redux-saga/effects";
import cookie from "react-cookies";
import {
  REGISTER_USER,
  ON_REGISTER_USER_SUCCESS,
  LOGIN_USER,
  ON_LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  ON_LOGOUT_USER_SUCCESS,
  // RELOAD_USER_DATA, ToDO
  // ON_RELOAD_USER_DATA_SUCCESS, ToDo
  WRITE_ERROR_MESSAGE,
} from "constants/ActionTypes";

import { registerNewUser, loginUser } from "api";
import { showAuthMessage, showErrorNotification } from "actions";
import { INVALID_CREDENTIALS } from "constants/DefaultValues";
import { ERROR_401 } from "constants/DefaultValues";
import { NotificationPlacement } from "constants/DefaultValues";

const execLoginAndLinkSideEffects = function* (username, password) {
  try {
    const user = yield call(loginUser, { username, password });
    if (user.isError) {
      if (user.status == ERROR_401) {
        yield put(
          showErrorNotification(INVALID_CREDENTIALS, {
            position: NotificationPlacement.TOP_CENTER,
          })
        );
      } else {
        yield put({
          type: WRITE_ERROR_MESSAGE,
          payload: {
            message: user.message,
            source: `execLoginAndLinkSideEffects --> ${loginUser.name}`,
          },
        });
      }
    } else {
      localStorage.setItem("user_id", user.userID);
      yield put({
        type: ON_LOGIN_USER_SUCCESS,
        payload: user,
      });
    }
  } catch (error) {
    if (error.status == ERROR_401) {
      yield put(
        showErrorNotification(INVALID_CREDENTIALS, {
          position: NotificationPlacement.TOP_CENTER,
        })
      );
    } else {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: {
          message: error.message,
          source: "execLoginAndLinkSideEffects",
        },
      });
    }
  }
};

const execRegisterAndLinkSideEffects = function* (newUser) {
  try {
    const data = yield call(registerNewUser, { newUserData: newUser });
    if (data.isError) {
      yield put(showAuthMessage(data.message));
    } else {
      yield put({
        type: ON_REGISTER_USER_SUCCESS,
        payload: data,
      });
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: {
        message: error.message,
        source: "execRegisterAndLinkSideEffects",
      },
    });
  }
};

const execLogoutAndLinkSideEffects = function* () {
  try {
    localStorage.removeItem("user_id");
    cookie.remove("access_token");
    yield put({
      type: ON_LOGOUT_USER_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: {
        message: error.message,
        source: "execLogoutAndLinkSideEffects",
      },
    });
  }
};

export const authSagas = function* (_action) {
  yield takeLatest(REGISTER_USER, (_action) =>
    execRegisterAndLinkSideEffects(_action.payload.newUser)
  );
  yield takeLatest(LOGIN_USER, (_action) =>
    execLoginAndLinkSideEffects(
      _action.payload.username,
      _action.payload.password
    )
  );
  yield takeLatest(LOGOUT_USER, () => execLogoutAndLinkSideEffects());
};
