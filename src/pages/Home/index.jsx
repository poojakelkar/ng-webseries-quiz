import React from "react";
import Footer from "../../components/Footer";
import FrontPage from "../../components/FrontPage";
import Navbar from "../../components/Navbar";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <FrontPage />
      <Footer />
    </div>
  );
};

export default Home;
