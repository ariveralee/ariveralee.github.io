import React from "react";

const Skills = () => (
  <div className="row skill">
    <div className="three columns header-col">
      <h1>
        <span>Skills</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <p>
        I'm a firm believer that if you are not continously challenging yourself,
        then you are not growing as an individual. That is why I always try to learn
        the latest and promising trends in technology to help propel myself and my career.
        It's very hard to stay fluent in every language but listed below is what I have had experience
        with. I'm more than confident that I can pick up any language or technology and use it. 
      </p>

      <div className="skills">
        <ul>
            <h5> Languages & Databases </h5>
            <li>
                <em>
                    Javascript React
                </em>
            </li>
        </ul>

        <ul>
            <h5> Frameworks, Libraries & Build Tools </h5>
            <li>
                <em>
                    Android iOS
                </em>
            </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Skills;
