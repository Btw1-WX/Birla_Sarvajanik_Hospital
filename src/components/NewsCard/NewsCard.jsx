import "./NewsCard.css";

import { Blog } from "../../components";

const NewsCard = () => {
  return (
    <div className="news-card">
      <p className="news-heading">Helping Seniors Learn New Hobbies</p>
      <p className="news-date">05 September 2022</p>
      <Blog />
    </div>
  );
};

export default NewsCard;
