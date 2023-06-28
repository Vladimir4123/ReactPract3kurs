import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import State from "./components/Home/State.jsx";
import { Provider } from "react-redux";
import store from "./components/store/store.js";
import Basket from "./components/Home/Basket.jsx";
import Header from "./components/common/Header.js";
import Footer from "./components/common/Footer.js";
import ProductDetails from "./components/Home/ProductDetails.jsx";
import Login from "./components/Home/Login.jsx";
import Profile from "./components/Home/Profile.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state" element={<State />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/products/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
