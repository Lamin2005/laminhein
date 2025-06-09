import "./Project.css";
import { projectList } from "./Project-list";

let Project = () => {
  return (
    <div className="project-section">
      <h1>Projects</h1>
      <div className="project-list">
        {projectList.map((list) => {
          return (
            <div className="list" key={list.id}>
              <div className="pimg"></div>
              <div className="planguages">
                <div className="language">{list.planguages[0]}</div>
                <div className="language">{list.planguages[1]}</div>
                <div className="language">{list.planguages[2]}</div>
              </div>
              <h3 className="pname">{list.ptilte}</h3>
              <p>{list.pdescription}</p>
             
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
