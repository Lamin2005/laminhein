import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../context/ThemeContext";

let Footer = () => {

    let {darkMode} = useTheme();
    let date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="icons">
        <div className="icon">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </div>
        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </div>
      </div>
      <div className="copyright">
        <p style={{ color: `${darkMode ? "antiquewhite" : "black"}` }} >Copyright <span>{date}</span> La Min Hein. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
