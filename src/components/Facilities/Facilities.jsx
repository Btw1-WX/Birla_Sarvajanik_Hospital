import img1 from "../../assets/Ellipse 30.png";
// import img2 from "../../assets/Ellipse 31.png";
// import img3 from "../../assets/Ellipse 32.png";
// import img4 from "../../assets/Ellipse 36.png";
// import left from "../../assets/left.png";
// import right from "../../assets/right.png";
import swipeLeft from "../../assets/left-swipe-img.png";
import swipeRight from "../../assets/right-swipe-img.png";
import "./Facilities.css";

function Facilities() {
  return (
    <div className="facilities">
      <div className="facilities-continer">
        <div className="facilities-heading">
          <div>Facilities</div>
        </div>

        <div className="hero-section">
          <div className="swipe-left-pic">
            <img src={swipeLeft} className="swipe"></img>
          </div>

          <div className="pic1">
            <img src={img1}></img>
            <div>Cardiology Adult</div>
          </div>

          <div className="pic1">
            <img src={img1}></img>
            <div>Cardiology Adult</div>
          </div>

          <div className="pic1">
            <img src={img1}></img>
            <div>Cardiology Adult</div>
          </div>

          <div className="pic1">
            <img src={img1}></img>
            <div>Cardiology Adult</div>
          </div>

          <img src={swipeRight} className="swipe"></img>
        </div>
      </div>
    </div>
  );
}
export default Facilities;
