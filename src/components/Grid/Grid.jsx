import "./Grid.css";
import img2 from "../../assets/happy-doctor-holding-clipboard-with-patients 1.jpg";
import img3 from "../../assets/medical-banner-with-doctor-patient 1.jpg";
import img4 from "../../assets/young-female-doctor-isolated-white-background 2.jpg";

function Grid() {
  return (
    <div className="grid-container">
      <div className="grid-card">
        <img className="grid-image" src={img2} alt="Doctor" />
        <h3 className="grid-title">The Medical Experts Carefully</h3>
        <p className="grid-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
          fames quam pellentesque interdum purus senectus feugiat elit.c.
        </p>
        <button className="grid-button">Read More</button>
      </div>

      <div className="grid-card">
        <img className="grid-image" src={img3} alt="Doctor" />
        <h3 className="grid-title">The Medical Experts Carefully</h3>
        <p className="grid-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
          fames quam pellentesque interdum purus senectus feugiat elit.c.
        </p>
        <button className="grid-button">Read More</button>
      </div>

      <div className="grid-card">
        <img className="grid-image" src={img4} alt="Doctor" />
        <h3 className="grid-title">The Medical Experts Carefully</h3>
        <p className="grid-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
          fames quam pellentesque interdum purus senectus feugiat elit.c.
        </p>
        <button className="grid-button">Read More</button>
      </div>
      <div className="grid-card">
        <img className="grid-image" src={img2} alt="Doctor" />
        <h3 className="grid-title">The Medical Experts Carefully</h3>
        <p className="grid-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
          fames quam pellentesque interdum purus senectus feugiat elit.c.
        </p>
        <button className="grid-button">Read More</button>
      </div>

      <div className="grid-card">
        <img className="grid-image" src={img3} alt="Doctor" />
        <h3 className="grid-title">The Medical Experts Carefully</h3>
        <p className="grid-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
          fames quam pellentesque interdum purus senectus feugiat elit.c.
        </p>
        <button className="grid-button">Read More</button>
      </div>

      <div className="grid-card">
        <img className="grid-image" src={img4} alt="Doctor" />
        <h3 className="grid-title">The Medical Experts Carefully</h3>
        <p className="grid-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim
          fames quam pellentesque interdum purus senectus feugiat elit.c.
        </p>
        <button className="grid-button">Read More</button>
      </div>
    </div>
  );
}

export default Grid;
