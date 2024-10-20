import React from "react";
import CartInfo from "../CartInfo/CartInfo";
import Search from "../Search/Search";
import "./Header.css";

const Header = ({ cartCount, total, filter, setFilter }) => {
  return (
    <header className="header">
      <h1 className="header-title">Каталог товаров</h1>
      <div className="header-controls">
        <CartInfo cartCount={cartCount} total={total} />
        <Search filter={filter} setFilter={setFilter} />
      </div>
    </header>
  );
};

export default Header;
