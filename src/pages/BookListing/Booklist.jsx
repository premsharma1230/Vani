import React from "react";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";
import book1 from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { PriceSlider } from "../BookListing/PriceSlider";

export const Booklist = () => {
  const Genre = [
    { name: "horror" },
    { name: "love" },
    { name: "drama" },
    { name: "suspense" },
    { name: "comedy" },
    { name: "thriller" },
  ];
  const categories = [
    { name: "print" },
    { name: "E book" },
    { name: "Audio book" },
  ];
  return (
    <>
      <section className="BookList_MainWrapper">
        <div className="Filter-Categories_Wrapper">
          <div className="Filter_Content_wrp">
            <div className="Category_Item1">
              <div className="category-heading">
                <h4>categories</h4>
              </div>
              <ul className="filter-catgry">
                {categories.map((elem, index) => (
                  <li key={index}>
                    <span>
                      <input
                        type="checkbox"
                        id="Print"
                        name="Print"
                        value="Bike"
                      />
                    </span>
                    <p>{elem?.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="Category_Item1">
              <div className="category-heading">
                <h4>genre</h4>
              </div>
              <ul className="filter-catgry">
                {Genre.map((elem, index) => (
                  <li key={index}>
                    <span>
                      <input
                        type="checkbox"
                        id="Print"
                        name="Print"
                        value="Bike"
                      />
                    </span>
                    <p>{elem?.name}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="PriceSlider_Wrp">
              <PriceSlider />
            </div>
          </div>
        </div>
        <div className="BookList_wrp">
          <div className="container">
            {" "}
            <div className="Category_Grid_Wrp">
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
              <div className="category_Grid_Content">
                {/* {bookList?.map((ele, index) => ( */}
                {[...Array(10).keys()].map(index => (
                  <div className="Grid-item" key={index}>
                    {/* onClick={() => goToBookDetailsPage(ele)} */}
                    <Link to={"/BookDescription"}>
                      <figure>
                        <img src={book1} alt="book" />
                        <div className="Cart_shop_wrp">
                          <div className="cart-content">
                            <span>
                              <i className="far fa-heart short-item1"></i>
                            </span>
                            <span>
                              <i className="fas fa-shopping-cart short-item1"></i>
                            </span>
                          </div>
                        </div>
                      </figure>
                    </Link>
                    <figcaption>
                      <h3>Title</h3>
                      <h4>Mohan Kishore</h4>
                      <span key={index} className="star_wrp">
                        {[...Array(4).keys()].map(index => (
                          <i className="fas fa-star star-item"></i>
                        ))}
                      </span>
                      <strong>₹ 300</strong>
                    </figcaption>
                  </div>
                ))}
              </div>
              <div className="Pagination_wrp">
                <Stack spacing={2}>
                  {/* page={page} */}
                  <Pagination count={10} />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
