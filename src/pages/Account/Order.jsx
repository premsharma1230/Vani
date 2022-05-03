import React, { useState, useEffect } from "react";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";
import { getOrderList } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { Redirection } from "../../actions";
import Login from "../../pages/Login";
import Registeration from "../Registeration";

export const Order = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [allOrderList, setAllOrderList] = useState([]);
  const [loginModal, setLoginModal] = useState(false);
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const [loginFrom, setLoginFrom] = useState(false);
  const [newRegister, setNewRegister] = useState(false);
  useEffect(() => {
    if (token) {
      getOrderList(token).then(ele => {
        setAllOrderList(ele?.results);
      });
    } else {
      dispatch(Redirection("/Order"));
      // navigate("/Login");
      setLoginModal(!loginModal);
      setLoginFrom(true);
    }
  }, []);
  const handLogout = e => {
    setLoginModal(false);
  };

  const CloseRegistorModal = () => {
    setNewRegister(false);
  };

  const HandleLogin = () => {
    setLoginFrom(true);
  };

  const closedPage = () => {
    setLoginFrom(false);
    setNewRegister(true);
  };
  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper Cart_Wrapper Order_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Order</h2>
          </div>
          <div className="Wishlist_content Cart_Content Order_Content">
            {allOrderList &&
              allOrderList.length > 0 &&
              allOrderList?.map((ele, index) => (
                <div className="Cart_Grid_Wrapper">
                  <div className="Cart_Left">
                    <div className="Cart_img">
                      <figure>
                        <img src={book} alt="cart" />
                      </figure>
                    </div>
                    <div className="About_Cart">
                      <h2>{ele?.book_details?.title}</h2>
                      {ele?.book_details?.authors.length > 0 ? (
                        ele?.book_details?.authors.map((author, index) => (
                          <h4 key={index}>Author : {author}</h4>
                        ))
                      ) : (
                        <h4>Author : </h4>
                      )}
                      <h5>ISBN : {ele?.book_details?.isbn}</h5>
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
                      <h3>₹ {ele?.book_details?.price}</h3>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <Footer />
      </section>
      {loginFrom ? (
        <Login openPage={loginFrom} closedPage={closedPage} />
      ) : null}
      {newRegister ? (
        <Registeration
          openLogin={HandleLogin}
          openRegistationPage={newRegister}
          closeRegistration={CloseRegistorModal}
        />
      ) : null}
    </>
  );
};
