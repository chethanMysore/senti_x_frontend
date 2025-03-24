import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import settings from "./settings";
import feedback from "./Feedback";
import user from "./User";
import model from "./Model";
import auth from "./Auth";

const reducers = combineReducers({
  routing: routerReducer,
  settings: settings,
  feedback: feedback,
  user: user,
  model: model,
  auth: auth,
});

export default reducers;
