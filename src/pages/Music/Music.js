import AlbumCard from "./AlbumCard";
import "./music.css";

export default function Music() {
  return (
    <div className="music">
      <AlbumCard albumName={"Sentimental by Design"} />
      <AlbumCard albumName={"The Freeze"} />
      <AlbumCard albumName={"Sentimental by Design"} />
      <AlbumCard albumName={"Sentimental by Design"} />
      <AlbumCard albumName={"Sentimental by Design"} />
    </div>
  );
}
