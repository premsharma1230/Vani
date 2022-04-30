export const incNumber = num => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const menuNav = item => {
  return {
    type: "MENU",
    payload: item,
  };
};
