const initialMenu = "/";

const RedirectSamePage = (state = initialMenu, action) => {
  switch (action.type) {
    case "REDIRECTPAGE":
      return action.payload;
    default:
      return state;
  }
};

export default RedirectSamePage;
