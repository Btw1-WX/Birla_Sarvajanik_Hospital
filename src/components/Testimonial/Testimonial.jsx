import profile from "../../assets/tm1 1.png";
import "./Testimonial.css";

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial__profile">
        <img className="testimonial__profile-img" src={profile} alt="" />
        <div className="testimonial__profile-detail">
          <p className="testimonial__profile-name">Urvi Rathod</p>
          <p className="testimonial__profile-title">Teacher</p>
        </div>
      </div>
      <p className="testimonial__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at amet
        eu, non vel netus duis enim quis. Arcu nibh nam eget lectus lacus
        mauris. Tellus in ut aliquam neque mi enim. Accumsan eget adipiscing
        lacinia lacus viverra tortor, feugiat. In amet, morbi tincidunt
        bibendum. In urna consectetur elementum id malesuada molestie. Posuere
        nunc et amet amet.
      </p>
    </div>
  );
};

export default Testimonial;
