const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
  console.log(state, action, "changeTheNumber");
  switch (action.type) {
    case "INCREMENT":
      return action.payload;
    default:
      return state;
  }
};
export default changeTheNumber;
