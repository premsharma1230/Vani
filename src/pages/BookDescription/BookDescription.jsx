import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/book2.png";
import { useLocation, Link, useNavigate, NavLink } from "react-router-dom";
import { GetBookDetails, GetReletdBookDetails } from "../../api/api";
import { Review } from "./Review";

export const BookDescription = () => {
  const book_slug = JSON.parse(sessionStorage.getItem("bookDetail")).slug;
  const [bookDetailsData, setBookDetailsData] = React.useState([]);
  const [reletedBook, setReletedBook] = React.useState([]);
  const [count, setCount] = useState(0);

  const handelIncrement = () => {
    let value = count;
    value++;
    setCount(value);
  };
  const handelDecrement = () => {
    if (count > 0) {
      let value = count;
      value--;
      setCount(value);
    }
  };
  useEffect(() => {
    GetBookDetails(book_slug).then(e => {
      setBookDetailsData(e?.data);
    });
    GetReletdBookDetails(book_slug).then(e => {
      console.log(e, "fffffffffffffffffffffffffffffffffffffffffffff");
      setReletedBook(e?.results);
    });
  }, []);

  return (
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
                <Link to="#">Ki Yaad Jo Karen Sabhi</Link>
              </li>
            </ul>
            <ul className="pagination_view">
              <li>
                <Link to="#">{`< preview`}</Link>
              </li>
              <li>
                <Link to="#">{`next >`}</Link>
              </li>
            </ul>
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
                  <span>In stack</span>
                </h2>
                <h5>By Max</h5>
              </div>
              <figcaption>
                <div className="rating_Wrap">
                  <ul className="Star_Wrp">
                    {[...Array(4).keys()].map(index => (
                      <li key={index}>
                        <i className="fas fa-star star"></i>
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
                      <li>
                        <NavLink to="#">
                          <i className="far fa-file"></i>
                          Paper Back
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="far fa-file"></i>
                          Hard Cover
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="fab fa-etsy ebook"></i>E - Book
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="far fa-file-audio"></i>
                          Audio Book
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="#">
                          <i className="far fa-file"></i>
                          Kindle
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </figcaption>
              <div className="About-book-detail">
                <ul className="book-list-left">
                  <li>
                    <span>ISBN :</span>
                    <strong>{bookDetailsData?.isbn_code}</strong>
                  </li>
                  <li>
                    <span>Pages : </span>
                    <strong>
                      {bookDetailsData?.ebook_details?.e_pub?.pages}
                    </strong>
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
                    <div className="Counter_heading">
                      <h3>₹ 399</h3>
                    </div>
                    <div className="Counter_Number">
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
                  </div>
                  <button
                    //   onClick={() => readNow(bookDetails?.original_ebook)}
                    className="read_btn cart-btn"
                  >
                    <Link to="#">
                      <i className="fas fa-bolt"></i>
                      <span>Buy now</span>
                    </Link>
                  </button>
                  <button className="Save_btn cart-btn">
                    <Link to="/Save">
                      <i className="fas fa-cart-plus"></i>
                      <span>add to cart</span>
                    </Link>
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                etiam purus eget ullamcorper viverra nunc, morbi. Eget ipsum
                elit laoreet elit facilisis neque pellentesque. Faucibus quis
                eu, egestas velit. Bibendum quis condimentum integer vitae
                fermentum. Tempor adipiscing felis nisi faucibus placerat
                rhoncus malesuada facilisis arcu. Facilisi vel arcu morbi non
                netus est ipsum malesuada maecenas. Eget fermentum, habitasse
                faucibus lorem tortor, lorem sapien vitae faucibus. Vitae, mi
                nunc, vitae leo nunc interdum fringilla urna. Semper lacus, in
                elit amet, feugiat sem quam. Ut nisl duis sed enim enim aliquam
                turpis elit. Dis fringilla adipiscing orci odio turpis mattis at
                est.
              </p>
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
                    <strong>{"₹"} 300</strong>
                  </figcaption>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* end-here--Other-Books */}
        {/* Review */}
        <div className="Review-Section">
          <Review />
        </div>
      </div>
      <Footer />
    </section>
  );
};
