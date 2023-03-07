import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = ({ setCategory }) => {
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      setAllCategories(data);
    })();
  }, []);

  return allCategories.map((category, index) => {
    return (
      <Link to={`/categories/${category}`} key={index}>
        <button
          className={"category button"}
          onClick={(event) => {
            setCategory(event.target.outerText);
          }}
        >
          {category}
        </button>
      </Link>
    );
  });
};

export default Categories;
