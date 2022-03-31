import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTranslate } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Classes from "./_appNavigation.module.scss";

export default function ApplicationArea() {
  return (
    <>
      <div className={Classes.iconArea}>
        <ul>
          <li>Search field</li>
          <li>
            <BsPerson />
          </li>
          <li>
            <HiOutlineShoppingCart />
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
