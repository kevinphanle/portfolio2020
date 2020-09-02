import React from "react";

import skills_list from "./skillslist";

const SkillsList = (props) => {
  return (
    <ul className="skill-list">
      {skills_list.map((skill, i) => {
        return (
          <li className="skill" key={i} data-aos="fade-up">
            <i className={`icon-${skill.icon}`}></i>
            {skill.name}
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
