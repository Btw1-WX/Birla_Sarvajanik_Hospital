import PropTypes from "prop-types";
import "./Blog.css";

function Blog({
  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce enim fames quam pellentesque interdum purus senectus feugiat elit.c.",
}) {
  return (
    <>
      <p className="blog__description">{text}</p>
      <button className="blog__btn-read-more">Read More</button>
    </>
  );
}

Blog.propTypes = {
  text: PropTypes.string,
};

export default Blog;
