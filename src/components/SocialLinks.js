import React from "react";
import {
  FaGithubSquare,
  FaLinkedin,
  FaMedium,
  FaFileTextO
} from "react-icons/lib/fa";
import Resume from "../assets/resume/AlexanderRiveraResume2018.pdf";

const SocialLinks = () => (
  <ul className="social">
    <li>
        <a href="https://github.com/ariveralee" target="_blank">
            <FaGithubSquare />
        </a>
    </li>

    <li>
        <a href="https://www.linkedin.com/in/ariveralee/" target="_blank">
            <FaLinkedin />
        </a>
    </li>

    <li>
        <a href={ Resume } target="_blank">
            <FaFileTextO />
        </a>
    </li>
    <li>
        <a href="https://medium.com/@alexanderlrivera" target="_blank">
            <FaMedium />
        </a>
    </li>

  </ul>
);

export default SocialLinks;
