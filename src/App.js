import "./App.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import About from "./component/About";
import { ThemeProvider } from "./context/ThemeContext";
import Project from "./component/Project";
import Contact from "./component/Contect";
import Footer from "./component/Footer";
import React, { useRef, useEffect, useState } from "react";

function App() {
   const heroRef = useRef();
  const [showNav, setShowNav] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setShowNav(true);
          setHasAnimated(true); // ✅ only one time trigger
        }
      },
      { threshold: 0.4 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, [hasAnimated]);

  return (
    <ThemeProvider>
      <div className="App">
        <nav className="nav">
          <Nav show={showNav}/>
        </nav>
        <section id="home" ref={heroRef}>
          <Header />
        </section>
        <section id="about" style={{ height: "70vh", padding: "2rem" }}>
          <About />
        </section>
        <section id="project" style={{ padding: "2rem" }}>
          <Project />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
