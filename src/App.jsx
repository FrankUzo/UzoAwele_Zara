import { React } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginRegiter from "./pages/LoginRegiter";
import ProductDetail from "./pages/ProductDetail";
import FooterGeneral from "./components/FooterGeneral";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchBar from "./components/SearchBar";
import AddToCartBtn from "./components/AddToCartBtn";
import Cart from "./pages/Cart";
import PlaceOrder from "./pages/PlaceOrder";
import GeneralCategory from "./pages/GeneralCategory";
import GeneralSubCategory from "./pages/GeneralSubCategory";
import Login from "./pages/Login";

const App = () => {
  return (
    <div className="min-h-screen w-screen object-cover">
      <ToastContainer />
      <Navbar />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Women/view_all_new"
          element={<GeneralCategory name="WOMEN" path="/Women/view_all_new" />}
        />
        <Route
          path="/Women/Topwear"
          element={
            <GeneralSubCategory name="WOMEN" type="TOP" path="/Women/Topwear" />
          }
        />
        <Route
          path="/Women/Bottomwear"
          element={
            <GeneralSubCategory
              name="WOMEN"
              type="BOTTOM"
              path="/Women/Bottomwear"
            />
          }
        />
        <Route
          path="/Women/Winterwear"
          element={
            <GeneralSubCategory
              name="WOMEN"
              type="WINTER"
              path="/Women/Winterwear"
            />
          }
        />
        <Route
          path="/Men/view_all_new"
          element={<GeneralCategory path="/Men/view_all_new" name="MEN" />}
        />
        <Route
          path="/Men/Topwear"
          element={
            <GeneralSubCategory name="MEN" type="TOP" path="/Men/Topwear" />
          }
        />
        <Route
          path="/Men/Bottomwear"
          element={
            <GeneralSubCategory
              name="MEN"
              type="BOTTOM"
              path="/Men/Bottomwear"
            />
          }
        />
        <Route
          path="/Men/Winterwear"
          element={
            <GeneralSubCategory
              name="MEN"
              type="WINTER"
              path="/Men/Winterwear"
            />
          }
        />
        <Route
          path="/Kids/view_all_new"
          element={<GeneralCategory path="/Kids/view_all_new" name="KIDS" />}
        />
        <Route
          path="/Kids/Topwear"
          element={
            <GeneralSubCategory name="KIDS" type="TOP" path="/Kids/Topwear" />
          }
        />
        <Route
          path="/Kids/Bottomwear"
          element={
            <GeneralSubCategory
              name="KIDS"
              type="BOTTOM"
              path="/Kids/Bottomwear"
            />
          }
        />
        <Route
          path="/Kids/Winterwear"
          element={
            <GeneralSubCategory
              name="KIDS"
              type="WINTER"
              path="/Kids/Winterwear"
            />
          }
        />
        <Route path="/login_rigister" element={<LoginRegiter />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/login_rigister/login" element={<Login />} />
      </Routes>
      <FooterGeneral className="mt-72" />
      <AddToCartBtn />
    </div>
  );
};

export default App;
