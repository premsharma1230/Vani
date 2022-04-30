import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTranslate } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Classes from "./_appNavigation.module.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function ApplicationArea() {
  const CartCount = JSON.parse(sessionStorage.getItem("CartItems"));
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  return (
    <>
      <div className={Classes.iconArea}>
        <ul className="Search_Wrp">
          <li>
            <input type="text" placeholder="search..." />
          </li>
          <li>
            <Link to="/Account">
              <BsPerson />
            </Link>
          </li>
          <li className="CartMain_Wrapper cartTop">
            <Link to="/Cart" className="">
              <HiOutlineShoppingCart />
              <span className="CartCounter">
                {CartCount}
                {changeTheNumber}
              </span>
            </Link>
          </li>
          <li>
            <RiTranslate />
          </li>
        </ul>
      </div>
      {/* <div className={Classes.responseIcon}>
        <ul>
          <li>
            <BsPerson />
          </li>
          <li>
            <RiTranslate />
          </li>
        </ul>
      </div> */}
    </>
  );
}
