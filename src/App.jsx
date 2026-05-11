import { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import AIGuide from "./components/AIGuide";
import "./index.css";

export default function App() {
  const [scrollPct, setScrollPct] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const s = document.documentElement;
      const pct = (s.scrollTop / (s.scrollHeight - s.clientHeight)) * 100;
      setScrollPct(pct);
      setNavScrolled(s.scrollTop > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="app">
      <div className="progress-bar" style={{ width: `${scrollPct}%` }} />
      <NavBar scrolled={navScrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <AIGuide />
      <footer className="footer">
        <p>© 2026 <span className="accent">Vinisha</span>. Crafted with code.</p>
        <p className="muted">B.Tech CS · Asansol Engineering College</p>
      </footer>
    </div>
  );
}
