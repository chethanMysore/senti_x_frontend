/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import { all, call, put, takeLatest } from "redux-saga/effects";
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
} from "constants/ActionTypes";

import { registerNewUser, loginUser, reloadUser } from "api";
import { showAuthMessage, handleError } from "actions";
import { setInitURL } from "actions";
import { showSuccessNotification } from "actions";
import { LOGIN_SUCCESSFUL } from "constants/DefaultValues";
import { ON_RELOAD_USER_DATA_SUCCESS } from "constants/ActionTypes";
import { RELOAD_USER_DATA } from "constants/ActionTypes";

const execLoginAndLinkSideEffects = function* (username, password) {
  try {
    const res = yield call(loginUser, { username, password });
    if (res.isError) {
      yield put(
        handleError(res, `execLoginAndLinkSideEffects -> ${loginUser.name}`)
      );
    } else {
      // localStorage.setItem("user_id", user.userID);
      yield all([
        yield put({
          type: ON_LOGIN_USER_SUCCESS,
          payload: res,
        }),
        put(showSuccessNotification(LOGIN_SUCCESSFUL)),
        // put(setInitURL("/app/profile")),
      ]);
    }
  } catch (error) {
    yield put(handleError(error, "execLoginAndLinkSideEffects"));
  }
};

const execReloadAndLinkSideEffects = function* () {
  try {
    const res = yield call(reloadUser);
    if (res.isError) {
      yield put(
        handleError(res, `execLoginAndLinkSideEffects -> ${loginUser.name}`)
      );
    } else {
      // localStorage.setItem("user_id", user.userID);
      yield all([
        yield put({
          type: ON_RELOAD_USER_DATA_SUCCESS,
          payload: res,
        }),
        put(setInitURL("/")),
      ]);
    }
  } catch (error) {
    yield put(handleError(error, "execLoginAndLinkSideEffects"));
  }
};

const execRegisterAndLinkSideEffects = function* (newUser) {
  try {
    const res = yield call(registerNewUser, { newUserData: newUser });
    if (res.isError) {
      yield [
        put(showAuthMessage(res.message)),
        put(
          handleError(
            res,
            `execRegisterAndLinkSideEffects -> ${registerNewUser.name}`
          )
        ),
      ];
    } else {
      yield put({
        type: ON_REGISTER_USER_SUCCESS,
        payload: res,
      });
    }
  } catch (error) {
    yield put(handleError(error, "execRegisterAndLinkSideEffects"));
  }
};

const execLogoutAndLinkSideEffects = function* () {
  try {
    // localStorage.removeItem("user_id");
    cookie.remove("access_token");
    yield put({
      type: ON_LOGOUT_USER_SUCCESS,
    });
  } catch (error) {
    yield put(handleError(error, "execLogoutAndLinkSideEffects"));
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
  yield takeLatest(RELOAD_USER_DATA, () => execReloadAndLinkSideEffects());
};
