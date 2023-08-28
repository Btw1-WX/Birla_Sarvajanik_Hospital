import "./NewsSection.css";

import img1 from "../../assets/doctor-talking-with-patients 3.png";
import img2 from "../../assets/happy-doctor-holding-clipboard-with-patients 2.png";

import {
  NewsCard,
  // Ellipse
} from "../../components";

const NewsSection = () => {
  return (
    <div className="birla-news">
      <div className="news-section-1">
        <h2 className="home-heading">
          BIRLA <span>NEWS</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lectus in
          mauris facilisis semper sapien. Risus aliquam egestas non duis lacus
          at. Eu sapien consectetur mattis aliquet ipsum etiam scelerisque a.
          Sed elementum pulvinar porta eleifend elit diam mattis iaculis. Ac
          vitae pellentesque aliquam augue.{" "}
        </p>
        <div className="news-grid">
          <div>
            <div>
              <img className="news-grid1-img" src={img1} alt="" />
            </div>
            <div>
              <button className="btn btn-primary color news-btn">
                Read all news
              </button>
            </div>
          </div>
          <div>
            <div className="circle-container">
              <div className="circle circle-1"></div>
              <div className="circle circle-2"></div>
            </div>
            <div>
              <img className="news-grid1-img" src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="news-section-2">
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
        <div>
          <NewsCard />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
