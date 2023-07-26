import "./App.css";
import "./scss/app.scss";
import { Route, Routes } from "react-router-dom";
import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "./redux/slices/filterSlice";

import Header from "./Components/Header";
import Home from "./Pages/Home";
import NoutFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";

export const SearchContext = React.createContext("");

function App() {
  const [searcValue, setSerchValue] = React.useState("");

  // const count = useSelector((state) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <div className="wrapper">
        {/* <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button> */}

        <SearchContext.Provider value={{ searcValue, setSerchValue }}>
          <Header />

          <div className="content ">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NoutFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
