import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";
import SocialLinks from "./SocialLinks";

import profilePic from "../assets/images/Profile.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
            I'm about to put some really fucking cool shit in here that will
            make me seem like an awesome person but in reality, I suck just
            as much as you do.
        </p>
        <span>
            <br/>
            <SocialLinks />
        </span>
      </div>
    </div>
  </section>
);

export default About;
