import { call, put, takeLatest, takeEvery } from "redux-saga/effects";

import {
  FETCH_ALL_FEEDBACKS,
  FEEDBACKS_DATA,
  WRITE_ERROR_MESSAGE,
} from "constants/ActionTypes";

import { fetchFeedbacksData } from "util/apiCalls";

const getEntityData = function* (entityName, queryParams = []) {
  try {
    const data = yield call(fetchFeedbacksData, entityName, queryParams);
    if (data.isError) {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: { message: error.message, source: "getEntityData" },
      });
    } else {
      yield put({ type: entityName, data });
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: "getTableData" },
    });
  }
};

export const apiSagas = function* (action) {
  yield takeLatest(FETCH_ALL_FEEDBACKS, () => getEntityData(FEEDBACKS_DATA));
};
