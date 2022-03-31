import React, { useState } from "react";
import Classes from "./_bookShowcase.module.scss";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { AiFillThunderbolt } from "react-icons/ai";

export default function BookShowcase() {
  const [count, setCount] = useState(0);

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
      <div className={Classes.FlexContainer}>
        <div className={Classes.BookImageContainer}>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/I/513w8Py4UQL._SX342_SY445_QL70_ML2_.jpg"
            alt="book name"
          />
          <div className={Classes.ImageCollection}>
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/513w8Py4UQL._SX342_SY445_QL70_ML2_.jpg"
              alt="book name"
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/513w8Py4UQL._SX342_SY445_QL70_ML2_.jpg"
              alt="book name"
            />
            <img
              src="https://images-eu.ssl-images-amazon.com/images/I/513w8Py4UQL._SX342_SY445_QL70_ML2_.jpg"
              alt="book name"
            />
          </div>
        </div>
        <div className={Classes.InfoContainer}>
          <div className={Classes.TitelArea}>
            <h1>Ki Yaad Jo Karen Sabhi</h1>
            <h3>
              By <u>RAJNI GUPTA</u>
            </h3>
          </div>

          <p>stars &nbsp; &nbsp;&nbsp; 3,028 ratings</p>
          <div className={Classes.Format}>
            <h6>Format</h6>
          </div>
          <div className={Classes.Details}>
            <ul>
              <li>
                <span>ISBN : </span>
                <span className={Classes.isbn}>12345678914</span>
              </li>
              <li>
                <span>Pages : </span>200
              </li>
              <li>
                <span>Publication Date : </span> 21 October,2021
              </li>
              <li>
                <span>Language : </span> Hindi
              </li>
              <li>
                <span>Gener : </span> Nationalism, Freedom
              </li>
            </ul>
          </div>
          <div className={Classes.AreaPrice}>
            <div className={Classes.price}>₹&nbsp;399</div>
            <div className={Classes.counter}>
              <ul>
                <li>
                  <button className={Classes.add} onClick={handelIncrement}>
                    +
                  </button>
                </li>
                <li className={Classes.quantity}>{count}</li>
                <li>
                  <button className={Classes.remove} onClick={handelDecrement}>
                    -
                  </button>
                </li>
              </ul>
            </div>
            <div className={Classes.buttons}>
              <button className={Classes.buyNow}>
                {" "}
                <AiFillThunderbolt className={Classes.Lighntning} /> BUY NOW
              </button>
              <button className={Classes.cartButton}>
                {" "}
                <HiOutlineShoppingCart className={Classes.cart} /> ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
