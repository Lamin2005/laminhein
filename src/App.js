import "./App.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <div className="nav">
          <Nav/>
        </div>
        <div id="home">
          <Header />
        </div>
        <div id="about" style={{ height: "100vh", padding: "2rem",backgroundColor:"blue" }}>
          About
        </div>
        <div id="project" style={{ height: "100vh", padding: "2rem" }}>
          Project
        </div>
        <div id="contact" style={{ height: "100vh", padding: "2rem" }}>
          Contact
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
