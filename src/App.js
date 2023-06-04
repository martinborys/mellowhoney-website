import "./App.css";
import Home from "./pages/Home/HomePage";
import Navbar from "./pages/Home/Navbar";
import Music from "./pages/Music/Music";
import Concerts from "./pages/Concerts/Concerts";
import Merch from "./pages/Merch/Merch";
import Photos from "./pages/Photos/Photos";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Music" element={<Music />} />
          <Route path="/Concerts" element={<Concerts />} />
          <Route path="/Merch" element={<Merch />} />
          <Route path="/Photos" element={<Photos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
