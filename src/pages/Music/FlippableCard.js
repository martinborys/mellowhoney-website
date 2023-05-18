import "./flippableCard.css";

export default function FlippableCard({ imageFront, imageBack, albumName }) {
  return (
    <>
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">
            <img src={require("../../assets/" + imageFront)} alt={albumName} />
          </div>
          <div class="flip-card-back">
            <img src={require("../../assets/" + imageBack)} alt={albumName} />
          </div>
        </div>
      </div>
    </>
  );
}
