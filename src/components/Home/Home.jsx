import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productsSlice";
import { addToBasket } from "../store/basketSlice";

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
function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const productBasketStyle = {
    backgroundColor: "white",
    width: "200px",
    margin: "10px",
    border: "2px solid",
    padding: "10px",
    position: "relative",
  };

  const productTitleStyle = {
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const productPriceStyle = {
    marginBottom: "5px",
  };

  const productImageStyle = {
    width: "100%",
    height: "auto",
    borderRadius: "5px",
  };

  const addToBasketButtonStyle = {
    backgroundColor: "black",
    color: "white",
    border: "none",
    padding: "5px 10px",
    cursor: "pointer",
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
  };

  const handleAddToCart = (product) => {
    dispatch(addToBasket(product));
  };

  return (
    <div>
      <Header />
      <div style={productContainerStyle}>
        {products.map((item) => (
          <div key={item.id} style={productBasketStyle}>
            <p style={productTitleStyle}>Товар: {item.title}</p>
            <p style={productPriceStyle}>Цена: {item.price}$</p>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
            <button
              style={addToBasketButtonStyle}
              onClick={() => handleAddToCart(item)}
            >
              Добавить в корзину
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
