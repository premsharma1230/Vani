import React from "react";
import Classes from "./_preFooter.module.scss";

export default function Prefooter() {
  return (
    <div className={Classes.areaMain}>
      <div>
        <div className={Classes.ContentArea}>
          <div className={Classes.subs}>
            <h6>
              Subscribe to our NewsLetter &nbsp;&nbsp;&nbsp;{" "}
              <span>_______</span>
            </h6>
            <h3>Lets Stay In Touch</h3>
          </div>
          <div className={Classes.FormArea}>
            <input type="email" name="email" placeholder="Enter Your Email" />
            <button>Subscribe Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
