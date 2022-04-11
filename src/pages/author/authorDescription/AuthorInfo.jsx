import React from "react";
import { Link } from "react-router-dom";
import book from "../../../assets/book3.png";

export const AuthorInfo = (props) => {
  return (
    <>
      {props?.bookInfoReleted?.map((ele, index) => (
        <div key={index} className="AuthInfo_Wrapper">
          <div className="AuthInfo_Content">
            <ul>
              <li>
                <img src={book} alt="book" />
              </li>
              <li>
                <div className="Auth-mid-content">
                  <h2> {ele?.title}</h2>
                  <span className="Star_wrp">
                    {[...Array(ele?.book_reviews?.avg != 0 ? ele?.book_reviews?.avg : 1).keys()].map(index => (
                      <i className="fas fa-star star-item"></i>
                    ))}
                  </span>
                  <strong>{ele?.ebook_details?.epub?.original_price}</strong>
                  <p>
                    {ele?.description} <a href="#">Learn More...</a>
                  </p>
                </div>
              </li>
              <li>
                <div className="AuthInfo_Cart_Btn">
                  <button className="read_btn cart-btn">
                    <Link to="#">
                      <i className="fas fa-bolt"></i>
                      <span>Buy now</span>
                    </Link>
                  </button>
                  <button className="Save_btn cart-btn">
                    <Link to="#">
                      <i className="fas fa-cart-plus"></i>
                      <span>add to cart</span>
                    </Link>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};
