import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { logout } from "../store/authSlice";

function Header() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const isAuthenticated = auth.isAuthenticated;

  const handleLogout = () => {
    dispatch(logout());
  };

  const headerStyle = {
    backgroundColor: "black",
    padding: "20px",
    textAlign: "center",
    color: "white",
  };
  const linkStyle = {
    fontStyle: "sans-sefif",
    marginRight: "20px",
    color: "white",
    textDecoration: "none",
  };
  const specialLinkStyle = {
    fontStyle: "sans-sefif",
    color: "red",
    fontWeight: "bold",
    marginRight: "10px",
  };
  const logoutButtonStyle = {
    fontSize: "18px",
    fontWeight: "normal",
    marginLeft: "20px",
    padding: "8px 16px",
    backgroundColor: "orange",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  };
  return (
    <header style={headerStyle}>
      <h1>BVN</h1>
      <Link to="/" style={linkStyle} activeStyle={specialLinkStyle}>
        Home
      </Link>
      <Link to="/state" style={linkStyle} activeStyle={specialLinkStyle}>
        State
      </Link>
      <Link to="/users" style={linkStyle} activeStyle={specialLinkStyle}>
        Users
      </Link>
      {isAuthenticated ? (
        <>
          <Link to="/basket" style={linkStyle} activeStyle={specialLinkStyle}>
            Basket
          </Link>
          <NavLink
            to="/profile"
            style={linkStyle}
            activestyle={specialLinkStyle}
          >
            Profile
          </NavLink>
          <button
            onClick={handleLogout}
            style={logoutButtonStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "red")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "black")}
          >
            Exit
          </button>
        </>
      ) : (
        <NavLink to="/login" style={linkStyle} activestyle={specialLinkStyle}>
          Enter
        </NavLink>
      )}
    </header>
  );
}
export default Header;
