import Header from "../components/Header.js";
import Products from "../components/products.js";
import Categories from "../components/categories.js";

import React from "react";

const Home = ({ category, setCategory }) => {
  return (
    <div className="app">
      <Header category={category} />
      <ul className="categories-list">
        <Categories setCategory={setCategory} />
      </ul>
      <div className="products-box">
        <Products category={category} />
      </div>
    </div>
  );
};
export default Home;
