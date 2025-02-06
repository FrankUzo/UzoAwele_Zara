import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WomenNew from "./pages/WomenNew";
import WomenTop from "./pages/WomenTop";
import WomenBottom from "./pages/WomenBottom";
import WomenWinter from "./pages/WomenWinter";
import LoginRegiter from "./pages/LoginRegiter";
import ProductDetail from "./pages/ProductDetail";

const App = () => {
  return (
    <div className="min-h-screen w-screen object-cover">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women/view_all_new" element={<WomenNew />} />
        <Route path="/Women/Topwear" element={<WomenTop />} />
        <Route path="/Woman/Bottomwear" element={<WomenBottom />} />
        <Route path="/Woman/Winterwear" element={<WomenWinter />} />
        <Route path="/login_rigister" element={<LoginRegiter />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
