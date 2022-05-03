import changeTheNumber from "./updown";
import MenuBar from "./menu";
import SearchGlobleBook from "./searchBookGloble";
import RedirectSamePage from "./navigation";
import UserLogin from "./userIsLogin";
// import OpenLoginPage from "./openLoginForm";
// import OpenRegisterationPage from "./openRegisterationFrom";

import { combineReducers } from "redux";

const reducers = combineReducers({
  changeTheNumber,
  MenuBar,
  SearchGlobleBook,
  RedirectSamePage,
  UserLogin,
  // OpenLoginPage,
  // OpenRegisterationPage,
});

export default reducers;
