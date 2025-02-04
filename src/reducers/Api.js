import { FETCH_ALL_FEEDBACKS, FEEDBACKS_DATA } from "constants/ActionTypes";

const INIT_STATE = {
  feedbacksData: [12, 13, 14],
};

export default (state = INIT_STATE, { type, data }) => {
  switch (type) {
    case FEEDBACKS_DATA: {
      return Object.assign({}, state, { feedbacksData: data });
    }
    default:
      return { ...state };
  }
};
