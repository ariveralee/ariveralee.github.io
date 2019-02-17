import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Interests from "../components/Interests";
import Portfolio from "../components/Portfolio";
import Resume from "../components/Resume";


const IndexPage = () => (
  <div>
    <Header />
    <Portfolio />
    <Interests />
    <Resume />
    <Footer />
  </div>
);

export default IndexPage;
