import React from "react";
import SocialLinks from "./SocialLinks"
const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Temple University</h3>
          <p className="info">
            Bachelor of Science in Computer Science
            <span>&bull;</span>
            <em className="date">May 2017</em>
          </p>
          <p>
              During my time at Temple University, I had the opportunity to
              volunteer for a fantastic organization called
              <a href="http://letsgetready.org/" target="_blank"> Let's Get Ready! </a>
              as a math coach for SAT prep. After a semester of Volunteering as a math coach,
              I became the joint site director for the Temple University chapter overseeing 12 coaches
              and over 60 highschool students.
          </p>
        </div>
      </div>
      <div className="row item">
        <div className="twelve columns">
          <h3>Community College of Philadelphia</h3>
          <p className="info">
            Associate in Science - Computer Science
            <span>&bull;</span>
            <em className="date">December 2015</em>
          </p>
          <p>
            I started attending in 2008 and changed my major 3 times while often
            taking long breaks in-between. I was not sure of what I wanted to do
            with myself but community college gave me the time to find myself
            without accumulating massive student loans. I eventually found my calling once
            I saw what my brother was working on for his computer science classes.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Education;
