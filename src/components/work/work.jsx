import React from "react";
import WorkListItem from "./work_list_item";
import work from "./work_files";
import { useState } from "react";
import Modal from "./modal/modal";

import items from "./work_files";

const Work = (props) => {
  let [itemIndex, setItemIndex] = useState(0);
  const [openModal, setModal] = useState(false);

  const generateWorkItems = (arr) => {
    return arr.map((workItem, i) => {
      return (
        <WorkListItem
          item={workItem}
          index={i}
          key={i}
          callback={setItemIndex}
          setModal={setModal}
        />
      );
    });
  };

  return (
    <div className="work" id="work">
      <div className="projects">
        <h1 data-aos="fade-right">Projects</h1>
        {openModal && (
          <Modal
            item={items[itemIndex]}
            status={openModal}
            openModal={setModal}
          />
        )}
        <ul className="work-gallery">{generateWorkItems(work)}</ul>
      </div>
    </div>
  );
};

export default Work;
