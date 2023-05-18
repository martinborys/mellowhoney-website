import "./flippableCard.css";
import Card from "./Card";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";

export default function FlippableCard() {
  const [showFront, setShowFront] = useState(true);
  return (
    <div className="flippable-card-container">
      <CSSTransition in={showFront} timeout={300} classNames="flip">
        <Card
          onClick={() => {
            setShowFront((v) => !v);
          }}
        />
      </CSSTransition>
    </div>
  );
}
