import "./About.css";
import laminhein from "../assets/laminhein.jpg";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import Skill from "./Skill";
import Experience from "./Experience";
import Education from "./Education";

let About = () => {
  let { darkMode } = useTheme();
  let [activeTab, setActiveTab] = useState("skill");

  return (
    <div className="about">
      <div className="about_img">
        <img src={laminhein} alt="laminhein_aboutimg" />
      </div>
      <div className="about_text">
        <h1>My story</h1>
        <p style={{ color: `${darkMode ? "white" : "black"}` }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nihil
          cumque dicta, quibusd fuga. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro nulla neque alias inventore quos fugiat
          dignissimos. Necessitatibus, distinctio tempora cumque facere velit
          libero excepturi voluptatem magnam exercitationem, animi, aperiam
          ullam?
        </p>
        <div className="skill">
          <div className="skill-header">
            <h4
              className={
                activeTab === "skill"
                  ? "activeTab"
                  : `${darkMode ? "aboutwhite" : "aboutdark"}`
              }
              onClick={() => {
                setActiveTab("skill");
              }}
            >
              Skill
            </h4>
            <h4
              className={
                activeTab === "experience"
                  ? "activeTab"
                  : `${darkMode ? "aboutwhite" : "aboutdark"}`
              }
              onClick={() => {
                setActiveTab("experience");
              }}
            >
              Experience
            </h4>
            <h4
              className={
                activeTab === "education"
                  ? "activeTab"
                  : `${darkMode ? "aboutwhite" : "aboutdark"}`
              }
              onClick={() => {
                setActiveTab("education");
              }}
            >
              Education
            </h4>
          </div>
          <div className="skill-main">
            {activeTab === "skill" && <Skill />}
            {activeTab === "experience" && <Experience/>}
            {activeTab === "education" && <Education />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
