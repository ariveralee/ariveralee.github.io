import React from "react";
import { FaPlus, FaTag } from "react-icons/lib/fa";

import Wife from "../assets/images/portfolio/wife.jpg";
import Children from "../assets/images/portfolio/children.jpg";

const Interests = () => (
  <section id="interests">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>My Interests</h1>

        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-01" title="">
                <img alt="" src={Wife} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>My wife</h5>
                    <p>Despite every challenge I faced while in school, she was there to support and encourage me. Without her, I would not be where I am today.</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

          <div className="columns portfolio-item">
            <div className="item-wrap">
              <a href="#modal-02" title="">
                <img alt="" src={Children} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>Our Children</h5>
                    <p>Nothing can compare to the smiles and love we receive from them each day. I do not want to give them everything I never had but to teach them everything I wish I knew.</p>
                  </div>
                </div>
                <div className="link-icon">
                  <FaPlus />
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default Interests;
