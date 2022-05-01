import React, { useEffect, useState } from "react";
import book from "../../assets/book3.png";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { createAndRemoveWishList, CreateCart, getCartList, getWishList } from "../../api/api";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, Redirection } from "../../actions";

export const Wishlist = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [wishListItems, setWishListItems] = useState([]);
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const cartId = JSON.parse(sessionStorage?.getItem("cartIdLocal"))
  const [cartIdWithToken, setCartIdWithToken] = React.useState('');

  useEffect(() => {
    if(!token && !cartId){
      getCartList().then(elem => {
        sessionStorage.setItem("cartIdLocal", JSON.stringify(elem?.cart_id));
    });
  }else{
    getCartList(token).then(elem => {
      setCartIdWithToken(elem?.cart_id)
  });
  }
  },[])
  useEffect(() => {
    getWishListFuncation();
  }, []);
  const getWishListFuncation = () => {
    if (token) {
      getWishList(token).then(ele => {
        setWishListItems(ele?.results);
      });
    } else {
      dispatch(Redirection("/Wishlist"));
      navigate("/Login");
    }
  };
  const handleRemove = e => {
    if (token) {
      createAndRemoveWishList(e, token).then(ele => {
        getWishListFuncation();
      });
    } else {
      dispatch(Redirection("/Wishlist"));
      navigate("/Login");
    }
  };
  const handleCart = e => {
    let body;
        if(!token){
          body = {
            cart_id: cartId,
            book_id: e?.book,
            quantity: 1,
          };
        }else{
          body = {
            cart_id: cartIdWithToken,
            book_id: e?.book,
            quantity: 1,
          };
        }
    CreateCart(body,token).then(elem => {
      dispatch(incNumber(elem?.count))
        navigate("/Cart");
    });
  }
  return (
    <>
      <section className=" Description_wrapper   Wishlist_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Wishlist</h2>
          </div>
          <div className="Wishlist_content">
            <div className="AuthInfo_Wrapper">
              {wishListItems &&
                wishListItems.length > 0 &&
                wishListItems?.map((ele, index) => (
                  <div key={index} className="AuthInfo_Content">
                    <ul>
                      <li>
                        <img src={book} alt="book" />
                      </li>
                      <li>
                        <div className="Auth-mid-content">
                          <h2>{ele?.book_details?.title}</h2>
                          {ele?.book_details?.authors.length > 0 ? (
                            ele?.book_details?.authors.map((author, index) => (
                              <h4 key={index}>Author : {author}</h4>
                            ))
                          ) : (
                            <h4>Author : </h4>
                          )}
                          <h5>ISBN : {ele?.book_details?.isbn}</h5>
                          <span className="Star_wrp">
                            {[...Array(4).keys()].map(index => (
                              <i className="fas fa-star star-item"></i>
                            ))}
                          </span>
                          <strong>₹ {ele?.book_details?.price}</strong>
                        </div>
                      </li>
                      <li>
                        <div className="AuthInfo_Cart_Btn">
                          <button
                         onClick={() => handleCart(ele)} 
                          className="read_btn cart-btn">
                            <Link to="#">
                              <span>Add to cart</span>
                            </Link>
                          </button>
                          <button
                            onClick={() => handleRemove(ele?.book_details?.id)}
                            className="Save_btn cart-btn"
                          >
                            <span>Remove</span>
                          </button>
                        </div>
                      </li>
                    </ul>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
