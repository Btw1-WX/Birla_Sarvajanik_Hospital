import { Route, Routes } from "react-router-dom";
import { About, Blogs, Booking, Home } from "./pages/";
import { Appointment, ContactUs, Footer, Header } from "./components";

import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <Appointment />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
