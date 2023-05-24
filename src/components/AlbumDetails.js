import { useAlbum } from "../context/AlbumContext";

export default function AlbumDetails({ albumName }) {
  const album = useAlbum();

  return <div className="container">{album}</div>;
}
