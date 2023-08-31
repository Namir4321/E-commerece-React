import React from "react";
import "./Navbar.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Language, Settings } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { logout } from "../../redux/apiCall";
import { persistor } from "../../redux/store";
import { useHistory } from "react-router-dom";
import { getCart } from "../../redux/apiCartRedux";
import { logoutcart } from "../../redux/cartRedux";
import { logoutuser } from "../../redux/userRedux";
const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const user = useSelector((state) => state.user.currentUser);
  const itemnumber = useSelector((state) => state.cart.quantity);
  const logoutClick = (e) => {
    dispatch(logoutuser())
    dispatch(logoutcart());
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.length > 0) {
      console.log("hii");
    }
    const url = `/products/${searchTerm}`;
    navigate(url);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3  d-flex align-items-center">
            <div className="col-1 d-none d-lg-block">
              <button
                style={{ backgroundColor: "transparent", border: "0px solid " }}
              >
                EN
              </button>
            </div>
            <div className="col-11 m-2 ">
              <form className="d-flex search-field" onSubmit={handleSearch}>
                <input
                  className="form-control form-control-search-box me-2"
                  style={{ borderRadius: "0px" }}
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {!searchTerm && (
                  <button
                    className="btn btn-search text-end"
                    onClick={handleSearch}
                    type="submit"
                  >
                    <SearchOutlinedIcon className="searchbutton" />
                  </button>
                )}
              </form>
            </div>
          </div>
          <div className="col-3 g-0 text-end d-flex">
            <div className="col-5  "></div>
            <div className="col-7 ">
              <h1>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Shop
                </Link>
              </h1>
            </div>
          </div>
          <div className="col-6 g-0 d-flex  space-between">
            {!user && (
             <>
             <div className="col-5 d-none d-lg-block"></div>
             <div
                className=" col-2  mt-2  text-align-center menuitem menuitem-reg"
                style={{ textAlignLast: "center", marginRight:"30px"}}
              >
                <Link
                  to="/register"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Register
                </Link>
              </div>
              </>
                          )}

            {!user && (
              <div
                className=" col-2 mt-2  menuitem "
                style={{ textAlignLast: "center" }}
              >
                <Link
                  to="/login"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Login
                </Link>
              </div>
            )}
            {user && (
              <>
              
                <div className="col-5 mt-2 justify-content-between g-0 d-none d-lg-block"></div>
               
                <div
                  className=" col-2 mt-2   menuitem menuitem-reg"
                  style={{ textAlignLast: "center" }}
                >
                  <Link
                    to="/orders"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Orders
                  </Link>
                </div>
               
                <div
                  className="col-2 mt-2   menuitem menuitem-reg"
                  onClick={logoutClick}
                  style={{ textAlignLast: "center" }}
                >
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Logout
                  </Link>
                </div>
               
              </>
            )}
            <div className="col-1 " style={{ textAlignLast: "end" ,marginLeft:"20px"}}>
              <h2>
                <Link
                  to="/cart"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Badge badgeContent={itemnumber || 0} color="primary">
                    <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
                  </Badge>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
