import React, { useEffect, useState } from "react";
import { Footer } from "../Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { getAddressList } from "../../api/api";

export const Address = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    getAddressList(token).then(e => {
      setAddressData(e?.results);
    });
  }, []);

  const handleEditAddress = editAddress => {
    navigate("/AddAddress", { state: { Edit: editAddress } });
  };

  return (
    <section className=" Description_wrapper Wishlist_Wrapper Cart_Wrapper Address_Wrapper">
      <div className="container">
        <div className="Whishlist_header Address_header">
          <h2>
            {location?.state?.saved === "saved"
              ? "Saved Addresses"
              : "Shipping Address"}
          </h2>
          <div className="Add-Address">
            <button onClick={() => navigate("/AddAddress")}>
              + Add New Address
            </button>
          </div>
        </div>
        <div className="Address_Content ">
          <div className="Address_Main_list">
            {addressData &&
              addressData.map((elem, index) => (
                <div key={index} className="Address-list">
                  <div className="Address-RH">
                    <label>
                      <input type="radio" />{" "}
                    </label>
                    <h2 style={{ textTransform: "capitalize" }}>
                      {elem?.address_type}{" "}
                    </h2>
                  </div>
                  <div className="Address-Full">
                    <p>
                      {`${elem?.first_name} ${elem?.last_name}`} <br />
                      {elem?.address_line_1}
                      <br />
                      {elem?.address_line_2}
                      <br />
                      {elem?.city} <br />
                      {elem?.state} <br />
                      {elem?.pin}
                      <br />
                      {elem?.country}
                    </p>
                    {location?.state?.saved === "saved" ? (
                      <button onClick={() => handleEditAddress(elem)}>
                        Edit this Address
                      </button>
                    ) : (
                      <button onClick={() => navigate("/Billing")}>
                        Ship to this Address
                      </button>
                    )}
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
