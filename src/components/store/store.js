import { configureStore } from "@reduxjs/toolkit";
import productsReducer, { fetchProducts } from "./productsSlice";
import basketReducer from "./basketSlice";
import productDetailsReducer from "./productDetailsSlice";
import authReducer from "./authSlice";
import postsReducer from "./postsSlice";
import usersReducer from "./usersSlice";
import commentsReducer from "./commentsSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    basket: basketReducer,
    productDetails: productDetailsReducer,
    auth: authReducer,
    posts: postsReducer,
    users: usersReducer,
    comments: commentsReducer,
  },
});

store.dispatch(fetchProducts());

export default store;
