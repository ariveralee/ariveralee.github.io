import React from "react";
import Banner from "./Banner";
import Navigation from "./Navigation";
import ScrollDown from "./ScrollDown";

const Header = () => (
  <header id="home">
    <Navigation />
    <Banner />
    <ScrollDown />
  </header>
);

export default Header;
