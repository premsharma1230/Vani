import React, { useState } from "react";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  cardIdMerge,
  cartCheckout,
  CreateCart,
  getCartList,
  RemoveCart,
} from "../../api/api";
import { incNumber, Redirection } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

export const Cart = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const cartId = JSON.parse(sessionStorage?.getItem("cartIdLocal"));
  const cartIdWithToken = JSON.parse(
    sessionStorage?.getItem("cartIdWithToken")
  );
  const [count, setCount] = useState(0);
  const [newPrice, setNewPrice] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [allCartList, setAllCartList] = useState([]);
  const [idList, setIdList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [checkoutTrue, setCheckoutTrue] = useState(false);


  console.log(cartId, "cartId++++++++++++++++++++++++++++++")
  console.log(cartIdWithToken, "cartIdWithToken++++++++++++++++++")
  // const handelIncrement = (e, q, i) => {
  //   if (q != 1) {
  //     let realPrice = e / q;
  //     let value = q + 1;
  //     const current = realPrice * value;
  //     setCount(value);
  //     setNewPrice(current);
  //   } else {
  //     const realPrice = e;
  //     let value = q + 1;
  //     const current = realPrice * value;
  //     setCount(value);
  //     setNewPrice(current);
  //   }

  //   setSelectedIndex(i);
  // };
  const handelIncrement = e => {
    let realPrice = Number(e?.amount) / Number(e?.quantity);
    const isAvaible = idList.find(f => f === e.id)
    let value = e?.quantity + 1;
    const body = {
      cart_id: e?.cart,
      book_id: e?.book,
      quantity: value,
    };
    CreateCart(body, token).then(elem => {
      if (elem?.status) {
        if (isAvaible) {
          // const sendValue = elem?.data.find(f => f.id === e.id)
          const current = count + Number(realPrice);
          handleCheckbox("Increment", current)
        }
      }
      GetAllCartList();
    });
  };
  const handelDecrement = e => {
    let realPrice = Number(e?.amount) / Number(e?.quantity);
    const isAvaible = idList.find(f => f === e.id)
    let value = e?.quantity - 1;
    const body = {
      cart_id: e?.cart,
      book_id: e?.book,
      quantity: value,
    };
    CreateCart(body, token).then(elem => {
      if (elem?.status) {
        if (isAvaible) {
          // const sendValue = elem?.data.find(f => f.id === e.id)
          const current = count - Number(realPrice);
          handleCheckbox("Decrement", current)
        }
      }
      GetAllCartList();
    });
  };
  // const handelDecrement = (e, q, i) => {
  //   if (count > 0) {
  //     if (q != 1) {
  //       let realPrice = e / q;
  //       let value = q - 1;
  //       const current = realPrice * value;
  //       setCount(value);
  //       setNewPrice(current);
  //     } else {
  //       const realPrice = e;
  //       let value = q - 1;
  //       const current = realPrice * value;
  //       setCount(value);
  //       setNewPrice(current);
  //     }
  //   }
  //   setSelectedIndex(i);
  // };
  useEffect(() => {
    cartIdMergerApiCall();
  }, []);
  const cartIdMergerApiCall = () => {
    if (token) {
      const body = {
        cart_one: cartId,
        cart_two: cartIdWithToken,
      };
      cardIdMerge(body, token).then(ele => {
        GetAllCartList();
      });
    } else {
      dispatch(Redirection("/Cart"));
      navigate("/Login");
    }
  };
  const GetAllCartList = () => {
    getCartList(token).then(ele => {
      setAllCartList(ele?.data);
      dispatch(incNumber(ele?.count));
      setTotalAmount(ele?.total_sum);
    });
  };

  const handleRemove = e => {
    if (count !== 0) {
      const realAmount = count - Number(e?.amount);
      setCount(realAmount);
    }
    const body = {
      cart_id: e?.cart,
      book_id: e?.book,
    };
    if (token) {
      RemoveCart(body, token).then(elem => {
        dispatch(incNumber(elem?.count));
        GetAllCartList();
      });
    } else {
      dispatch(Redirection("/Cart"));
      navigate("/Login");
    }
  };

  const handleCheckout = () => {
    if (token) {
      const body = idList;
      if (body.length > 0) {
        cartCheckout(body, token).then(ele => {
          sessionStorage.setItem("Checkout1Data", JSON.stringify(ele));
          getCartList(token).then(ele => {
            dispatch(incNumber(ele?.count))
            navigate("/Address")
          });
        })
      }
    } else {
      dispatch(Redirection("/Cart"));
      navigate("/Login");
    }
  };
  const handleCheckbox = (e, item) => {
    setCheckoutTrue(true)
    if (e === "Increment") {
      setCount(item);
    } else if (e === "Decrement") {
      setCount(item);
    } else if (e === true) {
      setIdList(prev => [...prev, item.id]);
      let price = count + Number(item.amount);
      setCount(price);
    } else {
      const index = idList.findIndex(id => id === item.id);
      if (index !== -1) {
        setIdList([...idList.slice(0, index), ...idList.slice(index + 1)]);
      }
      let price = count - Number(item.amount);
      setCount(price);
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
            {allCartList &&
              allCartList.length > 0 &&
              allCartList.map((ele, index) => (
                <div key={index} className="Cart_Grid_Wrapper">
                  <div className="Cart_Left">
                    <div className="checkbox_Wrp">
                      <label>
                        <input
                          onChange={e => handleCheckbox(e?.target?.checked, ele)}
                          type="checkbox"
                        />
                      </label>
                    </div>
                    <div className="Cart_img">
                      <figure>
                        <img src={ele?.book_details?.image} alt="cart" />
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
                    {ele?.book_details?.category === "printed_book" ? (
                      <div className="Counter_Number">
                        <div className="count_Increment">
                          <button onClick={() => handelIncrement(ele)}>
                            +
                          </button>
                        </div>
                        <div className="Counter_print">
                          {/* {selectedIndex == index ?
                          <p>{count}</p>
                        : */}
                          <p>{ele?.quantity}</p>
                          {/* } */}
                        </div>{" "}
                        <div className="count_btn">
                          <button onClick={() => handelDecrement(ele)}>
                            -
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="Counter_Number">
                        <div className="count_Increment">
                          {/* <button onClick={() => handelIncrement(ele)}>+</button> */}
                        </div>
                        <div className="Counter_print">
                          {/* {selectedIndex == index ?
                        <p>{count}</p>
                      : */}
                          <p>{ele?.quantity}</p>
                          {/* } */}
                        </div>{" "}
                        <div className="count_btn">
                          {/* <button onClick={() => handelDecrement(ele)}>-</button> */}
                        </div>
                      </div>
                    )}
                    <div className="cart_remove">
                      <button onClick={() => handleRemove(ele)}>
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
            {checkoutTrue ?
              <div className="Grand_Total">
                <ul className="Total-content">
                  <li className="Total-text">Total</li>
                  <li className="Total-number">₹ {count}</li>
                </ul>

                <div className="button_wrp">
                  <button onClick={handleCheckout}>Checkout</button>
                </div>
              </div>
              : null
            }
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
