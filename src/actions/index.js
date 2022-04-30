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

export const globleSearchData = item => {
  return {
    type: "MENU",
    payload: item,
  };
};

export const Redirection = item => {
  return {
    type: "REDIRECTPAGE",
    payload: item,
  };
};
