import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import About from "./pages/About";
import "./css/App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
