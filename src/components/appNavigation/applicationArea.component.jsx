import React, { useState, useEffect } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTranslate } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Classes from "./_appNavigation.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { globleSearchData, UserIsLogin } from "../../actions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CreateCart } from "../../api/api";

export default function ApplicationArea() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const SearchGlobleBook = useSelector(state => state.SearchGlobleBook);
  const UserLoginTrue = useSelector(state => state.UserLogin);
  const token = JSON.parse(sessionStorage?.getItem("LoginData"))?.token;
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();
  let navigate = useNavigate();
  const changeTheNumber = useSelector(state => state.changeTheNumber);
  const handleSearch = e => {
    dispatch(globleSearchData(e?.target?.value));
    navigate("/BookList");
  };

  const handLogout = () => {
    sessionStorage.removeItem("LoginData");
    sessionStorage.removeItem("cartIdWithToken");
    dispatch(UserIsLogin(false));
    navigate("/");
  };
  console.log(UserLoginTrue, "*****************************");
  useEffect(() => {
    if (token) {
      dispatch(UserIsLogin(true));
    }
  }, []);
  return (
    <>
      <div className={Classes.iconArea}>
        <ul className="Search_Wrp">
          <li>
            <input
              type="text"
              placeholder="search..."
              onChange={handleSearch}
              value={SearchGlobleBook}
            />
          </li>
          <li className="Profile_Wrapper">
            <div
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <BsPerson />
            </div>

            <Menu
              id="basic-menu"
              className="Menu_Wrap"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/Account">Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={"/wishlist"}>Wishlist</Link>
              </MenuItem>
              {UserLoginTrue ? (
                <MenuItem onClick={handleClose}>
                  <div onClick={handLogout}>Logout</div>
                </MenuItem>
              ) : null}
            </Menu>
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
