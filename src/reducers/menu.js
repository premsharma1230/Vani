const initialMenu = false;

const ManuBar = (state = initialMenu, action) => {
  switch (action.type) {
    case "MENU":
      return action.payload;
    default:
      return state;
  }
};

export default ManuBar;
