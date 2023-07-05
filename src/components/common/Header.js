import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
      <NavLink to="/" style={linkStyle} activeStyle={specialLinkStyle}>
        Home
      </NavLink>
      <NavLink to="/state" style={linkStyle} activeStyle={specialLinkStyle}>
        State
      </NavLink>
      <NavLink to="/users" style={linkStyle} activeStyle={specialLinkStyle}>
        Users
      </NavLink>
      {isAuthenticated ? (
        <>
          <NavLink to="/posts" style={linkStyle} activestyle={specialLinkStyle}>
            Posts
          </NavLink>
          <NavLink
            to="/basket"
            style={linkStyle}
            activeStyle={specialLinkStyle}
          >
            Basket
          </NavLink>
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
