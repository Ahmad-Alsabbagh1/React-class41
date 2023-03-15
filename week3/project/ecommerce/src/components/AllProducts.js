import { Link } from "react-router-dom";
import solidH from "../assets/heart-solid.svg";
import regularH from "../assets/heart-regular.svg";
import { FavoritesContext } from "../context/global";
import { useContext } from "react";

const AllProducts = ({ currentCategory, allProducts }) => {
  const [favorites, setFavorites] = useContext(FavoritesContext);

  const filteredProducts = allProducts.filter(
    (product) => product.category === currentCategory
  );
  const handleFavorites = (pId) => {
    if (favorites.some((favItem) => favItem === pId)) {
      setFavorites(favorites.filter((product) => product !== pId));
    } else {
      setFavorites([...favorites, pId]);
    }
  };
  if (filteredProducts.length > 0) {
    return filteredProducts.map((product) => {
      return (
        <div key={product.id} className="product">
          <img
            src={
              favorites.some((favItem) => favItem === product.id)
                ? solidH
                : regularH
            }
            alt="Favorite icon"
            className="favo"
            onClick={() => handleFavorites(product.id)}
          />
          <img src={product.image} alt={product.title} />
          <Link to={`/${product.id}`}>
            <p>{product.title}</p>
          </Link>
        </div>
      );
    });
  } else {
    return allProducts.map((product) => {
      return (
        <div key={product.id} className="product">
          <img
            src={
              favorites.some((favItem) => favItem === product.id)
                ? solidH
                : regularH
            }
            alt="Favorite icon"
            className="favo"
            onClick={() => handleFavorites(product.id)}
          />
          <img src={product.image} alt={product.title} />
          <Link to={`/${product.id}`}>
            <p>{product.title}</p>
          </Link>
        </div>
      );
    });
  }
};

export default AllProducts;
