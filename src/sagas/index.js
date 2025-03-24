/*eslint no-unused-vars: "off"*/
import { all } from "redux-saga/effects";
import { apiSagas } from "./Api";
import { authSagas } from "./Auth";

export default function* rootSaga(getState) {
  yield all([authSagas(), apiSagas()]);
}
