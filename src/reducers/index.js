import changeTheNumber from "./updown";
import ManuBar from "./menu";

import { combineReducers } from "redux";

const reducers = combineReducers({
  changeTheNumber,
  ManuBar,
});

export default reducers;
