import React from "react";

import SkillBox from "../../chip/SkillBox";
import { skills } from "../../data/data";

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex ">
          <div className=" relative flex-1 flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
           
              {skills.map((skill) => {
                return (
                  <div className=" flex  gap-10 ">
                  <SkillBox
                    key={skill.id}
                    logo={skill.logo}
                    skill={skill.skill}
                  />
                   </div>
                );
              })}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
