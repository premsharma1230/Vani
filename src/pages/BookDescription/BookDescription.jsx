import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/book2.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
// import { GetBookListDetails } from "../../api/api";

export const BookDescription = () => {
  //   const { state } = useLocation();
  //   let navigate = useNavigate();
  //   const [bookDetails, setBookDetails] = useState();
  //   const college_slug = JSON.parse(
  //     sessionStorage.getItem("studentLogin")
  //   ).college_slug;
  //   const book_slug = JSON.parse(sessionStorage.getItem("bookDetail")).slug;
  //   const token = JSON.parse(sessionStorage.getItem("studentLogin")).token;
  //   const [booklist, setBooklist] = useState([]);
  //   const booklistId = JSON.parse(sessionStorage.getItem("bookDetail")).id;
  //   const bookListFIlter = JSON.parse(
  //     sessionStorage.getItem("filterbokLists")
  //   )?.results;
  //   useEffect(() => {
  //     GetBookListDetails(college_slug, token, book_slug).then(res => {
  //       setBookDetails(res.data);
  //     });
  //     const data = bookListFIlter?.filter(ele => ele.id != booklistId);
  //     console.log(data, "+++++++++++++++++++++++++++++++++++++++++++++");
  //     setBooklist(data);
  //   }, []);
  //   const readNow = e => {
  //     navigate("/readbook", {
  //       state: { readme: e },
  //     });
  //   };

  //   console.log(bookDetails, "+++++++++++++bookDetailsbookDetails");

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
                <Link to="/Booklist">Book</Link>
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
              <img
                src={book}
                // {bookDetails?.book_details?.image}
                alt="book"
                style={{ width: "18rem", height: "24rem" }}
              />
            </figure>
          </div>
          <div className="Description_Right">
            <div className="About_Book">
              <div className="About-book-title">
                <h2>
                  Title
                  {/* {bookDetails?.book_details?.title} */}
                </h2>
                <h5>
                  By Max
                  {/* {bookDetails?.book_details?.book_authors} */}
                </h5>
              </div>
              <figcaption>
                <p>
                  lorem ispe sie disd iess idks sisdd , sie s idd sie d lorem
                  ispe sie disd iess idks sisdd , sie s idd sie d lorem ispe sie
                  disd iess idks sisdd , sie s idd sie d disd iess idks sisdd ,
                  sie s idd sie d disd iess idks sisdd , sie s idd sie d
                  {/* {bookDetails?.book_details?.description} */}
                </p>
              </figcaption>
              <div className="About-book-detail">
                <ul className="book-list-left">
                  <li>
                    <span>ISBN :</span>
                    <strong>
                      20304
                      {/* {bookDetails?.book_details?.isbn_code} */}
                    </strong>
                  </li>
                  <li>
                    <span>Pages : </span>
                    <strong>
                      44
                      {/* {bookDetails?.pages} */}
                    </strong>
                  </li>
                  <li>
                    <span>Publication Date : </span>
                    <strong>
                      0349994
                      {/* {bookDetails?.book_details?.publications_year} */}
                    </strong>
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
                    <strong>
                      kavi
                      {/* {bookDetails?.book_details?.book_genres} */}
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="description-Group-btn">
                <div className="description_content">
                  <button
                    //   onClick={() => readNow(bookDetails?.original_ebook)}
                    className="read_btn"
                  >
                    <Link to="#">
                      <i className="fas fa-bolt"></i>
                      <span>Buy now</span>
                    </Link>
                  </button>
                  <button className="Save_btn">
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
        {/* Related-Books */}

        <div className="Otherbook_Wrapper Related_Book_Wrapper">
          <div className="Otherbook-Heading">
            <h2>Related Books</h2>
          </div>
          <div className="Grid_Carousel_wrp">
            {/* {booklist.length > 0 &&
              booklist?.map(ele => ( */}
            {[...Array(4).keys()].map(index => (
              <div key={index} className="Grid-item">
                <Link to="#">
                  <figure>
                    <img src={book} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>Title{/* {ele.title_and_author.title} */}</h3>
                    <strong>
                      {/* {ele.title_and_author.authors} */}Mahesh max
                    </strong>
                  </figcaption>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* end-here--Other-Books */}
      </div>
      <Footer />
    </section>
  );
};
