import React from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { RiTranslate } from "react-icons/ri";
import { BsPerson } from "react-icons/bs";
import Classes from "./_appNavigation.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { globleSearchData } from "../../actions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function ApplicationArea() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const SearchGlobleBook = useSelector(state => state.SearchGlobleBook);
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
              <MenuItem onClick={handleClose}>
                <Link to="/login">Logout</Link>
              </MenuItem>
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
