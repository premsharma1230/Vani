import changeTheNumber from "./updown";
import MenuBar from "./menu";
import SearchGlobleBook from "./searchBookGloble";
import RedirectSamePage from "./navigation"

import { combineReducers } from "redux";

const reducers = combineReducers({
  changeTheNumber,
  MenuBar,
  SearchGlobleBook,
  RedirectSamePage
});

export default reducers;
