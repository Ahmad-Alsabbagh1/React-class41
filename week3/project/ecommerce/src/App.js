import { Route, Routes } from "react-router-dom";
import Card from "./pages/Card";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import { FavoritesProvider } from "./context/global";

function App() {
  return (
    <FavoritesProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Card />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoritesProvider>
  );
}

export default App;
