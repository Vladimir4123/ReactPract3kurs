import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";

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
      <Link to="/" style={specialLinkStyle}>
        Home
      </Link>
      <Link to="/state" style={linkStyle}>
        State
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

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts);
  }, [dispatch]);

  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productStyle = {
    width: "200px",
    margin: "10px",
  };

  const productTitleStyle = {
    fontWeight: "bold",
  };

  const productImageStyle = {
    width: "100%",
    height: "auto",
  };

  return (
    <div>
      <Header />
      <div style={productContainerStyle}>
        {products.map((item) => (
          <div key={item.id} style={productStyle}>
            <p style={productTitleStyle}>Товар: {item.title}</p>
            <p>Цена: {item.price}</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
