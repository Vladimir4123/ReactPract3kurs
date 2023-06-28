import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket, clearBasket } from "../store/basketSlice";

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
  );
}

export default Basket;
