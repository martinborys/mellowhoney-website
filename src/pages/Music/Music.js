import { AlbumProvider } from "../../context/AlbumContext";
import AlbumCard from "./AlbumCard";
import "./music.css";

export default function Music() {
  return (
    <AlbumProvider>
      <div className="music">
        <AlbumCard albumName={"Sentimental by Design"} />
        <AlbumCard albumName={"Sentimental by Design"} />
        <AlbumCard albumName={"Sentimental by Design"} />
      </div>
    </AlbumProvider>
  );
}
