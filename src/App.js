import "./App.css";
import Home from "./pages/Home/HomePage";
import Music from "./pages/Music/Music";
import Shows from "./pages/Shows/Shows";
import Merch from "./pages/Merch/Merch";
import Photos from "./pages/Photos/Photos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/Shows" element={<Shows />} />
        <Route path="/Merch" element={<Merch />} />
        <Route path="/Photos" element={<Photos />} />
      </Routes>
    </div>
  );
}

export default App;
