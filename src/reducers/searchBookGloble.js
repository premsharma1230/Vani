const initialMenu = false;

const SearchGlobleBook = (state = initialMenu, action) => {
  switch (action.type) {
    case "SEARCHGLOBLEBOOK":
      return action.payload;
    default:
      return state;
  }
};

export default SearchGlobleBook;
