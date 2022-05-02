
const initialUserLogin = false;

const UserLogin = (state = initialUserLogin, action) => {
  switch (action.type) {
    case "USERISLOGIN":
      return action.payload;
    default:
      return state;
  }
};

export default UserLogin;
