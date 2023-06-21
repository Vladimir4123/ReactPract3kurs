import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import State from "./components/Home/State.jsx";
import { Provider } from "react-redux";
import store from "./components/store/store.js";
import Basket from "./components/Home/Basket.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state" element={<State />} />
            <Route path="/basket" element={<Basket />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
