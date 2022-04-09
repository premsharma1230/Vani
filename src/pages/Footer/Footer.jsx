import React from "react";

export const Footer = () => {
  return (
    <>
      <div className="Footer_Wrapper">
        <div className="container">
          <div className="Footer_Content">
            <div className="foot_item">
              <div className="Heading_wrp">
                <h2>Follow us On </h2>
              </div>
              <ul className="Follow_Wrp">
                <li className="Social_wrp">
                  <ul className="Social_Content">
                    <li>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">INFORMATION</a>
                </li>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#">get in touch</a>
                </li>
              </ul>
            </div>
            <div className="foot_item">
              <div className="Heading_wrp">
                <h2>Important links</h2>
              </div>
              <ul className="Important_Wrp">
                <li>
                  <a href="#">Return & refund policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">disclaimer policy</a>
                </li>
                <li>
                  <a href="#">cookies policy</a>
                </li>
              </ul>
            </div>
            <div className="foot_item">
              <div className="Heading_wrp">
                <h2>Stay in touch</h2>
              </div>
              <ul className="Important_Wrp">
                <li>
                  <a href="#">help@vaniprakashan.in</a>
                </li>
                <li>
                  <a href="#">customercare@vaniprakashan.in</a>
                </li>
                <li className="WhatsApp">
                  <a href="Tol:+91 98888 85858">
                    <i className="fab fa-whatsapp"></i>
                    <span> +91 98888 85858</span>
                  </a>
                </li>
                <li>
                  <a href="#">Monday - Saturday</a>
                </li>
                <li>
                  <a href="#">9:00 AM - 5:00 PM</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
