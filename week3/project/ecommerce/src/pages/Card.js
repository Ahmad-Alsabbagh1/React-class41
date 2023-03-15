import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Card = () => {
  const { id } = useParams();
  const { data: product } = useFetch(`https://fakestoreapi.com/products/${id}`);
  return (
    <div>
      <h2 className="card-h2">
        <strong>{product.title}</strong>
      </h2>
      <img src={product.image} alt={product.title} className="card-img" />
      <p className="card-p">{product.description}</p>
    </div>
  );
};

export default Card;
