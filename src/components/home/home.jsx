import React from "react";
import Canvas from "./canvas";

const Home = (props) => {
  return (
    <div className="home" id="home">
      <div className="particles">
        <Canvas></Canvas>
      </div>
      <div className="home-content animate__animated animate__fadeIn">
        <h3>Hello World</h3>
        <h1>Kevin Lê</h1>
        <p>A Full Stack Web Developer.</p>
        <a
          href="#work"
          className="works-button animate__animated animate__pulse"
        >
          View work
          <span className="icon-arrow-right"></span>
        </a>
      </div>
    </div>
  );
};

export default Home;
