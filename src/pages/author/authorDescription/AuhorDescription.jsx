import React, { useEffect, useState } from "react";
import book from "../../../assets/niya.png";
import { useLocation, Link, useNavigate, NavLink } from "react-router-dom";
import { Footer } from "../../Footer/Footer";

export const AuhorDescription = () => {
  return (
    <>
      <section className="Main_HomeWrapper Description_wrapper BookDesciption_Wrapper AuthorDescription_Wrapper">
        <div className="BookDescription_head">
          <div className="container">
            <div className="booklist_navigation">
              <ul className="BreadCumb ">
                <li>
                  <Link to="/">Home</Link> /
                </li>
                <li>
                  <Link to="/Author">Authors</Link>/
                </li>
                <li>
                  <Link to="#">Author Name</Link>
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
                <ul className="Social_Content">
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </figure>
            </div>
            <div className="Description_Right">
              <div className="About_Book">
                <div className="About-book-title">
                  <h2>
                    Author Name
                    {/* {bookDetailsData?.title} */}
                  </h2>
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
                      <p>1,002 reader’s ratings</p>
                    </div>
                  </div>
                  <div className="About-book-detail">
                    <ul className="book-list-left">
                      <li>
                        <span>Total Books Written :</span>
                        <strong>333</strong>
                      </li>
                      <li>
                        <span>First Publication : </span>
                        <strong>21 October, 2021</strong>
                      </li>
                      <li>
                        <span>Language :</span>
                        <strong>English</strong>
                      </li>
                    </ul>
                  </div>
                  <div className="Author_Detail">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Integer etiam purus eget ullamcorper viverra nunc, morbi.
                      Eget ipsum elit laoreet elit facilisis neque pellentesque.
                      Faucibus quis eu, egestas velit. Bibendum quis condimentum
                      integer vitae fermentum. Tempor adipiscing felis nisi
                      faucibus placerat rhoncus malesuada facilisis arcu.
                      Facilisi vel arcu morbi non netus est ipsum malesuada
                      maecenas. Eget fermentum, habitasse faucibus lorem tortor,
                      lorem sapien vitae faucibus. Vitae, mi nunc, vitae leo
                      nunc interdum fringilla urna. Semper lacus, in elit amet,
                      feugiat sem quam. Ut nisl duis sed enim enim aliquam
                      turpis elit. Dis fringilla adipiscing orci odio turpis
                      mattis at est.
                    </p>
                  </div>
                </figcaption>
              </div>
              <div className="Review_Form_Wrp">
                <form>
                  <div className="Review1">
                    <label>name *</label>
                    <span>
                      <input type="text" placeholder="" name="name" />
                    </span>
                  </div>
                  <div className="Review1">
                    <label>Rating *</label>
                    <span className="Star_wrp">
                      {[...Array(3).keys()].map(index => (
                        <i className="far fa-star star-item"></i>
                      ))}
                    </span>
                  </div>
                  <div className="Review1">
                    <label> </label>
                    <span>
                      <button
                        type="submit"
                        form="form1"
                        value="Submit"
                        id="Submit"
                      >
                        Submit Your Review
                      </button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="bookDes_Wrp">
            <div className="container">
              <div className="bookDes_Wrp_Content">
                <h2>More information About Author</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer etiam purus eget ullamcorper viverra nunc, morbi. Eget
                  ipsum elit laoreet elit facilisis neque pellentesque. Faucibus
                  quis eu, egestas velit. Bibendum quis condimentum integer
                  vitae fermentum. Tempor adipiscing felis nisi faucibus
                  placerat rhoncus malesuada facilisis arcu. Facilisi vel arcu
                  morbi non netus est ipsum malesuada maecenas. Eget fermentum,
                  habitasse faucibus lorem tortor, lorem sapien vitae faucibus.
                  Vitae, mi nunc, vitae leo nunc interdum fringilla urna. Semper
                  lacus, in elit amet, feugiat sem quam. Ut nisl duis sed enim
                  enim aliquam turpis elit. Dis fringilla adipiscing orci odio
                  turpis mattis at est.
                </p>
              </div>
            </div>
          </div>

          {/* Related-Books */}

          <div className="Otherbook_Wrapper Related_Book_Wrapper">
            <div className="Otherbook-Heading">
              <h2>More books by this Author</h2>
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
                      <h3>Title</h3>
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
        </div>
        <Footer />
      </section>
    </>
  );
};
