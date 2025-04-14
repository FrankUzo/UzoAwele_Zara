// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ShopConextProvider from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopConextProvider>
      <App />
    </ShopConextProvider>
  </BrowserRouter>
);
