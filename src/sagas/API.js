import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCH_ALL_FEEDBACKS,
  FEEDBACKS_DATA,
  WRITE_ERROR_MESSAGE,
} from "constants/ActionTypes";

import { fetchAllFeedbacksData } from "api/Feedbacks";

const getEntityData = function* (entityName, queryParams = []) {
  try {
    const data = yield call(fetchAllFeedbacksData, entityName, queryParams);
    if (data.isError) {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: { message: data.message, source: "fetchAllFeedbacksData" },
      });
    } else {
      yield put({ type: entityName, data });
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: "getEntityData" },
    });
  }
};

export const apiSagas = function* () {
  yield takeLatest(FETCH_ALL_FEEDBACKS, () => getEntityData(FEEDBACKS_DATA));
};
