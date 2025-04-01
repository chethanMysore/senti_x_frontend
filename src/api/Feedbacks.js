/*eslint no-unused-vars: ["error", {"argsIgnorePattern": "params"}]*/
import { apiTrainBasePath, feedbacksDataPath } from "constants/DefaultValues";
import { FetchData } from "util/apiCalls";

export const fetchAllFeedbacksData = async (params) => {
  return new Promise((resolve, reject) => {
    FetchData(apiTrainBasePath, feedbacksDataPath)
      .then((res) => {
        res.data && res.data.feedbacks
          ? resolve(res.data.feedbacks)
          : reject({
              ...res,
              isError: true,
              message: "Invalid response",
              status: 500,
            });
      })
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
