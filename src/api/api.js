import axios from "axios";

const baseRoute = "https://admin.vaniprakashan.in";
// Home Page Apis
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
const TrendingAuthorAndBook=()=>{
  const slug ="/home_page/book_and_author/";
  const url=`${baseRoute}${slug}`
  try{
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error){
    return error
  }
}

const LatestestBookList=()=>{
  const slug ="/home_page/latest_picks/?page=1&page_size=2";
  const url=`${baseRoute}${slug}`;
  try{
    const response=axios.get(url).then((response)=>{
      return response.data;
    });
    return response
  }
  catch (error){

    return error
  }
}

const GetHomePageLogos=()=>{
  const slug="/home_page/logos/"
  const url=`${baseRoute}${slug}`
  try{
    const response=axios.get(url).then((response)=>{
      return response.data;
    });
    return response
  }
  catch (error){

    return error
  }
}
export { HomeBanner, AuthorList ,TrendingAuthorAndBook,LatestestBookList,GetHomePageLogos};
