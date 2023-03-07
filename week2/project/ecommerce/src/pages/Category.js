import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Products from "../components/products";
import Categories from "../components/categories";

const Product = ({ category, setCategory }) => {
  const { categories } = useParams();
  return (
    <div className="app">
      <Header category={category} setCategory={setCategory} />
      <ul className="categories-list">
        <Categories setCategory={setCategory} />
      </ul>
      <div className="products-box">
        <Products category={categories} />
      </div>
    </div>
  );
};

export default Product;
