import "./Header.css";
import { useTheme } from "../context/ThemeContext";
import laminhein from "../assets/laminhein.png";
import TypingEffect from "./TypingEffect";
import Swal from "sweetalert2";
import {
  faGithub,
  faFacebook,
  faYoutube,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  let { darkMode } = useTheme();

  let gocontact = () => {
    let contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
    }
  };

  let DownloadCv = () => {
    Swal.fire({
      title: "Coming Soon!",
      text: "My CV will be available for download shortly.",
      icon: "info",
      confirmButtonText: "Got it!",
      confirmButtonColor: "#00d1ff",
    });
  };

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
        <div className="buttons">
          <button className="contact" onClick={gocontact}>
            Contact
          </button>
          <button className="cv" onClick={DownloadCv}>Download CV</button>
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
