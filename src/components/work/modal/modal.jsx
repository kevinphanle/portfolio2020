import React, { useRef, useEffect } from "react";

const Modal = (props) => {
  const item = props.item;
  let status = props.status;
  const node = useRef();

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return;
    } else {
      props.openModal(false);
      // outside click
    }
  };

  useEffect(() => {
    if (status) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="modal">
      <div className="details animate__animated animate__bounceIn" ref={node}>
        <span
          className="icon-x modal-close-btn"
          onClick={() => props.openModal(false)}
        ></span>
        <img src={item.images.mockup} alt="" className="details-img" />

        <div className="info-container">
          <h4 className="details-name">
            {item.name}
            <span className="details-category">{item.category}</span>
          </h4>
          <div className="details-info">
            <p className="item-desc">{item.description}</p>
            {/* <div className="detail-features">
              <p>Features: </p>
              <ul>
                {Array.from(item.features).map((feature, i) => {
                  return <li key={i}>{feature}</li>;
                })}
              </ul>
            </div> */}
          </div>
          <div className="buttons">
            <a href={item.links.github} className="github-link">
              Repo
            </a>
            <a
              className="details-link animate__animated animate__tada"
              href={item.links.live}
            >
              view site
              <span className="icon-arrow-right external"></span>
            </a>
          </div>
        </div>
        {/* <img src={item.images.mockup} alt="" />
        <img src={item.images.misc} className="detail-image-misc" alt="" />

        {item.videos
          ? Array.from(item.videos).map((link, i) => {
              return (
                <video key={i} src={link} autoplay="autoplay" loop></video>
              );
            })
          : null} */}
      </div>
    </div>
  );
};

export default Modal;
