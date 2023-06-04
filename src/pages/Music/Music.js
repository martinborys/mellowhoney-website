import AlbumCard from "./AlbumCard";
import "./music.css";
import albumInfo from "../../data/albumInfo.json";
import { getKeys } from "../../utils/utils";
import { useState } from "react";

export default function Music() {
  const [activeAlbum, setActiveAlbum] = useState(null);

  const handleAlbumClick = (albumName) => {
    setActiveAlbum(albumName);
  };

  return (
    <div className={`music ${activeAlbum ? "album-active" : ""}`}>
      {getKeys(albumInfo).map((albumName, i) => (
        <AlbumCard
          key={i}
          albumName={albumName}
          active={activeAlbum === albumName || !activeAlbum}
          onClick={handleAlbumClick}
        />
      ))}
    </div>
  );
}
