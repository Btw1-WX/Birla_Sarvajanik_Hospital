import "./OurDoctors.css";
import doctorImg from "../../assets/mainDoctor.png";
// import insta from "../../assets/insta-img.png";
// import linkedIn from "../../assets/linkedinimg.png";
import fb from "../../assets/facebookimg.png";

function OurDoctors() {
  return (
    <div>
      <div className="our-doctors">
        <div className="doctor-heading">
          <div className="care">Trusted Care</div>
          <div className="doctors">Our Doctors</div>
        </div>

        <div className="doctor-cards">
          <div className="doctor-card">
            <div className="doctor-image">
              <img src={doctorImg} alt="doctor-pic"></img>
            </div>

            <div className="doctor-description">
              <div className="name-desc">Doctors Name</div>
              <div className="profession-desc">Numerology</div>

              <div className="doctor-socials">
                <img src={fb}></img>
                <img src={fb}></img>
                <img src={fb}></img>
              </div>

              <div className="doctor-profile">View Profile</div>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">
              <img src={doctorImg} alt="doctor-pic"></img>
            </div>

            <div className="doctor-description">
              <div className="name-desc">Doctors Name</div>
              <div className="profession-desc">Numerology</div>

              <div className="doctor-socials">
                <img src={fb}></img>
                <img src={fb}></img>
                <img src={fb}></img>
              </div>

              <div className="doctor-profile">View Profile</div>
            </div>
          </div>

          <div className="doctor-card">
            <div className="doctor-image">
              <img src={doctorImg} alt="doctor-pic"></img>
            </div>

            <div className="doctor-description">
              <div className="name-desc">Doctors Name</div>
              <div className="profession-desc">Numerology</div>

              <div className="doctor-socials">
                <img src={fb}></img>
                <img src={fb}></img>
                <img src={fb}></img>
              </div>

              <div className="doctor-profile">View Profile</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurDoctors;
