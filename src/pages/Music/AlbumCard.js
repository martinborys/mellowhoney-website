import "./albumCard.css";
import AlbumInfo from "../../data/albumInfo.json";
import FlippableCard from "../../components/FlippableCard";
import { useState, useEffect } from "react";

export default function AlbumCard({ albumName, active, onClick }) {
  const albumInfo = AlbumInfo[albumName];

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

  const styles = {
    customFont: {
      fontFamily: "GamerBold",
    },
  };

  if (rendered) {
    return (
      <div
        className={`album-card ${fadeOut ? "fade-out" : ""}`}
        style={styles.customFont}
        onAnimationEnd={handleAnimationEnd}
      >
        <button className="detail" onClick={handleClick}>
          <div>
            <FlippableCard
              imageFront={albumInfo.frontCover}
              imageBack={albumInfo.backCover}
            />
            <h3>
              <b>{albumName}</b>
            </h3>
            <h5>{albumInfo.date}</h5>
          </div>
        </button>
      </div>
    );
  }
}
