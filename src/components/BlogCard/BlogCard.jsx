import { Card } from "../../components";
import "./BlogCard.css"; // Import your CSS file

const BlogCard = () => {
  return (
    <div className="blog-card">
      <h2 className="blog-card__heading home-heading text-center">
        OUR <span>BLOG</span>
      </h2>
      <div className="blog-card__content">
        <div className="blog-card__card">
          <Card />
        </div>
        <div className="blog-card__card blog-card__card-sub">
          <Card />
        </div>
        <div className="blog-card__card blog-card__card-sub">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
