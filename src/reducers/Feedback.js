import { ON_FETCH_ALL_FEEDBACKS_SUCCESS } from "constants/ActionTypes";

const INIT_STATE = {
  feedbacksData: [12, 13, 14],
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case ON_FETCH_ALL_FEEDBACKS_SUCCESS: {
      return Object.assign({}, state, { feedbacksData: data });
    }
    default:
      return { ...state };
  }
};
