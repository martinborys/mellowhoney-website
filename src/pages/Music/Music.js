import { useAlbum } from "../../context/AlbumContext";
import AlbumCard from "./AlbumCard";
import "./music.css";
import albumInfo from "../../data/albumInfo.json";

function getKeys(json) {
  let keys = [];
  for (var key in json) {
    keys.push(key);
  }
  return keys;
}

export default function Music() {
  const contextAlbum = useAlbum();

  const isActive = (albumName) => {
    console.log(albumName, contextAlbum === albumName);
    if (contextAlbum === "none") {
      return true;
    }
    return contextAlbum === albumName;
  };

  console.log("render");

  return (
    <div className="music">
      {getKeys(albumInfo).map((albumName, i) => (
        <AlbumCard key={i} albumName={albumName} active={isActive(albumName)} />
      ))}
    </div>
  );
}
