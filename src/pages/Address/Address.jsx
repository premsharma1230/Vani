import React from "react";
import { Footer } from "../Footer/Footer";
import { useNavigate } from "react-router-dom";

export const Address = () => {
  let navigate = useNavigate();
  return (
    <section className=" Description_wrapper Wishlist_Wrapper Cart_Wrapper Address_Wrapper">
      <div className="container">
        <div className="Whishlist_header Address_header">
          <h2>Cart</h2>
          <div className="Add-Address">
            <button onClick={() => navigate("/AddAddress")}>
              + Add New Address
            </button>
          </div>
        </div>
        <div className="Address_Content ">
          <div className="Address_Main_list">
            {[...Array(3).keys()].map(index => (
              <div key={index} className="Address-list">
                <div className="Address-RH">
                  <label>
                    <input type="radio" />{" "}
                  </label>
                  <h2>Home</h2>
                </div>
                <div className="Address-Full">
                  <p>
                    Mr Satyam Mishra <br />
                    258, SHANKAR MARG, <br />
                    GALI NO-3, MANDAWALI, DELHI - 92 <br />
                    Delhi <br />
                    Delhi <br />
                    110092 <br />
                    India
                  </p>
                  <button onClick={() => navigate("/Billing")}>
                    Ship to this Address
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
