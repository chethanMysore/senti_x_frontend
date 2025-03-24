/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "^_"}]*/
import { call, put, takeLatest } from "redux-saga/effects";

import {
  FETCH_ALL_FEEDBACKS,
  ON_FETCH_ALL_FEEDBACKS_SUCCESS,
  FETCH_ALL_USERS,
  FETCH_USER_DETAILS,
  UPDATE_USER_DETAILS,
  ON_FETCH_ALL_USERS_SUCCESS,
  ON_FETCH_USER_DETAILS_SUCCESS,
  ON_UPDATE_USER_DETAILS_SUCCESS,
  FETCH_ALL_MODELS,
  FETCH_MODEL_DETAILS,
  UPDATE_MODEL_DETAILS,
  ON_FETCH_ALL_MODELS_SUCCESS,
  ON_FETCH_MODEL_DETAILS_SUCCESS,
  ON_UPDATE_MODEL_DETAILS_SUCCESS,
  CREATE_MODEL,
  ON_CREATE_MODEL_SUCCESS,
  WRITE_ERROR_MESSAGE,
} from "constants/ActionTypes";

import {
  fetchAllFeedbacksData,
  fetchAllUsers,
  fetchUserByID,
  fetchUserByUsername,
  fetchUsersByName,
  updateUserByID,
  fetchAllModels,
  fetchModelByID,
  fetchModelsByUsername,
  fetchModelsByName,
  createNewModel,
  updateModelByID,
} from "api";
import { UserFilterParams, ModelFilterParams } from "constants/DefaultValues";

const execAndLinkSideEffects = function* (
  apiCallFn,
  fnPayload,
  actionOnSuccess,
  putData = true
) {
  try {
    const data = yield call(apiCallFn, fnPayload);
    if (data.isError) {
      yield put({
        type: WRITE_ERROR_MESSAGE,
        payload: {
          message: data.message,
          source: `${execAndLinkSideEffects} --> ${apiCallFn.name}`,
        },
      });
    } else if (putData) {
      yield put({
        type: actionOnSuccess,
        data,
      });
    } else {
      yield put({
        type: actionOnSuccess,
      });
    }
  } catch (error) {
    yield put({
      type: WRITE_ERROR_MESSAGE,
      payload: { message: error.message, source: "execAndLinkSideEffects" },
    });
  }
};

export const apiSagas = function* (_action) {
  yield takeLatest(FETCH_ALL_FEEDBACKS, () =>
    execAndLinkSideEffects(
      fetchAllFeedbacksData,
      {},
      ON_FETCH_ALL_FEEDBACKS_SUCCESS
    )
  );
  yield takeLatest(FETCH_ALL_USERS, () =>
    execAndLinkSideEffects(fetchAllUsers, {}, ON_FETCH_ALL_USERS_SUCCESS)
  );
  yield takeLatest(FETCH_ALL_MODELS, () =>
    execAndLinkSideEffects(fetchAllModels, {}, ON_FETCH_ALL_MODELS_SUCCESS)
  );
  yield takeLatest(FETCH_USER_DETAILS, (_action) => {
    switch (_action.payload.paramName) {
      case UserFilterParams.USERID: {
        return execAndLinkSideEffects(
          fetchUserByID,
          { userID: _action.payload.paramVal },
          ON_FETCH_USER_DETAILS_SUCCESS
        );
      }
      case UserFilterParams.USERNAME: {
        return execAndLinkSideEffects(
          fetchUserByUsername,
          { username: _action.payload.paramVal },
          ON_FETCH_USER_DETAILS_SUCCESS
        );
      }
      case UserFilterParams.NAME: {
        return execAndLinkSideEffects(
          fetchUsersByName,
          { name: _action.payload.paramVal },
          ON_FETCH_ALL_USERS_SUCCESS
        );
      }
    }
  });
  yield takeLatest(FETCH_MODEL_DETAILS, (_action) => {
    switch (_action.payload.paramName) {
      case ModelFilterParams.MODELID: {
        return execAndLinkSideEffects(
          fetchModelByID,
          { modelID: _action.payload.paramVal },
          ON_FETCH_MODEL_DETAILS_SUCCESS
        );
      }
      case ModelFilterParams.MODELNAME: {
        return execAndLinkSideEffects(
          fetchModelsByName,
          { name: _action.payload.paramVal },
          ON_FETCH_MODEL_DETAILS_SUCCESS
        );
      }
      case ModelFilterParams.USERNAME: {
        return execAndLinkSideEffects(
          fetchModelsByUsername,
          { username: _action.payload.paramVal },
          ON_FETCH_ALL_MODELS_SUCCESS
        );
      }
    }
  });
  yield takeLatest(UPDATE_USER_DETAILS, (_action) =>
    execAndLinkSideEffects(
      updateUserByID,
      { userID: _action.payload.userID, updatedUser: _action.payload.userData },
      ON_UPDATE_USER_DETAILS_SUCCESS
    )
  );
  yield takeLatest(UPDATE_MODEL_DETAILS, (_action) =>
    execAndLinkSideEffects(
      updateModelByID,
      {
        modelID: _action.payload.modelID,
        updatedModel: _action.payload.modelData,
      },
      ON_UPDATE_MODEL_DETAILS_SUCCESS
    )
  );
  yield takeLatest(CREATE_MODEL, (_action) =>
    execAndLinkSideEffects(
      createNewModel,
      { modelData: _action.payload.model },
      ON_CREATE_MODEL_SUCCESS
    )
  );
};
