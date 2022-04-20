import React, { useState } from "react";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCartList, RemoveCart } from "../../api/api";

export const Cart = () => {
  const [count, setCount] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [allCartList, setAllCartList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  let navigate = useNavigate();

  const handelIncrement = (e, q, i) => {
    if (q != 1) {
      let realPrice = e / q;
      let value = q + 1;
      const current = realPrice * value;
      setCount(value);
      setNewPrice(current);
    } else {
      const realPrice = e;
      let value = q + 1;
      const current = realPrice * value;
      setCount(value);
      setNewPrice(current);
    }

    setSelectedIndex(i);
  };
  const handelDecrement = (e, q, i) => {
    if (count > 0) {
      if (q != 1) {
        let realPrice = e / q;
        let value = q - 1;
        const current = realPrice * value;
        setCount(value);
        setNewPrice(current);
      } else {
        const realPrice = e;
        let value = q - 1;
        const current = realPrice * value;
        setCount(value);
        setNewPrice(current);
      }
    }
    setSelectedIndex(i);
  };
  useEffect(() => {
    GetAllCartList();
  }, []);

  const GetAllCartList = () => {
    getCartList().then(ele => {
      setAllCartList(ele?.data);
      // console.log(ele, "+++++++++++++datadatadatadata");
      setTotalAmount(ele?.total_sum);
    });
  };

  const handleRemove = (cart, book) => {
    console.log(cart, book, "Submit+++++++++++++++++++");
    console.log(cart, book, "Submit+++++++++++++++++++");
    const body = {
      cart_id: cart,
      book_id: book, //elem?.book_details?.book_id,
    };

    RemoveCart(body).then(elem => {
      GetAllCartList();
      console.log(elem, "Click+++++++++++++++++++");
    });
  };

  console.log(allCartList, "allCartList+++++++++++++++");

  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper Cart_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Cart</h2>
          </div>
          <div className="Wishlist_content Cart_Content">
            {allCartList &&
              allCartList.length > 0 &&
              allCartList.map((ele, index) => (
                <div key={index} className="Cart_Grid_Wrapper">
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
                      <h2>{ele?.book_details?.title}</h2>
                      {ele?.book_details?.authors &&
                      ele?.book_details?.authors.length > 0 ? (
                        ele?.book_details?.authors.map((author, index) => (
                          <h4 key={index}>Author : {author}</h4>
                        ))
                      ) : (
                        <h4>Author : </h4>
                      )}
                      <h5>ISBN : {ele?.book_details?.isbn_code}</h5>
                    </div>
                  </div>
                  <div className="Cart_right">
                    <div className="Counter_Number">
                      <div className="count_Increment">
                        <button onClick={() => handelIncrement(ele)}>+</button>
                      </div>
                      <div className="Counter_print">
                        {/* {selectedIndex == index ?
                          <p>{count}</p>
                        : */}
                        <p>{ele?.quantity}</p>
                        {/* } */}
                      </div>{" "}
                      <div className="count_btn">
                        <button onClick={() => handelDecrement(ele)}>-</button>
                      </div>
                    </div>
                    <div className="cart_remove">
                      <button
                        onClick={() => handleRemove(ele?.cart, ele?.book)}
                      >
                        <span>Remove</span>
                      </button>
                    </div>
                    <div className="Cart_Price">
                      <h3>₹ {ele?.amount}</h3>
                    </div>
                  </div>
                </div>
              ))}
            {/* total */}
            <div className="Grand_Total">
              <ul className="Total-content">
                <li className="Total-text">Total</li>
                <li className="Total-number">₹ {totalAmount}</li>
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
