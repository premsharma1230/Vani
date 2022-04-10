import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import book from "../../assets/book2.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { GetBookDetails, GetReletdBookDetails } from "../../api/api";

export const BookDescription = () => {
  const book_slug = JSON.parse(sessionStorage.getItem("bookDetail")).slug;
  const [bookDetailsData,setBookDetailsData] = React.useState([])
  const [reletedBook,setReletedBook] = React.useState([])
  useEffect(() => {
    GetBookDetails(book_slug).then((e) =>{
      setBookDetailsData(e?.data)
    })
    GetReletdBookDetails(book_slug).then((e) =>{
      console.log(e,"fffffffffffffffffffffffffffffffffffffffffffff")
      setReletedBook(e?.results)
    })
  },[])

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
                  {bookDetailsData?.title}
                </h2>
                <h5>
                  By Max
                </h5>
              </div>
              <figcaption>
                <p>
                {bookDetailsData?.description}
                </p>
              </figcaption>
              <div className="About-book-detail">
                <ul className="book-list-left">
                  <li>
                    <span>ISBN :</span>
                    <strong>
                    {bookDetailsData?.isbn_code}
                    </strong>
                  </li>
                  <li>
                    <span>Pages : </span>
                    <strong>
                    {bookDetailsData?.ebook_details?.e_pub?.pages}
                    </strong>
                  </li>
                  <li>
                    <span>Publication Date : </span>
                    <strong>
                    {bookDetailsData?.publications_year}
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
                    {bookDetailsData?.genres?.map((g,index) =>
                    <strong key={index}>
                     {g}
                    </strong>
                    )}
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
            {reletedBook?.map((rel,index) => (
              <div key={index} className="Grid-item">
                <Link to="#">
                  <figure>
                    <img src={book} alt="book" />
                  </figure>
                  <figcaption>
                    <h3>{rel?.title}</h3>
                    <strong>
                      Mahesh max
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
