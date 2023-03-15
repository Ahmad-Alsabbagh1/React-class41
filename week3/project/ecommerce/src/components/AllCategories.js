import useFetch from "../hooks/useFetch";

const AllCategories = ({ switchCategories }) => {
  const { data: categories } = useFetch(
    "https://fakestoreapi.com/products/categories"
  );

  return categories.map((category) => {
    return (
      <li key={category}>
        <button onClick={() => switchCategories(category)}>{category}</button>
      </li>
    );
  });
};

export default AllCategories;
