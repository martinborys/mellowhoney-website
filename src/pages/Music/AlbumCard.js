import "./albumCard.css";
import albums from "../../data/albumInfo.json";
import FlippableCard from "../../components/FlippableCard";
import { useAlbumUpdate } from "../../context/AlbumContext";

export default function AlbumCard({ albumName }) {
  const album = albums[albumName];

  const styles = {
    customFont: {
      fontFamily: "GamerBold",
    },
  };

  const updateAlbum = useAlbumUpdate();

  function setAlbum() {
    updateAlbum(albumName);
  }

  return (
    <div className="album-card" style={styles.customFont}>
      <button className="detail" onClick={setAlbum}>
        <FlippableCard
          imageFront={album.imageFront}
          imageBack={album.imageBack}
        />
        <h3>
          <b>{albumName}</b>
        </h3>
        <h5>{album.date}</h5>
      </button>
    </div>
  );
}
