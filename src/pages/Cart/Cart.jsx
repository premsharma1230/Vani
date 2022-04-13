import React, { useState } from "react";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {
  const [count, setCount] = useState(0);
  let navigate = useNavigate();

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
  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper Cart_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Cart</h2>
          </div>
          <div className="Wishlist_content Cart_Content">
            {[...Array(2).keys()].map(index => (
              <div className="Cart_Grid_Wrapper">
                <div className="Cart_Left">
                  <div className="checkbox_Wrp">
                    <label>
                      <input type="checkbox" />
                    </label>
                  </div>
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
                  <div className="cart_remove">
                    <button>
                      <span>Remove</span>
                    </button>
                  </div>
                  <div className="Cart_Price">
                    <h3>₹ 300</h3>
                  </div>
                </div>
              </div>
            ))}
            {/* total */}
            <div className="Grand_Total">
              <ul className="Total-content">
                <li className="Total-text">Total</li>
                <li className="Total-number">₹ 600</li>
              </ul>
              <div className="button_wrp">
                <button onClick={() => navigate("/Address")}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
