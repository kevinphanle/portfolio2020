import React from "react";
import SocialIcon from "./social_icon";

const Footer = (props) => {
  return (
    <footer className="footer">
      <a href="#home" className="returntotop-btn">
        <span className="icon-arrow-right"></span>
      </a>

      <div className="footer-content">
        <div className="left">
          <h3>Reach me at: </h3>

          <div className="contact">
            <a
              href="mailto: kevinphanle11@gmail.com"
              className="email"
              target="_blank"
              rel="noopener noreferrer"
            >
              kevinphanle11@gmail.com
            </a>
            <p>(408) 705 3276</p>
          </div>
          <p className="copyright">
            Kevin Lê <span>©2020</span>
          </p>
        </div>
        <div className="right">
          <ul className="social-icons">
            {socialIcons.map((socialicon, i) => {
              return <SocialIcon key={i} icon={socialicon.icon} />;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

const socialIcons = [
  { icon: "icon-facebook" },
  { icon: "icon-github" },
  { icon: "icon-linkedin" },
];

export default Footer;
