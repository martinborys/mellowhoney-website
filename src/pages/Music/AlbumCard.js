import { useState, useEffect } from "react";
import AlbumInfo from "../../data/albumInfo.json";
import FlippableCard from "../../components/FlippableCard";
import "./albumCard.css";

export default function AlbumCard({ albumName, active, onClick }) {
  const { frontCover, backCover, date } = AlbumInfo[albumName];

  const [rendered, setRendered] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    onClick(albumName);
  };

  useEffect(() => {
    if (!active) {
      setFadeOut(true);
    }
  }, [active]);

  const handleAnimationEnd = () => {
    if (!active && fadeOut) {
      setRendered(false);
    }
  };

  if (!rendered) {
    return null;
  }

  return (
    <div
      className={`album-card custom-font ${fadeOut ? "fade-out" : ""}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <button className="detail" onClick={handleClick}>
        <div>
          <FlippableCard imageFront={frontCover} imageBack={backCover} />
          <h3>
            <b>{albumName}</b>
          </h3>
          <h5>{date}</h5>
        </div>
      </button>
    </div>
  );
}
