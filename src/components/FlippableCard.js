import "./flippableCard.css";

export default function FlippableCard({ imageFront, imageBack }) {
  return (
    <>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={require("../assets/" + imageFront)} alt={imageFront} />
          </div>
          <div className="flip-card-back">
            <img src={require("../assets/" + imageBack)} alt={imageBack} />
          </div>
        </div>
      </div>
    </>
  );
}
