import AllCategories from "./AllCategories";
import NavLinks from "./NavLinks";
const Header = ({ setCurrentCategory, switchCategories }) => {
  return (
    <div>
      <h1>Products</h1>
      <NavLinks />
      <ul className="categories-ul">
        <AllCategories
          setCurrentCategory={setCurrentCategory}
          switchCategories={switchCategories}
        />
      </ul>
    </div>
  );
};

export default Header;
