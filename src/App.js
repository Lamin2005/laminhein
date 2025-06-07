import "./App.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import About from "./component/About";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <nav className="nav">
          <Nav/>
        </nav>
        <section id="home">
          <Header />
        </section>
        <section id="about" style={{ height: "80vh", padding: "2rem", }}>
         <About/>
        </section>
        <section id="project" style={{ height: "100vh", padding: "2rem" }}>
          Project
        </section>
        <section id="contact" style={{ height: "100vh", padding: "2rem" }}>
          Contact
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
