import "./BlogText.css";

function BlogText() {
  return (
    <>
      <div className="blog">
        <div className="home-blog-container">
          <div className="home-blog">
            <span className="home">Home</span>{" "}
            <span className="h-blog">{">"} Blog</span>
          </div>

          <div className="bs-blog">BIRLA SARVAJANIK BLOG</div>
        </div>
      </div>
      <div className="blog-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
        pellentesque leo nec aenean maecenas odio tempus id. Mauris, elementum
        est egestas tincidunt pellentesque. Tempus massa rhoncus velit nec.
        Lorem purus est facilisis quam lorem amet, nunc lectus. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Sed pellentesque leo nec
        aenean maecenas odio tempus id. Mauris, elementum est egestas tincidunt
        pellentesque. Tempus massa rhoncus velit nec. Lorem purus est facilisis
        quam lorem amet, nunc lectus.
      </div>
    </>
  );
}

export default BlogText;
