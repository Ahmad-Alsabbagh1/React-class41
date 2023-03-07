import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Card = () => {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <h2>
        <strong>{product.title}</strong>
      </h2>
      <img src={product.image} className={"card-img"} alt={product.alt} />
      <p className="product-p">{product.description}</p>
    </div>
  );
};

export default Card;
