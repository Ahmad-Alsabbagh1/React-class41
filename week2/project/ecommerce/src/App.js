import Home from "./pages/Home.js";
import Category from "./pages/Category";
import Card from "./pages/Card.js";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState("");
  return (
    <Routes>
      <Route
        path="/"
        element={<Home category={category} setCategory={setCategory} />}
      />
      <Route
        path="/categories/:categories"
        element={<Category category={category} setCategory={setCategory} />}
      />
      <Route path="/product/:id" element={<Card />} />
    </Routes>
  );
}

export default App;
