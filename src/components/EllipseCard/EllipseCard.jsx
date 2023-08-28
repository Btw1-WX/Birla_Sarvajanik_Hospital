import { Ellipse } from "../../components";

import "./EllipseCard.css";

const EllipseCard = () => {
  return (
    <div className="ellipse-card">
      <div className="ellipse-card__row">
        <Ellipse />
        <Ellipse />
      </div>
      <div className="ellipse-card__row">
        <Ellipse />
        <Ellipse />
      </div>
      <div className="ellipse-card__row">
        <Ellipse />
        <Ellipse />
      </div>
    </div>
  );
};

export default EllipseCard;
