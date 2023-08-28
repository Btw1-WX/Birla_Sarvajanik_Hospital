import "./News.css";

import carginImg from "../../assets/caring.png";

function News() {
  return (
    <div className="news">
      <div className="news-container">
        <div className="news-heading">
          <div className="news-slogan">BETTER INFORMATION, BETTER HEALTH</div>
          <div className="only-news">NEWS</div>
        </div>

        <div className="news-cards">
          <div className="row-one-card">
            <div className="left-card">
              <img src={carginImg} className="caring-image"></img>

              <div className="card-info">
                <div className="text-part">
                  <div className="date-month-year">
                    Monday 05, September 2021 | By Author
                  </div>
                  <div className="article-title">
                    This Article&apos;s Title goes Here, but not too long.
                  </div>
                  <div className="views-likes">
                    <img></img>
                    <span>68</span>
                    <img></img>
                    <span>96</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-card">
              <img src={carginImg} className="caring-image"></img>

              <div className="card-info">
                <div className="text-part">
                  <div className="date-month-year">
                    Monday 05, September 2021 | By Author
                  </div>
                  <div className="article-title">
                    This Article&apos;s Title goes Here, but not too long.
                  </div>
                  <div className="views-likes">
                    <img></img>
                    <span>68</span>
                    <img></img>
                    <span>96</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row-two-card">
            <div className="left-card">
              <img src={carginImg} className="caring-image"></img>

              <div className="card-info">
                <div className="text-part">
                  <div className="date-month-year">
                    Monday 05, September 2021 | By Author
                  </div>
                  <div className="article-title">
                    This Article&apos;s Title goes Here, but not too long.
                  </div>
                  <div className="views-likes">
                    <img></img>
                    <span>68</span>
                    <img></img>
                    <span>96</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="left-card">
              <img src={carginImg} className="caring-image"></img>

              <div className="card-info">
                <div className="text-part">
                  <div className="date-month-year">
                    Monday 05, September 2021 | By Author
                  </div>
                  <div className="article-title">
                    This Article&apos;s Title goes Here, but not too long.
                  </div>
                  <div className="views-likes">
                    <img></img>
                    <span>68</span>
                    <img></img>
                    <span>96</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="three-dots">
          <div className="three-dots-props"></div>
          <div className="three-dots-props"></div>
          <div className="three-dots-props"></div>
        </div>
      </div>
    </div>
  );
}

export default News;
