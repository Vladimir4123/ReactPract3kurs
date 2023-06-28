import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productsSlice";
import { addToBasket } from "../store/basketSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated);

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
    if (!isLoggedIn) {
      toast.error(
        "Вы должны быть авторизованы для добавления товара в корзину",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        }
      );
      return;
    }
    dispatch(addToBasket(product));
    toast.success("Товар добавлен в корзину!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
    });
  };

  return (
    <div style={productContainerStyle}>
      {products.map((item) => (
        <div key={item.id} style={productBasketStyle}>
          <Link to={`/products/${item.id}`} style={productTitleStyle}>
            {item.title}
          </Link>
          <p style={productPriceStyle}>Цена: {item.price}$</p>
          <Link to={`/products/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={productImageStyle}
            />
          </Link>

          <button
            style={addToBasketButtonStyle}
            onClick={() => handleAddToCart(item)}
          >
            Добавить в корзину
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
