import Blog from "../Blog/Blog";

import img2 from "../../assets/happy-doctor-holding-clipboard-with-patients 1.jpg";

import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <img className="image" src={img2}></img>
      <h3 className="experts">The Medical Experts Carefully</h3>
      <Blog />
    </div>
  );
};

export default Card;
