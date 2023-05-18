import "./card.css";
import "./flipTransition.css";
import sbdfront from "../../assets/sbd-front.png";
import sbdback from "../../assets/sbd-back.png";

export default function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-front">
        <img src={sbdfront} alt="Sentimental by Design front cover" />
      </div>
      <div className="card-back">
        <img src={sbdback} alt="Sentimental by Design back cover" />
      </div>
      <h4>
        <b>Sentimental by Design</b>
      </h4>
    </div>
  );
}
