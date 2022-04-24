import React, { useEffect, useState } from "react";
import { cartFinalCheckout, getVoucherDiscount } from "../../api/api";
import book from "../../assets/book3.png";
import { Footer } from "../Footer/Footer";


export const Billing = () => {
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const selectedAddress = JSON.parse(sessionStorage?.getItem("SelectedAddress"));
  const CheckoutItems = JSON.parse(sessionStorage?.getItem("Checkout1Data"));
  const [applyCode, setApplyCode] = useState('')
  const [totalCost, setTotalCost] = useState(0)
  const [discountCost, setDiscountCost] = useState(0)

  const handleFinalCheckout = () => {
    const formData = new FormData();
    formData.append("cart_id", CheckoutItems?.data?.[0].cart);
    formData.append("voucher_code", "oYMWis0ua0BGyyq5Sa7C");
    formData.append("address_id", selectedAddress?.id);
    const body = {
      "cart_id": CheckoutItems?.data?.[0].cart,
      "voucher_code" : "oYMWis0ua0BGyyq5Sa7C",
      "address_id" : selectedAddress?.id
    }
    console.log(body, "+++++++++++++++++++++++++++body++++++++++++++++++++++++++++++++++++")
    console.log(formData, "+++++++++++++++++++++++++++formData++++++++++++++++++++++++++++++++++++")
    console.log( CheckoutItems?.data?.[0].cart, "+++++++++++++++++++++++++++ CheckoutItems?.data?.[0].cart++++++++++++++++++++++++++++++++++++")
    console.log(selectedAddress?.id, "+++++++++++++++++++++++++++selectedAddress?.id++++++++++++++++++++++++++++++++++++")
    cartFinalCheckout(body, token).then((ele) => {
      console.log(ele,"eleeleeleele++++____________++++++________________")
    })
  }
  useEffect(() => {
    setTotalCost(CheckoutItems?.total_sum)
  }, [totalCost])
  const handleApplyPromocode = () => {
    const body = {
      cart_id: CheckoutItems?.data?.[0].cart,
      voucher_code: discountCost
    }
    getVoucherDiscount(body, token).then((value) => {
    })
  }
  const handleApplyCode = (e) => {
    setApplyCode(e?.target?.value)
  }
  const GetTotalCost = () => {
    let finalTotalCost
    if(discountCost !== 0){
      finalTotalCost = totalCost - discountCost;
    }else{
      finalTotalCost = totalCost
    }
    return finalTotalCost;
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
              {`${selectedAddress?.first_name} ${selectedAddress?.last_name}`} <br />
              {selectedAddress?.address_line_1}
              <br />
              {selectedAddress?.address_line_2}
              <br />
              {selectedAddress?.city} <br />
              {selectedAddress?.state} <br />
              {selectedAddress?.pin}
              <br />
              {selectedAddress?.country}
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
            {CheckoutItems && CheckoutItems?.data?.map((ele,index) => (
              <ul key={index} className="billing-right_Content">
                <li>
                  <img src={book} alt="book" />
                </li>
                <li>
                  <h3>{ele?.book_details?.title}</h3>
                  {ele?.book_details?.authors?.map((auth,index) =>
                  <p key={index}>Author : {auth}</p>
                  )}
                  <p>ISBN : {ele?.book_details?.isbn_code}</p>
                </li>
                <li>
                  <h6>₹ {ele?.amount}</h6>
                </li>
              </ul>
            ))}
            <div className="Grand_Total">
              <ul className="Total-content">
                <li className="Total-text">Subtotal</li>
                <li className="Total-number">₹ {totalCost}</li>
              </ul>
              <ul className="Total-content Discount">
                <li className="Total-text">Discount</li>
                <li className="Total-number">₹ {discountCost}</li>
              </ul>
              <ul className="Total-content">
                <li className="Total-text">Total</li>
                <li className="Total-number">₹ {GetTotalCost()}</li>
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
