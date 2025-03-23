import { apiTrainBasePath, feedbacksDataPath } from "constants/DefaultValues";
import { FetchData } from "util/apiCalls";

export const fetchAllFeedbacksData = async () => {
  return new Promise((resolve, reject) => {
    FetchData(apiTrainBasePath, feedbacksDataPath)
      .then((data) => resolve(data))
      .catch((err) => {
        err.isError = true;
        reject(err);
      });
  });
};
