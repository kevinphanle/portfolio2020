import React from "react";

import self from "../../images/sun-self.jpg";
import values from "./values";
import SkillsList from "./skills/skill_list";

const About = (props) => {
  return (
    <div className="about" id="about" ref={props.ref}>
      <div className="about-me">
        <h1 data-aos="fade-right">About</h1>

        <ul className="values" data-aos="fade-left">
          {values.map((value, i) => {
            return (
              <li className="value" key={i}>
                <div className={`icon-${value.icon}`}></div>
                <h4>{value.name}</h4>
                <p>{value.desc}</p>
              </li>
            );
          })}
        </ul>

        <div className="about-container">
          <div className="about-img" data-aos="fade-right">
            <img src={self} alt="" data-aos="zoom-out" />
          </div>
          <div className="about-info-container" data-aos="fade-left">
            <p className="about-statement">
              I am a <span>full stack web developer</span>, leaning more towards
              the frontend. I have a passion for clean code and pixel perfect
              design.{" "}
            </p>

            {/* <p>I care about:</p> */}

            {/* <ul className='about-bio'>
              <li>
                Kevin Phan Le
              </li>
              <li>
                25 years young
              </li>
              <li>
                Vietnamese American
              </li>
              <li>
                English + Vietnamese
              </li>
              <li>
                Volleyball Enthusiast
              </li>
              <li>
                PS4 Gamer
              </li>
              <li>
                Hiker
              </li>
              <li>
                Watercolor Painter
              </li>
              <li>
                Tinkerer
              </li>
            </ul> */}

            {/* <a className='resume-btn' href={resume}>
              Download cv
            </a> */}
          </div>
        </div>

        <SkillsList />
      </div>
    </div>
  );
};

export default About;
