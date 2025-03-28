import { ON_FETCH_ALL_FEEDBACKS_SUCCESS } from "constants/ActionTypes";

const INIT_STATE = {
  feedbacksData: [12, 13, 14],
};

export default (state = INIT_STATE, { type, payload }) => {
  switch (type) {
    case ON_FETCH_ALL_FEEDBACKS_SUCCESS: {
      return Object.assign({}, state, { feedbacksData: payload });
    }
    default:
      return { ...state };
  }
};
