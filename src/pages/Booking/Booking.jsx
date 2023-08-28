import {
  Form,
  Navbar,
  Testimonial,
  Stack,
  EllipseCard,
} from "../../components";

import "./Booking.css";

function Booking() {
  return (
    <div className="wrapper">
      <Navbar />

      <div className="form-div">
        <EllipseCard />
        <Form />
      </div>

      <div className="stacks-div">
        <h2 className="home-heading text-center">
          Health <span>Package</span>
        </h2>
        <div className="stack-div">
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
          <Stack />
        </div>
      </div>

      <div className="another-opinion">
        <button>Get a second Opinion</button>
      </div>

      <div className="testimonials">
        <h2 className="home-heading">Testimonials</h2>
        <div>
          <Testimonial />
          <Testimonial />
        </div>
      </div>
    </div>
  );
}

export default Booking;
