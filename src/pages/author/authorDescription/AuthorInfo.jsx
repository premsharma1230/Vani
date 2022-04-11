import React from "react";
import { Link } from "react-router-dom";
import book from "../../../assets/book3.png";

export const AuthorInfo = () => {
  return (
    <>
      {[...Array(4).keys()].map(index => (
        <div key={index} className="AuthInfo_Wrapper">
          <div className="AuthInfo_Content">
            <ul>
              <li>
                <img src={book} alt="book" />
              </li>
              <li>
                <div className="Auth-mid-content">
                  <h2>The Psychology of Money</h2>
                  <span className="Star_wrp">
                    {[...Array(4).keys()].map(index => (
                      <i className="fas fa-star star-item"></i>
                    ))}
                  </span>
                  <strong>₹ 399</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer etiam purus eget ullamcorper viverra nunc, morbi.
                    Eget ipsum elit laoreet elit facilisis neque pellentesque.
                    Faucibus quis eu, egestas velit. Bibendum quis condimentum
                    integer vitae fermentum. <a href="#">Learn More...</a>
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
