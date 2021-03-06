import React, { createContext, useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/book2.png";
import { useLocation, Link, useNavigate, NavLink } from "react-router-dom";
import {
  GetBookDetails,
  GetBookReview,
  GetReletdBookDetails,
  CreateCart,
  getCartList,
} from "../../api/api";
import { Review } from "./Review";
import {incNumber,globleSearchData} from "../../actions";
import { useSelector, useDispatch } from "react-redux";

export const BookDescription = props => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const book_slug  = location.pathname.split("/")
  // const book_slug = JSON.parse(sessionStorage.getItem("bookDetail"))?.slug;
  const [bookDetailsData, setBookDetailsData] = useState([]);
  const [reletedBook, setReletedBook] = useState([]);
  const [bookFormat, setBookFormat] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [getBookReview, setGetBookReview] = useState([]);
  const [count, setCount] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [discountPrice, setDiscountPrice] = useState("");
  const [cartData, setCartData] = useState("0");
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const cartId = JSON.parse(sessionStorage?.getItem("cartIdLocal"))
  const [cartIdWithToken, setCartIdWithToken] = React.useState('');

  const discount = selectedBook?.discountable_price;
  const handelIncrement = () => {
    let value = count;
    value++;
    setCount(value);
    setDiscountPrice(value * discount);
  };
  const handelDecrement = () => {
    if (count >= 1) {
      let value = count;
      value--;
      if (value >= 1) {
        setCount(value);
        setDiscountPrice(discount * value);
      }
    }
  };
  useEffect(() => {
    if(!token && !cartId){
      getCartList().then(elem => {
        sessionStorage.setItem("cartIdLocal", JSON.stringify(elem?.cart_id));
    });
  }else{
    getCartList(token).then(elem => {
      setCartIdWithToken(elem?.cart_id)
  });
  }
  dispatch(globleSearchData(''));
  },[])
  useEffect(() => {
    GetBookDetails(book_slug[2]).then(e => {
      setBookDetailsData(e?.data);
      const printedBookDetails = Object.getOwnPropertyNames(
        e?.data?.printed_book_details
      );
      const ebookDetails = Object.getOwnPropertyNames(e?.data?.ebook_details);
      const audioBookDetails = Object.getOwnPropertyNames(
        e?.data?.audio_book_details
      );
      if (Object.entries(e?.data?.printed_book_details).length) {
        let value = Object.values(e?.data?.printed_book_details);
        if (value) {
          setSelectedBook(value[0]);
          setDiscountPrice(value[0]?.discountable_price);
          GetBookReview(value[0].id).then(ele => {
            // setGetBookReview(ele)
          });
        }
      } else if (Object.entries(e?.data?.ebook_details).length) {
        let value = Object.values(e?.data?.ebook_details);
        if (value) {
          setSelectedBook(value[0]);
          setDiscountPrice(value[0]?.discountable_price);
          GetBookReview(value[0].id).then(ele => {
            // setGetBookReview(ele)
          });
        }
      } else {
        let value = Object.values(e?.data?.audio_book_details);
        if (value) {
          setSelectedBook(value[0]);
          setDiscountPrice(value[0]?.discountable_price);
          GetBookReview(value[0].id).then(ele => {
            // setGetBookReview(ele)
          });
        }
      }
      if (printedBookDetails) {
        const copy = [];
        printedBookDetails.forEach(item => {
          copy.push({ name: item, iconName: "printBook" });
        });
        setBookFormat(prev => [...prev, ...copy]);
      }
      if (ebookDetails) {
        const copy = [];
        ebookDetails.forEach(item => {
          copy.push({ name: item, iconName: "ebookDetails" });
        });
        setBookFormat(prev => [...prev, ...copy]);
      }
      if (audioBookDetails) {
        const copy = [];
        audioBookDetails.forEach(item => {
          copy.push({ name: item, iconName: "audioBookDetails" });
        });
        setBookFormat(prev => [...prev, ...copy]);
      }
    });
    GetReletdBookDetails(book_slug).then(e => {
      setReletedBook(e?.results);
    });
  }, []);

  const handleCart = (elem, redirect) => {
    let body;
        if(!token){
          body = {
            cart_id: cartId,
            book_id: elem,
            quantity: count,
          };
        }else{
          body = {
            cart_id: cartIdWithToken,
            book_id: elem,
            quantity: count,
          };
        }
    CreateCart(body,token).then(elem => {
      dispatch(incNumber(elem?.count))
      if (redirect === "buy") {
        Navigate("/Cart");
      }
    });
  };

  const handelBookFormat = (e, index) => {
    setActiveIndex(index);

    for (let value of Object.values(bookDetailsData.printed_book_details)) {
      if (value.name == e.name) {
        setSelectedBook(value);
        setDiscountPrice(value.discountable_price);
      }
    }

    for (let value of Object.values(bookDetailsData.ebook_details)) {
      if (value.name == e.name) {
        setSelectedBook(value);
        setDiscountPrice(value.discountable_price);
      }
    }
    for (let value of Object.values(bookDetailsData.audio_book_details)) {
      if (value.name == e.name) {
        setSelectedBook(value);
        setDiscountPrice(value.discountable_price);
      }
    }
  };

  const CartState = {
    name: "1",
  };
  return (
    <>
      <section className="Main_HomeWrapper Description_wrapper BookDesciption_Wrapper">
        <div className="BookDescription_head">
          <div className="container">
            <div className="booklist_navigation">
              <ul className="BreadCumb ">
                <li>
                  <Link to="/">Home</Link> /
                </li>
                <li>
                  <Link to="/Booklist">Books</Link>/
                </li>
                <li>
                  <Link to="#">{book_slug[2]}</Link>
                </li>
              </ul>
              {/* <ul className="pagination_view">
              <li>
                <Link to="#">{`< preview`}</Link>
              </li>
              <li>
                <Link to="#">{`next >`}</Link>
              </li>
            </ul> */}
            </div>
          </div>
        </div>

        <div className="container">
          <div className="Description_Content">
            <div className="Description_Left">
              <figure>
                <div className="img_Wrp">
                  {" "}
                  <img
                    src={book}
                    // {bookDetails?.book_details?.image}
                    alt="book"
                  />
                </div>

                <ul className="TypeProduct_wrp">
                  {[...Array(3).keys()].map(index => (
                    <li key={index}>
                      <img src={book} />
                    </li>
                  ))}
                </ul>
              </figure>
            </div>
            <div className="Description_Right">
              <div className="About_Book">
                <div className="About-book-title">
                  <h2>
                    {bookDetailsData?.title}
                    {selectedBook && selectedBook?.is_in_stock ? (
                      <span>In stack</span>
                    ) : (
                      <span
                        style={{
                          background: "red",
                          width: "max-content",
                          padding: ".4rem .5rem",
                        }}
                      >
                        Out Of stack
                      </span>
                    )}
                  </h2>
                  <h5>
                    By <span>{bookDetailsData?.authors}</span>
                  </h5>
                </div>
                <figcaption>
                  <div className="rating_Wrap">
                    <ul className="Star_Wrp">
                      {bookDetailsData?.book_reviews?.avg != 0
                        ? [
                            ...Array(
                              bookDetailsData?.book_reviews?.avg != 0
                                ? bookDetailsData?.book_reviews?.avg
                                : 1
                            ).keys(),
                          ].map(index => (
                            <li>
                              <i className="fas fa-star star"></i>
                            </li>
                          ))
                        : [...Array(5).keys()].map(index => (
                            <li>
                              <i className="far fa-star star"></i>
                            </li>
                          ))}
                    </ul>
                    <div>
                      <p>3,028 ratings</p>
                    </div>
                  </div>
                  {/* <p>{bookDetailsData?.description}</p> */}
                  <div className="Format_Wrp">
                    <div className="Format_Heading">
                      <h2>Format :</h2>
                    </div>
                    <div className="Format-content">
                      <ul>
                        {/* {bookDetailsData?.audio_book_details ? */}

                        {bookFormat &&
                          bookFormat.map((elem, index) => (
                            <li
                              key={index}
                              onClick={() => handelBookFormat(elem, index)}
                              className={
                                activeIndex === index ? "activeBtn" : null
                              }
                            >
                              <NavLink to="#">
                                {elem?.iconName == "printBook" ? (
                                  <i className="far fa-file"></i>
                                ) : elem?.iconName == "ebookDetails" ? (
                                  <i className="fab fa-etsy ebook"></i>
                                ) : elem?.iconName == "audioBookDetails" ? (
                                  <i className="far fa-file-audio"></i>
                                ) : null}
                                {elem?.name}
                              </NavLink>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </figcaption>
                <div className="About-book-detail">
                  <ul className="book-list-left">
                    <li>
                      <span>ISBN :</span>
                      <strong>{selectedBook?.isbn_code}</strong>
                    </li>
                    <li>
                      <span>Pages : </span>
                      <strong>{selectedBook?.pages}</strong>
                    </li>

                    <li>
                      <span>Publication Date : </span>
                      <strong>{bookDetailsData?.publications_year}</strong>
                    </li>
                    <li>
                      <span>Language :</span>
                      <strong>
                        English
                        {/* {bookDetails?.languages?.key} */}
                      </strong>
                    </li>
                    <li>
                      <span>Genre :</span>
                      <div className="genre-wrp">
                        {bookDetailsData?.genres?.map((g, index) => (
                          <strong key={index}>{g}</strong>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="description-Group-btn">
                  <div className="description_content">
                    <div className="Coutner_Wrp">
                      <div className="Counter_heading Discount-price_wrp">
                        {" "}
                        <h3>
                          {" ??? "} {discountPrice}
                        </h3>
                        <h3 className="Discount">
                          {"???"} {selectedBook?.original_price}
                        </h3>
                      </div>
                      {bookFormat &&
                        bookFormat.map((elem, index) =>
                          elem?.iconName === "printBook" &&
                          activeIndex === index ? (
                            <div key={index} className="Counter_Number">
                              <div className="count_Increment">
                                <button onClick={handelIncrement}>+</button>
                              </div>
                              <div className="Counter_print">
                                <p>{count}</p>
                              </div>{" "}
                              <div className="count_btn">
                                <button onClick={handelDecrement}>-</button>
                              </div>
                            </div>
                          ) : null
                        )}
                    </div>
                    <button className="read_btn cart-btn">
                      <Link
                        to="#"
                        onClick={() => handleCart(selectedBook?.id, "buy")}
                      >
                        <i className="fas fa-bolt"></i>
                        <span>Buy now</span>
                      </Link>
                    </button>{" "}
                    <button className="Save_btn cart-btn">
                      <Link
                        to="#"
                        onClick={() => handleCart(selectedBook?.id, "addCart")}
                      >
                        <i className="fas fa-cart-plus"></i>
                        <span>add to cart</span>
                      </Link>{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bookDes_Wrp">
            <div className="container">
              <div className="bookDes_Wrp_Content">
                <h2>Description</h2>
                <p>{bookDetailsData?.description}</p>
              </div>
            </div>
          </div>

          {/* Related-Books */}

          <div className="Otherbook_Wrapper Related_Book_Wrapper">
            <div className="Otherbook-Heading">
              <h2>Related Books</h2>
            </div>
            <div className="Grid_Carousel_wrp">
              {/* {booklist.length > 0 &&
              booklist?.map(ele => ( */}
              {reletedBook?.map((rel, index) => (
                <div key={index} className="Grid-item">
                  <Link to="#">
                    <figure>
                      <img src={book} alt="book" />
                    </figure>
                    <figcaption>
                      <h3>{rel?.title}</h3>
                      <strong>Mahesh max</strong>
                      <span key={index} className="star_wrp">
                        {[...Array(4).keys()].map(index => (
                          <i className="fas fa-star star-item"></i>
                        ))}
                      </span>
                      <strong>
                        {"???"} {rel?.ebook_details?.epub?.original_price}
                      </strong>
                    </figcaption>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          {/* end-here--Other-Books */}
          {/* Review */}
          <div className="Review-Section">
            <Review getID={bookDetailsData.id} />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
