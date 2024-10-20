import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList = ({ products, addToCart }) => {
  return (
    <section className="product-list">
      {products.length > 0 ? (
        products
          .slice(0, 10)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))
      ) : (
        <p className="product-empty">По вашему запросу ничего не найдено</p>
      )}
    </section>
  );
};

export default ProductList;
