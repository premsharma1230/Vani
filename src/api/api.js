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
const TrendingAuthorAndBook = () => {
  const slug = "/home_page/book_and_author/";
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {
    return error
  }
}

const LatestestBookList = () => {
  const slug = "/home_page/latest_picks/?page=1&page_size=2";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}

const GetHomePageLogos = () => {
  const slug = "/home_page/logos/"
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
const GetBookListWithFilters = (categories, genre, min_prices, max_prices) => {
  let slug;
  if(categories.length > 0 && genre.length > 0 ){
    slug = `/book_store/book_multi_cat_list/?categories=${categories}&genre=${genre}&min_prices=${min_prices}&max_prices=${max_prices}`
  }else if(categories.length > 0){
     slug = `/book_store/book_multi_cat_list/?categories=${categories}&min_prices=${min_prices}&max_prices=${max_prices}`
  }else if(genre.length > 0){
    slug = `/book_store/book_multi_cat_list/?genre=${genre}&min_prices=${min_prices}&max_prices=${max_prices}`
  }else{
    slug = `/book_store/book_multi_cat_list/?min_prices=${min_prices}&max_prices=${max_prices}`
  }
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
const GetBookDetails = (bookSlug) => {
  const slug = `/book_store/book_details/${bookSlug}/`
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
const GetReletdBookDetails = (bookSlug) => {
  const slug = `/book_store/releted_book/${bookSlug}/`
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
const GetAuthorsList = (alphabet) => {
  let slug;
  if(alphabet == "NA") {
    slug = `/authors/authors_list/`
  }else{
    slug = `/authors/authors_list/?alphabet=${alphabet}/`
  }
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
const GetAuthorsDetails = (alphabet) => {
  let slug = `/authors/author_details/${alphabet}/`
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
const GetAuthorsDetailsReleted = (alphabet) => {
  let slug = `/authors/author_releted_books/${alphabet}/`
  const url = `${baseRoute}${slug}`
  try {
    const response = axios.get(url).then((response) => {
      return response.data;
    });
    return response
  }
  catch (error) {

    return error
  }
}
export {
  HomeBanner,
  AuthorList,
  TrendingAuthorAndBook,
  LatestestBookList,
  GetHomePageLogos,
  GetBookListWithFilters,
  GetBookDetails,
  GetReletdBookDetails,
  GetAuthorsList,
  GetAuthorsDetails,
  GetAuthorsDetailsReleted
};
