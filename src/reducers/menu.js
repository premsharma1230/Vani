const initialMenu = false;

const MenuBar = (state = initialMenu, action) => {
  switch (action.type) {
    case "MENU":
      return action.payload;
    default:
      return state;
  }
};

export default MenuBar;
