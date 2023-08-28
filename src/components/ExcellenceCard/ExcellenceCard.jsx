import img from "../../assets/doctor-img-3.jpeg";
import "./ExcellenceCard.css";

const ExcellenceCard = () => {
  return (
    <div className="excellence-card">
      <img className="excellence-card__img" src={img} alt="" />
      <p className="excellence-card__text">Cardiology Center of Excellence</p>
    </div>
  );
};

export default ExcellenceCard;
