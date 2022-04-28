const initialState = 0;

const changeTheNumber = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT": return  action.payload;
        case "DECREMENT": return action.payload;
        default: return state;
    }
}

export default changeTheNumber;