import "./Blogs.css";

import { BlogText, Card, Grid, Navbar, NextPage } from "../../components";

const Blogs = () => {
  return (
    <div>
      <Navbar />
      <BlogText />
      <div className="card-div">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <NextPage />
    </div>
  );
};

export default Blogs;
