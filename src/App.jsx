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
import FooterGeneral from "./components/FooterGeneral";
import MenNew from "./pages/MenNew";
import MenTop from "./pages/MenTop";
import MenBottom from "./pages/MenBottom";
import MenWinter from "./pages/MenWinter";
import KidsNew from "./pages/KidsNew";
import KidsTop from "./pages/KidsTop";
import KidsBottom from "./pages/KidsBottom";
import KidsWinter from "./pages/KidsWinter";

const App = () => {
  return (
    <div className="min-h-screen w-screen object-cover">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Women/view_all_new" element={<WomenNew />} />
        <Route path="/Women/Topwear" element={<WomenTop />} />
        <Route path="/Women/Bottomwear" element={<WomenBottom />} />
        <Route path="/Women/Winterwear" element={<WomenWinter />} />
        <Route path="/Men/view_all_new" element={<MenNew />} />
        <Route path="/Men/Topwear" element={<MenTop />} />
        <Route path="/Men/Bottomwear" element={<MenBottom />} />
        <Route path="/Men/Winterwear" element={<MenWinter />} />
        <Route path="/Kids/view_all_new" element={<KidsNew />} />
        <Route path="/Kids/Topwear" element={<KidsTop />} />
        <Route path="/Kids/Bottomwear" element={<KidsBottom />} />
        <Route path="/Kids/Winterwear" element={<KidsWinter />} />
        <Route path="/login_rigister" element={<LoginRegiter />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
      <FooterGeneral className="mt-72" />
    </div>
  );
};

export default App;
