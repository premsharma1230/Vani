import React, { useState } from "react";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export const Order = () => {
  let navigate = useNavigate();

  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper Cart_Wrapper Order_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Order</h2>
          </div>
          <div className="Wishlist_content Cart_Content Order_Content">
            {[...Array(2).keys()].map(index => (
              <div className="Cart_Grid_Wrapper">
                <div className="Cart_Left">
                  <div className="Cart_img">
                    <figure>
                      <img src={book} alt="cart" />
                    </figure>
                  </div>
                  <div className="About_Cart">
                    <h2>The Psychology of Money</h2>
                    <h4>Author : Morgan Housel</h4>
                    <h5>ISBN : 123456789</h5>
                  </div>
                </div>
                <div className="Cart_right">
                  <div className="order_number">
                    <span>1</span>
                  </div>
                  <div className="Delivered_Wrp">
                    <h4>Delivered</h4>
                    <span>
                      <i className="fas fa-check-circle check-Success"></i>
                    </span>
                  </div>
                  <div className="Cart_Price">
                    <h3>₹ 300</h3>
                  </div>
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
