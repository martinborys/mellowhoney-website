import "./albumCard.css";
import albums from "../../data/albumInfo.json";
import FlippableCard from "../../components/FlippableCard";

export default function AlbumCard({ albumName }) {
  const styles = {
    customFont: {
      fontFamily: "GamerBold",
    },
  };

  return (
    <div className="album-card" style={styles.customFont}>
      <button className="detail">
        <FlippableCard
          imageFront={albums[albumName].imageFront}
          imageBack={albums[albumName].imageBack}
        />
        <h3>
          <b>{albumName}</b>
        </h3>
        <h5>{albums[albumName].date}</h5>
      </button>
    </div>
  );
}
