import "./About.css";
import laminhein from "../assets/laminhein.jpg"
import { useTheme } from "../context/ThemeContext";

let About = () => {

    let {darkMode} = useTheme();

    return(
        <div className="about">
            <div className="about_img">
                <img src={laminhein} alt="laminhein_aboutimg" />
            </div>
            <div className="about_text">
                <h1>My story</h1>
                <p style={{color:`${darkMode ? "white" :"black"}`}} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam nihil cumque dicta, quibusd fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla neque alias inventore quos fugiat dignissimos. Necessitatibus, distinctio tempora cumque facere velit libero excepturi voluptatem magnam exercitationem, animi, aperiam ullam?</p>
                <div className="skill">
                    <h4 style={{color:`${darkMode ? "white" :"black"}`}}>Skill</h4>
                    <h4 style={{color:`${darkMode ? "white" :"black"}`}}>Experience</h4>
                    <h4 style={{color:`${darkMode ? "white" :"black"}`}}>Education</h4>
                </div>
            </div>
        </div>
    );
}

export default About;