export default function AlbumDetails({ albumName }) {
  return (
    <div className="container">
      <iframe
        title={albumName}
        src="https://bandcamp.com/EmbeddedPlayer/album=3661202216/size=large/bgcol=ffffff/linkcol=7137dc/tracklist=false/transparent=true/"
        seamless
      >
        <a href="https://mellowhoney.bandcamp.com/album/sentimental-by-design">
          Sentimental by Design by Mellow Honey
        </a>
      </iframe>
    </div>
  );
}
