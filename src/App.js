import "./App.css";
import Home from "./pages/Home/HomePage";
import Navbar from "./pages/Home/Navbar";
import Music from "./pages/Music/Music";
import Concerts from "./pages/Concerts/Concerts";
import Merch from "./pages/Merch/Merch";
import Photos from "./pages/Photos/Photos";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = Home;
      break;
    case "/Music":
      Component = Music;
      break;
    case "/Concerts":
      Component = Concerts;
      break;
    case "/Merch":
      Component = Merch;
      break;
    case "/Photos":
      Component = Photos;
      break;
    default:
      break;
  }
  return (
    <>
      <Navbar />
      <Component />
    </>
  );
}

export default App;
