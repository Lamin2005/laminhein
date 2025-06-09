import {
  faHtml5,
  faCss,
  faJs,
  faReact,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./About.css"
import { useTheme } from "../context/ThemeContext";

let Skill = () => {

  let {darkMode} = useTheme();

  return (
    <div className="skill-section">
      <div className="language">
        <FontAwesomeIcon icon={faHtml5} className="html"/> <span  style={{ color: `${darkMode ? "white" : "black"}` }}>Html</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faCss} className="css" />
        <span  style={{ color: `${darkMode ? "white" : "black"}` }}>Css</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faJs} className="js" />
        <span  style={{ color: `${darkMode ? "white" : "black"}` }}>JavaScript</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faReact} className="react" />
       <span  style={{ color: `${darkMode ? "white" : "black"}` }}>React</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faPhp} className="php" />
       <span  style={{ color: `${darkMode ? "white" : "black"}` }}>php</span>
      </div>
    </div>
  );
};

export default Skill;
