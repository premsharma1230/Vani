import React, { useContext } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTranslate } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Classes from "./_appNavigation.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { globleSearchData } from "../../actions";

export default function ApplicationArea() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const handleSearch = e => {
    dispatch(globleSearchData(e?.target?.value));
    navigate("/BookList");
  };
  return (
    <>
      <div className={Classes.iconArea}>
        <ul className="Search_Wrp">
          <li>
            <input
              type="text"
              placeholder="search..."
              onChange={handleSearch}
            />
          </li>
          <li>
            <Link to="/Account">
              <BsPerson />
            </Link>
          </li>
          <li className="CartMain_Wrapper cartTop">
            <Link to="/Cart" className="">
              <HiOutlineShoppingCart />
              <span className="CartCounter">{changeTheNumber}</span>
            </Link>
          </li>
          <li>
            <RiTranslate />
          </li>
        </ul>
      </div>
    </>
  );
}
