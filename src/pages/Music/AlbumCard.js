import "./albumCard.css";
import AlbumInfo from "../../data/albumInfo.json";
import FlippableCard from "../../components/FlippableCard";
import { useAlbumUpdate } from "../../context/AlbumContext";

export default function AlbumCard({ albumName, active }) {
  const album = AlbumInfo[albumName];

  const styles = {
    customFont: {
      fontFamily: "GamerBold",
    },
  };

  const updateAlbum = useAlbumUpdate();

  function handleClick() {}

  function setAlbum() {
    updateAlbum(albumName);
  }

  console.log(albumName, "active?:", active);

  return (
    <div className="album-card" style={styles.customFont}>
      <button className="detail" onClick={setAlbum}>
        <div className={active ? "selected" : "unselected"}>
          <FlippableCard
            imageFront={album.frontCover}
            imageBack={album.backCover}
          />
          <h3>
            <b>{albumName}</b>
          </h3>
          <h5>{album.date}</h5>
        </div>
      </button>
    </div>
  );
}
