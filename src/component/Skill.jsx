import {
  faHtml5,
  faCss,
  faJs,
  faReact,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let Skill = () => {
  return (
    <div className="skill-section">
      <div className="language">
        <FontAwesomeIcon icon={faHtml5} className="html"/> <span>Html</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faCss} className="css" />
        <span>Css</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faJs} className="js" />
        <span>JavaScript</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faReact} className="react" />
       <span>React</span>
      </div>
      <div className="language">
        <FontAwesomeIcon icon={faPhp} className="php" />
       <span>php</span>
      </div>
    </div>
  );
};

export default Skill;
