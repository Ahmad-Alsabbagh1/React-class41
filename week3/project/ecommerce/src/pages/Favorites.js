import React, { useContext } from "react";
import FavoritesHeader from "../components/FavoritesHeader";
import { FavoritesContext } from "../context/global";
import useFetch from "../hooks/useFetch";
import AllProducts from "../components/AllProducts";
import Loading from "../components/Loading";

const Favorites = () => {
  const [favorites] = useContext(FavoritesContext);
  const {
    isLoading,
    error,
    data: allProducts,
  } = useFetch("https://fakestoreapi.com/products");
  let filteredProducts = [];

  filteredProducts = allProducts.filter((product) => {
    return favorites.includes(product.id);
  });

  return (
    <div>
      <FavoritesHeader />
      {isLoading && <Loading />}
      {error && <div>{error}</div>}
      {favorites.length === 0 ? (
        <div>You haven't chosen any favorites yet!</div>
      ) : (
        <div className="products-container">
          <AllProducts allProducts={filteredProducts} />
        </div>
      )}
    </div>
  );
};

export default Favorites;
