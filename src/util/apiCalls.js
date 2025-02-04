import axios from "axios";
import { apiBasePath, feedbacksDataPath } from "constants/DefaultValues";

import { FETCH_ALL_FEEDBACKS, FEEDBACKS_DATA } from "constants/ActionTypes";

const BuildUrlQuery = (url, params) => {
  let query = "";
  params.forEach((param, i) => {
    i == 0
      ? (query += `?${param.key}=${param.value}`)
      : (query += `&${param.key}=${param.value}`);
  });
  url += query;
  return url;
};

const getRequest = (entityName, byId = false, id = "", queryParams = []) => {
  return new Promise((resolve, reject) => {
    let entityPath = "";
    switch (entityName) {
      case FEEDBACKS_DATA:
        entityPath = feedbacksDataPath;
        break;
    }
    let requestUrl = `${apiBasePath}${entityPath}`;
    if (byId) {
      requestUrl += `/${id}`;
    }
    if (queryParams.length > 0) {
      requestUrl = BuildUrlQuery(requestUrl, queryParams);
    }
    const request = axios.create();
    request
      .get(requestUrl)
      .then((res) => resolve(res.data))
      .catch((err) => {
        reject(err);
      });
  });
};

export const fetchFeedbacksData = (
  entityName,
  byId = false,
  id = "",
  queryParams = []
) => {
  return new Promise(async (resolve, reject) => {
    getRequest(entityName, byId, id, queryParams)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
