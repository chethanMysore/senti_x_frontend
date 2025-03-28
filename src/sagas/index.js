/*eslint no-unused-vars: "off"*/
import { all } from "redux-saga/effects";
import { apiSagas } from "./Api";
import { authSagas } from "./Auth";
import { notificationSagas } from "./Notification";

export default function* rootSaga(getState) {
  yield all([authSagas(), apiSagas(), notificationSagas()]);
}
