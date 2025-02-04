import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import settings from "./settings";
import Api from "./Api";

const reducers = combineReducers({
  routing: routerReducer,
  settings: settings,
  api: Api,
});

export default reducers;
