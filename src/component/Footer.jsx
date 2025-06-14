import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faYoutube,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "../context/ThemeContext";

let Footer = () => {
  let { darkMode } = useTheme();
  let date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="icons">
        <div className="icon">
          <a href="https://github.com/Lamin2005/">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/share/1DfXvAJ5BV/">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <div className="icon">
          <a href="http://www.youtube.com/@carbondioxidedioxide">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
        <div className="icon">
          <a href="https://t.me/laminhein1122">
            <FontAwesomeIcon icon={faTelegram} size="2x" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p style={{ color: `${darkMode ? "antiquewhite" : "black"}` }}>
          Copyright <span>{date}</span> La Min Hein. All right reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
