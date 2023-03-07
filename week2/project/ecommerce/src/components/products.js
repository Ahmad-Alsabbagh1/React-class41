import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = ({ category }) => {
  const [allProducts, setAllProducts] = useState([{}]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setAllProducts(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://fakestoreapi.com/products/category/${category}`
        );
        const data = await res.json();
        setAllProducts(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [category]);

  if (loading === true) {
    return <div>Loading... Be Patient :p</div>;
  }
  return allProducts.map((product, index) => {
    return (
      <div className="product" key={product.id}>
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        <Link to={`/product/${product.id}`} key={index}>
          <span>{product.title}</span>
        </Link>
      </div>
    );
  });
};

export default Products;
