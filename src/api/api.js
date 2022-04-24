import axios from "axios";

const baseRoute = "https://admin.vaniprakashan.in";
// Home Page Apis
const LoginApi = (body) => {
  const slug = `/auth/user/login/`
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
    }).then(res => {
      return res.data;
    }).catch(function (error) {
      if (error.response) {
        return error.response;
      }
      else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    });
    return response;
  } catch (error) {
    return error;
  }
};


const RegisterApi = (body) => {
  const slug = `/auth/user/register/`
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body
    }).then(res => {
      return res.data;
    }).catch(function (error) {
      if (error.response) {
        return error.response;
      }
      else if (error.request) {
        return error.request;
      } else {
        return error.message;
      }
    });
    return response;
  } catch (error) {
    return error;
  }
}
const HomeBanner = () => {
  const slug = "/home_page/home_page_baner/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
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
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const TrendingAuthorAndBook = () => {
  const slug = "/home_page/book_and_author/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const LatestestBookList = () => {
  const slug = "/home_page/latest_picks/?page=1&page_size=2";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const GetHomePageLogos = () => {
  const slug = "/home_page/logos/";
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetBookListWithFilters = (categories, genre, min_prices, max_prices) => {
  let slug;
  if (categories.length > 0 && genre.length > 0) {
    slug = `/book_store/book_multi_cat_list/?categories=${categories}&genre=${genre}&min_prices=${min_prices}&max_prices=${max_prices}`;
  } else if (categories.length > 0) {
    slug = `/book_store/book_multi_cat_list/?categories=${categories}&min_prices=${min_prices}&max_prices=${max_prices}`;
  } else if (genre.length > 0) {
    slug = `/book_store/book_multi_cat_list/?genre=${genre}&min_prices=${min_prices}&max_prices=${max_prices}`;
  } else {
    slug = `/book_store/book_multi_cat_list/?min_prices=${min_prices}&max_prices=${max_prices}`;
  }
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetBookDetails = bookSlug => {
  const slug = `/book_store/book_details/${bookSlug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetReletdBookDetails = bookSlug => {
  const slug = `/book_store/releted_book/${bookSlug}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetAuthorsList = alphabet => {
  let slug;
  if (alphabet == "NA") {
    slug = `/authors/authors_list/`;
  } else {
    slug = `/authors/authors_list/?alphabet=${alphabet}/`;
  }
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetAuthorsDetails = alphabet => {
  let slug = `/authors/author_details/${alphabet}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetAuthorsDetailsReleted = alphabet => {
  let slug = `/authors/author_releted_books/${alphabet}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetAuthorsReview = id => {
  let slug = `/authors/author_reviews/${id}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

const GetUserWishlist = id => {
  let slug = `/user_wishlist/list/${id}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetGenrelist = () => {
  let slug = `/book_store/genre_list/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const GetBookReview = id => {
  let slug = `/book_store/book_reviews/${id}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios.get(url).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const CreateBookReview = (book_id, body,token) => {
  let slug = `/book_store/book_reviews/${book_id}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};
const createAndRemoveWishList = (id,token) => {
  let slug = `/user_wishlist/list/`;
  const url = `${baseRoute}${slug}`;
  const formData = new FormData();
  formData.append("book_id", id);
  try {
    const response = axios({
      method: "post",
      url: url,
      data: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const getWishList = (token) => {
  let slug = `/user_wishlist/list/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const getOrderList = (token) => {
  let slug = `/order/user_order/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const getCartList = (token) => {
  let slug = `/cart/user_cart/`;
  const url = `${baseRoute}${slug}`;
  const Token = token
  if (Token) {
    try {
      const response = axios({
        method: "get",
        url: url,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }).then(response => {
        return response.data;
      });
      return response;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const response = axios({
        method: "get",
        url: url
      }).then(response => {
        return response.data;
      });
      return response;
    } catch (error) {
      return error;
    }
  }
};

const CreateCart = (body, token) => {
  let slug = `/cart/add_book/`;
  const Token = token
  const url = `${baseRoute}${slug}`;
  if (Token) {
    try {
      const response = axios({
        method: "post",
        url: url,
        data: body,
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      }).then(response => {
        return response.data;
      });

      return response;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const response = axios({
        method: "post",
        url: url,
        data: body,
      }).then(response => {
        return response.data;
      });

      return response;
    } catch (error) {
      return error;
    }
  }
};

const RemoveCart = (body,token) => {
  let slug = `/cart/remove_book/`;
 const url = `${baseRoute}${slug}`;

  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};

const cartCheckout = (list,token) => {
  let slug = `/cart/check_out_1/`;
  const body = {
    "id_list": list
  }
 const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};
const CreateAddress = (body,token) => {
  let slug = `/user_address/get_user_address/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};
const cartFinalCheckout = (body,token) => {
  console.log(body,'---------------',token,'!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!')
  let slug = `/cart/final_checkout/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};
const getVoucherDiscount = (body,token) => {
  let slug = `/cart/get_voucher_discount_values/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};
const UpdateAddress = (body, id,token) => {
  let slug = `/user_address/address_details/${id}/`;
  const url = `${baseRoute}${slug}`;
  try {
    const response = axios({
      method: "put",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });

    return response;
  } catch (error) {
    return error;
  }
};

const getAddressList = (token) => {
  let slug = `/user_address/get_user_address/?page_size=110`;
  const url = `${baseRoute}${slug}`;
   try {
    const response = axios({
      method: "get",
      url: url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};
const cardIdMerge = (body,token) => {
  let slug = `/cart/merge_carts/`;
  const url = `${baseRoute}${slug}`;
   try {
    const response = axios({
      method: "post",
      url: url,
      data: body,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      return response.data;
    });
    return response;
  } catch (error) {
    return error;
  }
};

export {
  LoginApi,
  RegisterApi,
  HomeBanner,
  AuthorList,
  TrendingAuthorAndBook,
  LatestestBookList,
  GetHomePageLogos,
  GetBookListWithFilters,
  GetBookDetails,
  GetReletdBookDetails,
  GetAuthorsReview,
  GetAuthorsList,
  GetAuthorsDetails,
  GetAuthorsDetailsReleted,
  GetBookReview,
  createAndRemoveWishList,
  CreateBookReview,
  GetGenrelist,
  CreateCart,
  getWishList,
  getOrderList,
  getCartList,
  RemoveCart,
  cartCheckout,
  cartFinalCheckout,
  getVoucherDiscount,
  CreateAddress,
  getAddressList,
  UpdateAddress,
  cardIdMerge
};
