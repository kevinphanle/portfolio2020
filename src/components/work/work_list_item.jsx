import React, { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";

const WorkListItem = (props) => {
  const item = props.item;

  const [overlayStatus, showOverlay] = useState(false);
  const nodeRef = useRef(null);

  const handleClick = () => {
    props.callback(props.index);
    props.setModal(true);
  };

  return (
    <li
      className="gallery-item"
      onMouseOver={() => showOverlay(true)}
      onMouseLeave={() => showOverlay(false)}
      data-aos="fade-up"
    >
      <div className="item-image">
        {overlayStatus && (
          <div className="overlay animate__animated animate__fadeIn animated__fast">
            <div className="item-info">
              <div className="item-name">{item.name}</div>
              <p className="item-tech">{item.technologies}</p>
            </div>
            <div className="learn-more-btn" onClick={handleClick}>
              Learn More
            </div>
          </div>
        )}

        <img src={item.images.main} alt="" />
      </div>
    </li>
  );
};

export default WorkListItem;
