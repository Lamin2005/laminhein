import { useTheme } from "../context/ThemeContext";
import "./About.css";

let Education = () => {

    let {darkMode} = useTheme();

    return(
        <div className="education-section">
           <div className="text">
             <span>B.C.Sc</span>
            <p style={{ color: `${darkMode ? "white" : "black"}` }}>I am a third year of computer science student in Computer University of Pathein.</p>
           </div>
        </div>
       
    );
}

export default Education;