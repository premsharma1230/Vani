import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTranslate } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Classes from "./_appNavigation.module.scss";
import { Link } from "react-router-dom";

export default function ApplicationArea() {
  return (
    <>
      <div className={Classes.iconArea}>
        <ul>
          <li>
            <input type="text" placeholder="search..." />
          </li>
          <li>
            <Link to="/Account">
              <BsPerson />
            </Link>
          </li>
          <li>
            <Link to="/Cart">
              <HiOutlineShoppingCart />
            </Link>
          </li>
          <li>
            <RiTranslate />
          </li>
        </ul>
      </div>
      <div className={Classes.responseIcon}>
        <ul>
          <li>
            <BsPerson />
          </li>
          <li>
            <RiTranslate />
          </li>
        </ul>
      </div>
    </>
  );
}
