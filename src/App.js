import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import State from "./components/Home/State.jsx";
import { Provider } from "react-redux";
import store from "./components/store/store.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/state" element={<State />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
