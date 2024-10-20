import React, { useEffect, useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { fetchProducts } from "./components/api/api";

import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [total, setTotal] = useState(0);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    loadProducts();
    updateCartInfo();
  }, []);

  const loadProducts = async () => {
    const fetchedProducts = await fetchProducts();
    setProducts(fetchedProducts);
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartInfo();
  };

  const updateCartInfo = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
    setTotal(cart.reduce((sum, item) => sum + item.cost, 0).toFixed(2));
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div id="app" className="container">
      <Header
        cartCount={cartCount}
        total={total}
        filter={filter}
        setFilter={setFilter}
      />
      <main>
        <ProductList products={filteredProducts} addToCart={addToCart} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
