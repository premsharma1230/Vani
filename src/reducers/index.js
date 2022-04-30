import changeTheNumber from "./updown";
import MenuBar from "./menu";
import SearchGlobleBook from "./searchBookGloble";

import { combineReducers } from "redux";

const reducers = combineReducers({
  changeTheNumber,
  MenuBar,
  SearchGlobleBook,
});

export default reducers;
