import "./ReviewCard.css";
import TestimonialImg from "../../assets/testimonial-img.png";
import invertedComma from "../../assets/inverted-comma.png";

function Testimonial() {
  return (
    <div className="review">
      <div className="review__img">
        <img src={TestimonialImg} alt="Testimonial" />
      </div>
      <div className="review__abs-section">
        <div className="review__inverted-comma">
          <img src={invertedComma} alt="Inverted Comma" />
        </div>

        <div className="review__text-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Quisque placerat
          scelerisque felis vitae tortor augue. Velit nascetur Consequat
          faucibus porttitor enim etc.
        </div>

        <div className="review__horiz-line"></div>

        <div className="review__author-name">John Doe</div>

        <div className="review__three-dots">
          <div className="review__dots"></div>
          <div className="review__dots"></div>
          <div className="review__dots"></div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
