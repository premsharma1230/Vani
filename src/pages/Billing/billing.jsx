import React, { useEffect, useState } from "react";
import { cartFinalCheckout, getVoucherDiscount } from "../../api/api";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";

export const Billing = () => {

  const [applyCode, setApplyCode] = useState('')

  const handleFinalCheckout = () => {
    const body = {
      "cart_id": 1,
      "voucher_code": applyCode,
      "address_id": 1
    }
    cartFinalCheckout(body).then((ele) => {
console.log(ele)
    })
  }
  useEffect(() => {

  }, [])
  const handleApplyPromocode = () => {
    const body = {
      cart_id : 1,
      voucher_code : "oYMWis0ua0BGyyq5Sa7"
    }
    getVoucherDiscount(body).then((value) =>{
      console.log(value,"++++++++++++++++++++++++++++++++++++")
    })
  }
  const handleApplyCode = (e) => {
    setApplyCode(e?.target?.value)
  }
  return (
    <section className="Description_wrapper Wishlist_Wrapper Billing_Wrapper AddAddress_Wrapper">
      <div className="container">
        <div className="Whishlist_header Billing_header">
          <h2>Billing Details</h2>
        </div>
        <div className="Wishlist_content AddAddress_Content Billing_Content">
          <div className="billing-left">
            <div className="billing_head">
              <h2>Shipping To</h2>
            </div>
            <p>
              Mr Satyam Mishra <br /> 258, SHANKAR MARG, <br /> GALI NO-3,
              MANDAWALI, DELHI - 92 <br />
              Delhi <br />
              Delhi <br />
              110092 <br />
              India
            </p>
            <div className="PromoCode">
              <label>
                <input value={applyCode} onChange={handleApplyCode} type="text" placeholder="Enter your Promocode" />
              </label>
              <button onClick={handleApplyPromocode}>Apply Promocode</button>
            </div>
          </div>
          <div className="billing-right">
            <div className="billing_head">
              <h2>Summary</h2>
            </div>
            {[...Array(3).keys()].map(index => (
              <ul className="billing-right_Content">
                <li>
                  <img src={book} alt="book" />
                </li>
                <li>
                  <h3>The Psychology of Money</h3>
                  <p>Author : Morgan Housel</p>
                  <p>ISBN : 123456789</p>
                </li>
                <li>
                  <h6>₹ 300</h6>
                </li>
              </ul>
            ))}
            <div className="Grand_Total">
              <ul className="Total-content">
                <li className="Total-text">Subtotal</li>
                <li className="Total-number">₹ 900</li>
              </ul>
              <ul className="Total-content Discount">
                <li className="Total-text">Discount</li>
                <li className="Total-number">₹ 600</li>
              </ul>
              <ul className="Total-content">
                <li className="Total-text">Total</li>
                <li className="Total-number">₹ 800</li>
              </ul>
              <div className="button_wrp">
                <button onClick={handleFinalCheckout}>Proceed to Pay</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};
