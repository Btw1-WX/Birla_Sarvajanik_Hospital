import {
  ExcellenceCard,
  Form,
  Services,
  Blog,
  BlogCard,
  TestimonialCard,
  NewsSection,
  Navbar,
} from "../../components";

import img from "../../assets/female-doctor-her-patient-shaking-hands-consultation.png";
import gallery1 from "../../assets/image 2.png";
import gallery2 from "../../assets/image 3.png";
import gallery3 from "../../assets/image 4.png";

import "./Home.css";

function Home() {
  return (
    <div className="wrapper">
      <Navbar />
      <div className="excel">
        <h2 className="home-heading">
          OUR CENTRES OF <span>EXCELLENCE</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consetur adipiscing elit. Semper ultrices
          sed adipiscing malesuada aliquam nisl fusce sit. Scelerisque
          suspendisse feugiat lectus nulla ullamcorper porttitor purus enim.
          Volutpat mattis amet semper volutpat odio. Risus faucibus interdum
          volutpat nibh venenatis.
        </p>

        <div className="excel-card">
          <div>
            <ExcellenceCard />
          </div>
          <div className="blog-card__card-sub">
            <ExcellenceCard />
          </div>
          <div className="blog-card__card-sub">
            <ExcellenceCard />
          </div>
        </div>
      </div>

      <Services />

      <div className="form-div">
        <img src={img} alt="" />
        <Form />
      </div>

      <TestimonialCard />

      <div className="gallery">
        <div className="gallery-1">
          <h2 className="home-heading">Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at
            amet eu, non vel netus duis enim quis. Arcu nibh nam eget lectus
            lacus mauris. Tellus in ut aliquam neque mi enim. Accumsan eget
            adipiscing lacinia lacus viverra tortor, feugiat. In amet, morbi
            tincidunt bibendum. In urna consectetur elementum id malesuada
            molestie. Posuere nunc et amet amet.
          </p>
          <div>
            <button className="btn btn-primary">Explore</button>
            <button className="btn btn-outline">Virtual Tour</button>
          </div>
        </div>
        <div className="gallery-2">
          <div>
            <img src={gallery2} alt="" />
          </div>
          <div>
            <img src={gallery3} alt="" />
            <img src={gallery1} alt="" />
          </div>
        </div>
      </div>

      <NewsSection />

      <BlogCard />

      <div className="international-patient">
        <h2 className="home-heading text-center">INTERNATIONAL PATIENTS</h2>
        <div className="form-div">
          <div>
            <img src={gallery1} alt="" />
          </div>
          <div className="patient-blog">
            <Blog text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at amet eu, non vel netus duis enim quis. Arcu nibh nam eget lectus lacus mauris. Tellus in ut aliquam neque mi enim. Accumsan eget adipiscing lacinia lacus viverra tortor, feugiat. In amet, morbi tincidunt bibendum. In urna consectetur elementum id malesuada molestie. Posuere nunc et amet amet." />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
