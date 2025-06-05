import "./Header.css";
import { useTheme } from "../context/ThemeContext";
import laminhein from "../assets/laminhein.png";
import TypingEffect from "./TypingEffect";
import {
  faGithub,
  faFacebook,
  faYoutube,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  let { darkMode } = useTheme();

  return (
    <div className="main">
      <div className="hero_text">
        <div className="text">
          <h3 style={{ color: `${darkMode ? "white" : "black"}` }}>
            Hi, My name is
          </h3>
          <h1>La Min Hein</h1>
          <TypingEffect />

          <p style={{ color: `${darkMode ? "white" : "black"}` }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
            minus quia ad laudantium. A ratione reprehenderit esse laboriosam
            ipsam aspernatur inventore vel neque consequatur, nostrum provident,
            impedit praesentium repellendus tempora?
          </p>
        </div>
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
        <div className="buttons">
          <button className="contact">Contact</button>
          <button className="cv">Download CV</button>
        </div>
      </div>
      <div className="hero_img">
        <div className="images">
          <div className="border fade-in float">
            <img src={laminhein} alt="laminhein_img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
