import React from "react";
import book from "../../assets/book3.png";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";

export const Wishlist = () => {
  return (
    <>
      <section className=" Description_wrapper   Wishlist_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Wishlist</h2>
          </div>
          <div className="Wishlist_content">
            {[...Array(2).keys()].map(index => (
              <div className="AuthInfo_Wrapper">
                <div className="AuthInfo_Content">
                  {[...Array(2).keys()].map(index => (
                    <ul key={index}>
                      <li>
                        <img src={book} alt="book" />
                      </li>
                      <li>
                        <div className="Auth-mid-content">
                          <h2>The Psychology of Money</h2>
                          <h4>Author : Morgan Housel</h4>
                          <h5>ISBN : 123456789</h5>
                          <span className="Star_wrp">
                            {[...Array(4).keys()].map(index => (
                              <i className="fas fa-star star-item"></i>
                            ))}
                          </span>
                          <strong>₹ 399</strong>
                        </div>
                      </li>
                      <li>
                        <div className="AuthInfo_Cart_Btn">
                          <button className="read_btn cart-btn">
                            <Link to="/Cart">
                              <span>Add to cart</span>
                            </Link>
                          </button>
                          <button className="Save_btn cart-btn">
                            <Link to="#">
                              <span>Remove</span>
                            </Link>
                          </button>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
