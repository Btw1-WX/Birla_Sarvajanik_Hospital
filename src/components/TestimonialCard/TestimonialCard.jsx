import Testimonial from "../Testimonial/Testimonial";

import "./TestimonialCard.css";

const TestimonialCard = () => {
  return (
    <div className="testimonials">
      <h2 className="home-heading">Testimonials</h2>
      <div>
        <Testimonial />
        <Testimonial />
      </div>
    </div>
  );
};

export default TestimonialCard;
