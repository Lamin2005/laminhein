import "./Project.css";
import { projectList } from "./Project-list";
import { useTheme } from "../context/ThemeContext";

let Project = () => {
  let { darkMode } = useTheme();

  return (
    <div className="project-section">
      <h1>Projects</h1>
      <div className="project-list">
        {projectList.map((list) => {
          console.log(list);

          return (
            <div className="list" key={list.pid}>
              <div className="pimg">
                <img src={list.pimg} alt="Project_Image" />
              </div>
              <div className="planguages">
                <div
                  className={`language  ${darkMode ? "lwhite" : "lblack"} }`}
                >
                  {list.planguages[0]}
                </div>
                <div
                  className={`language  ${darkMode ? "lwhite" : "lblack"} }`}
                >
                  {list.planguages[1]}
                </div>
                <div
                  className={`language  ${darkMode ? "lwhite" : "lblack"} }`}
                >
                  {list.planguages[2]}
                </div>
              </div>
              <h3
                className={`pname  ${darkMode ? "pblue" : "pblack"} }`}
                style={{ color: `${darkMode ? "pwhite" : "pblack"}` }}
              >
                {list.ptilte}
              </h3>
              <p className={`${darkMode ? "pwhite" : "pblack"} }`}>
                {list.pdescription}
              </p>

              <a
                href={list.plink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                <button className="view_btn">View Project</button>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
