import React from "react";
import { Link, useNavigate } from "react-router-dom";
import order1 from "../../assets/order1.png";
import order2 from "../../assets/order2.png";
import order3 from "../../assets/order3.png";
import order4 from "../../assets/order4.png";
import { Footer } from "../Footer/Footer";

export const Account = props => {
  let navigate = useNavigate();

  function handleSavedAddress() {
    console.log("=================");
    navigate("/Address", {
      state: {
        saved: "saved",
      },
    });
  }

  return (
    <section className=" Description_wrapper Wishlist_Wrapper  Cart_Wrapper Address_Wrapper Account_Wrapper">
      <div className="container">
        <div className="Whishlist_header">
          <h2>Account</h2>
        </div>
        <div className="Account_Content">
          <ul>
            <Link to="/Order">
              <li className="account_item1">
                <figure>
                  <img src={order1} lalt="img" />
                </figure>
                <figcaption>
                  <h3>Your Orders</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    enim lectus tortor nisi.
                  </p>
                </figcaption>
              </li>
            </Link>
            <Link to="/PersonalDetail">
              <li className="account_item2">
                <figure>
                  <img src={order2} lalt="img" />
                </figure>
                <figcaption>
                  <h3>Personal Information</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    enim lectus tortor nisi.
                  </p>
                </figcaption>
              </li>
            </Link>

            <div onClick={handleSavedAddress}>
              <li className="account_item3">
                <figure>
                  <img src={order3} lalt="img" />
                </figure>
                <figcaption>
                  <h3>Saved Addresses</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    enim lectus tortor nisi.
                  </p>
                </figcaption>
              </li>
            </div>
            <Link to="/ChangePassword">
              <li className="account_item4">
                <figure>
                  <img src={order4} lalt="img" />
                </figure>
                <figcaption>
                  <h3>Change Password</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                    enim lectus tortor nisi.
                  </p>
                </figcaption>
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
};
