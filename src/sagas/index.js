import { all } from "redux-saga/effects";
import { apiSagas } from "./API";

export default function* rootSaga(getState) {
  yield all([apiSagas()]);
}
