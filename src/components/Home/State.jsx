import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
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
    color: "white",
    fontWeight: "bold",
    border: "none",
    marginRight: "10px",
  };
  return (
    <header style={headerStyle}>
      <h1>BVN</h1>
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      <Link to="/state" style={specialLinkStyle}>
        State
      </Link>
      <Link to="/basket" style={linkStyle}>
        Basket
      </Link>
    </header>
  );
}
function Footer() {
  const footerStyle = {
    backgroundColor: "black",
    padding: "10px",
    textAlign: "center",
    color: "white",
  };

  return (
    <footer style={footerStyle}>
      <p>Все права защищены &copy; 2023</p>
    </footer>
  );
}
function State() {
  const [count, setCount] = useState(1);
  const stateStyle = {
    fontStyle: "sans-sefif",
    fontSize: "80px",
    padding: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    fontStyle: "sans-sefif",
    fontSize: "80px",
    padding: "10px 20px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
  };
  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <Header />
      <div style={stateStyle}>
        <button onClick={decrementCount} style={buttonStyle}>
          -
        </button>
        <p>{count}</p>
        <button onClick={incrementCount} style={buttonStyle}>
          +
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default State;
