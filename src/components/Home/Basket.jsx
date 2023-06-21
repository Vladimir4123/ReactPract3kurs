import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, clearBasket } from "../store/basketSlice";

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
      <Link to="/state" style={linkStyle}>
        State
      </Link>
      <Link to="/basket" style={specialLinkStyle}>
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

function Basket() {
  const basketItems = useSelector((state) => state.basket);
  const dispatch = useDispatch();

  const handleRemoveFromBasket = (itemId) => {
    dispatch(removeFromBasket(itemId));
  };

  const handleClearBasket = () => {
    dispatch(clearBasket());
  };
  return (
    <div>
      <Header />
      <div>
        <h2>Корзина</h2>
        {basketItems.length === 0 ? (
          <p>Ваша корзина пуста.</p>
        ) : (
          <div>
            <button onClick={handleClearBasket}>Очистить корзину</button>
            <ul>
              {basketItems.map((item) => (
                <li key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <span>{item.title}</span> - {item.price}$ ({item.count})
                  <button onClick={() => handleRemoveFromBasket(item.id)}>
                    Удалить
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Basket;
