import Header from "../components/Header";
import AllProducts from "../components/AllProducts";
import useFetch from "../hooks/useFetch";
import { useState } from "react";
import Loading from "../components/Loading";

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState("");
  const {
    isLoading,
    error,
    data: allProducts,
  } = useFetch("https://fakestoreapi.com/products");

  const switchCategories = (category) => {
    if (category === currentCategory) {
      setCurrentCategory("");
    } else {
      setCurrentCategory(category);
    }
  };
  return (
    <div>
      <Header switchCategories={switchCategories} />
      <div className="products-container">
        {error && <div>{error}</div>}
        {isLoading && <Loading />}
        <AllProducts
          currentCategory={currentCategory}
          allProducts={allProducts}
        />
      </div>
    </div>
  );
};

export default Home;
