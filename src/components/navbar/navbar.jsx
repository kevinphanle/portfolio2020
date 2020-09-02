import React, { useState, useEffect, useRef } from "react";
import resume from "../../files/Kevin_Le_Resume.pdf";

import self from "../../images/self.jpg";

const Navbar = (props) => {
  const [fixed, setFixed] = useState(false);
  const [status, changeStatus] = useState("home");

  const navRef = useRef();
  navRef.current = fixed;

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight;
      if (navRef.current !== show) {
        setFixed(show);
      }

      if (window.scrollY < window.innerHeight) {
        changeStatus("home");
      } else if (window.scrollY > window.innerHeight) {
        let aboutEle = document.querySelector("#about");
        let aboutOffsetTop = aboutEle.getBoundingClientRect().top;
        let aboutPos = window.scrollY + aboutOffsetTop - 125;

        let workEle = document.querySelector("#work");
        let workOffsetTop = workEle.getBoundingClientRect().top;
        let workPos = window.scrollY + workOffsetTop - 125;

        if (window.scrollY > workPos) {
          changeStatus("work");
        } else if (window.scrollY > aboutPos) {
          changeStatus("about");
        }
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // function statusChange(state) {
  //   changeStatus(state);
  //   console.log("state: ", state);
  // }

  let styles = {
    color: "#FCA311",
  };

  return (
    <nav className={fixed ? "navbar fixed" : "navbar"}>
      <div className="nav-content">
        <div className="nav-img">
          <a href="#home">
            <img src={self} alt="brandimage" />
          </a>
          Kevin Lê
        </div>

        <ul className="nav-menu">
          <li>
            <a
              href="#home"
              className="nav-btn"
              style={{ color: status === "home" ? styles.color : "white" }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-btn"
              style={{ color: status === "about" ? styles.color : "white" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#work"
              className="nav-btn"
              style={{ color: status === "work" ? styles.color : "white" }}
            >
              portfolio
            </a>
          </li>

          <li>
            <a
              href={resume}
              className="nav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
              <span className="icon-arrow-right external"></span>
            </a>
          </li>
          {/* <li>
            <a
              href="mailto: kevinphanle11@gmail.com"
              className="nav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email me
              <span className="icon-arrow-right external"></span>
            </a>
          </li> */}
        </ul>

        <ul className="nav-social">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/kevinphanle"
            >
              <span className="icon-facebook"></span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kevinphanle"
            >
              <span className="icon-github"></span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/kevin-le-b28887158/"
            >
              <span className="icon-linkedin"></span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
