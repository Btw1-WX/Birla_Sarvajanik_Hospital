import "./Navbar.css";
import logo from "../../assets/Rectangle 79.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="content">
        <Link className="route-link" to="/">
          HOME
        </Link>
        <div className="menu">SPECIALITIES</div>
        <div className="menu">PATIENT SERVICES</div>
        <div className="menu">HEALTHCARE EXPERTS</div>
        <div className="menu">FACILITIES</div>
        <div className="menu">INTERNATIONAL PATIENTS</div>
        <Link className="route-link" to="/blogs">
          BLOGS
        </Link>
      </div>

      <img className="img" src={logo}></img>
    </div>
  );
}

export default Navbar;
