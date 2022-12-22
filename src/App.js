import axios from "axios";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddForm from "./components/AddForm/AddForm";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";

const App = () => {
  const API = "http://localhost:8001/products";
  const [products, setProducts] = useState([]);

  function addProduct(newProduct) {
    axios.post(API, newProduct);
  }
  async function getProducts() {
    const result = await axios.get(API);
    setProducts(result.data);
  }
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <ProductList getProducts={getProducts} products={products} />
            }
          />
          <Route path="/add" element={<AddForm addProduct={addProduct} />} />
          <Route path="/contacts" element={<h1>contacts</h1>} />
          <Route path="*" element={<h1>NOT FOUND PAGE</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
