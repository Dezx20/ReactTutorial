import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
// import ProductsProvider from "./context/product-context";
import configureProductsStore from "./hooks-store/product-store";
configureProductsStore();

ReactDOM.render(
  // <ProductsProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductsProvider>,
  document.getElementById("root")
);
