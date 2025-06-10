import "./App.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import About from "./component/About";
import { ThemeProvider } from "./context/ThemeContext";
import Project from "./component/Project";
import Contact from "./component/Contect";
import Footer from "./component/Footer";

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
        <section id="about" style={{ height: "70vh", padding: "2rem", }}>
         <About/>
        </section>
        <section id="project" style={{padding: "2rem"}}>
          <Project/>
        </section>
        <section id="contact" style={{ height: "100vh", padding: "2rem",display:"flex",justifyContent:"space-around",alignItems:"center" }}>
          <Contact/>
        </section>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
