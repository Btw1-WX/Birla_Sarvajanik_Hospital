import "./Services.css";

import img1 from "../../assets/services-image-2.png";
import img2 from "../../assets/services-image-1.png";
import service1 from "../../assets/medical 1.png";
import service2 from "../../assets/Vector.png";
import service3 from "../../assets/Vector-1.png";
import service4 from "../../assets/Vector-2.png";

const Services = () => {
  return (
    <div className="our-services">
      <h2 className="our-services__heading-small">CARE YOU CAN BELIEVE IN</h2>
      <h1 className="our-services__heading-large">Our Services</h1>
      <div className="our-services__container">
        <div className="our-services__two-in-one">
          <div className="our-services__box">
            <section className="our-services__service-box-single">
              <p className="our-services__icon-text">
                <img
                  className="our-services__icon"
                  src={service1}
                  alt="free checkup"
                />
                Free Checkup
              </p>
            </section>
            <section className="our-services__service-box-single our-services__box-current">
              <p className="our-services__icon-text our-services__icon-text-current">
                <img
                  className="our-services__icon"
                  src={service2}
                  alt="cardiogram"
                />
                Cardiogram
              </p>
            </section>
            <section className="our-services__service-box-single">
              <p className="our-services__icon-text">
                <img
                  className="our-services__icon"
                  src={service3}
                  alt="DNA testing"
                />
                Dna Testing
              </p>
            </section>
            <section className="our-services__service-box-single">
              <p className="our-services__icon-text">
                <img
                  className="our-services__icon"
                  src={service4}
                  alt="Blood bank"
                />
                Blood Bank
              </p>
            </section>
            <button type="button" className="our-services__button">
              View all
            </button>
          </div>
          <div className="our-services__text">
            <h2 className="our-services__h2">
              A passion for putting patients first.
            </h2>
            <table className="text-left">
              <tr>
                <td>A Passion for Healing</td>
                <td>5-Star Care</td>
              </tr>
              <tr>
                <td>All our best</td>
                <td>Believe in Us</td>
              </tr>
              <tr>
                <td>A Legacy of Excellence</td>
                <td>Always Caring</td>
              </tr>
            </table>
            <p className="our-services__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque tortor ornare ornare. Quisque placerat
              scelerisque tortor ornare ornare Convallis felis vitae tortor
              augue. Velit nascetur proin massa in. Consequat faucibus porttitor
              enim et.
            </p>
            <p className="our-services__para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              placerat scelerisque. Convallis felis vitae tortor augue. Velit
              nascetur proin massa in.
            </p>
          </div>
        </div>
        <div className="our-services__image">
          <img className="our-services__image-item" src={img1} alt="image-1" />
          <img className="our-services__image-item" src={img2} alt="image-2" />
        </div>
      </div>
    </div>
  );
};

export default Services;
