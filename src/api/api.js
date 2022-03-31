import axios from "axios";

const baseRoute = "http://65.2.60.104:8000";

const HomeBanner = () => {
  const slug = "/home_page/home_page_baner/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const AuthorList = () => {
    const slug = "/home_page/authors_list/";
    const url = `${baseRoute}${slug}`;
    try {
        const response = axios.get(url).then((response) => {
          return response.data;
        });
        return response;
      } catch (error) {
        return error;
      }
}

export { HomeBanner, AuthorList };
