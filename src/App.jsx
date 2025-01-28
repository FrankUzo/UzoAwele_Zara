import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import WomenNew from "./pages/WomenNew";

const App = () => {
  return (
    <div className="min-h-screen w-screen object-cover">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/women/view_all_new" element={<WomenNew />} />
      </Routes>
    </div>
  );
};

export default App;
