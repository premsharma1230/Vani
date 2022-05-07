import React, { useState } from "react";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";
import { Link, useNavigate } from "react-router-dom";

export const PersonalDetail = () => {
  let navigate = useNavigate();
  const userData = JSON.parse(sessionStorage?.getItem("LoginData"))
  const LoginUserData = JSON.parse(sessionStorage?.getItem("LoginUserData"))
  return (
    <>
      <section className=" Description_wrapper Wishlist_Wrapper PersonalDetail_Wrapper">
        <div className="container">
          <div className="Whishlist_header">
            <h2>Personal Details</h2>
          </div>
          <div className="Wishlist_content  PersonalDetail_Content">
            <div className="Personal_Form">
              <ul>
                <li>
                  <h3>{LoginUserData?.firstName}{"  "}{LoginUserData?.lastName}</h3>
                  <span>
                    <i className="fas fa-user-circle icon"></i> lorem Doe
                  </span>
                </li>
                <li>
                  <h3>Email Address</h3>
                  <span>
                    <i className="fas fa-envelope icon"></i> {userData?.email}
                  </span>
                </li>
                <li>
                  <h3> Address</h3>
                  <span>
                    <i className="fas fa-phone-alt icon"></i> lorem@gmail.com
                  </span>
                </li>
                <li className="Button">
                  <button onClick={() => navigate("/PersonalEdit")}>
                    Edit info
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};
