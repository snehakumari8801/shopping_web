import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Men from "./components/Pages/Men";
import Women from "./components/Pages/Women";
import Electronics from "./components/Pages/Electronics";
import SignIn from "./components/Pages/SignIn";
import Cart from "./components/Pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men category="men's clothing"/>}/>
        <Route path="/women" element={<Women category="women's clothing"/>} />
        <Route path="/electronics" element={<Electronics category="electronics"/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
