import "./App.css";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import React from "react";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import NoutFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import FullPizza from "./Pages/FullPizza";

export const SearchContext = React.createContext("");

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />

        <div className="content ">
          <Routes>
            <Route path="/pizza" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/pizza/:id" element={<FullPizza />} />
            <Route path="*" element={<NoutFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
