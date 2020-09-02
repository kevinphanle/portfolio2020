import React, { useState } from "react";

const SocialIcon = (props) => {
  const icon = props.icon;
  const [isHover, setHover] = useState(false);
  const handleHover = (e) => {
    console.log("hover");
    if (isHover) {
      setHover(false);
    } else {
      setHover(true);
    }
  };

  const btnClass = isHover
    ? `${icon} animate__animated animate__rotateIn animate__slow`
    : icon;
  return (
    <li>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.facebook.com/kevinphanle"
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <div className="flex-icon">
          <span className={btnClass}></span>
        </div>
      </a>
    </li>
  );
};

export default SocialIcon;
