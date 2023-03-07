import { Link } from "react-router-dom";
const Header = ({ category, setCategory }) => {
  return (
    <header>
      <Link to={"/"}>
        <button
          className="home button"
          onClick={() => {
            setCategory("");
          }}
        >
          Home
        </button>
      </Link>
      <p className="current-category">
        Current Category: <strong>{category}</strong>
      </p>
    </header>
  );
};
export default Header;
