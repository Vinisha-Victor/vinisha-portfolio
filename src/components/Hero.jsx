import { useState, useEffect } from "react";

const phrases = [
  "Full-Stack Developer",
  "React & Node.js Engineer",
  "AI/ML Explorer",
  "CS Student @ AEC",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [pi, setPi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[pi];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(phrase.slice(0, ci + 1));
        if (ci + 1 === phrase.length) {
          setTimeout(() => setDeleting(true), 1600);
        } else {
          setCi(ci + 1);
        }
      } else {
        setText(phrase.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setPi((pi + 1) % phrases.length);
          setCi(0);
        } else {
          setCi(ci - 1);
        }
      }
    }, deleting ? 38 : 75);
    return () => clearTimeout(timeout);
  }, [ci, deleting, pi]);

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="orb orb1" />
        <div className="orb orb2" />
        <div className="orb orb3" />
        <div className="hero-grid" />
      </div>
      <div className="hero-content">
        <div className="hero-badge">
          <span className="badge-dot" />
          Open to opportunities
        </div>
        <h1 className="hero-name">
          <span style={{ color: "var(--text)" }}>HI, I'M</span>
          <br />
          <span className="name-green">VINISHA</span>
        </h1>
        <p className="hero-tagline">
          {text}<span className="typed-cursor" />
        </p>
        <p className="hero-desc">
          B.Tech Computer Science student building full-stack applications and
          AI-powered tools. I care about writing clean code, designing intuitive
          interfaces, and shipping things that actually work.
        </p>
        <div className="hero-ctas">
          <a href="#projects" className="btn-primary">View My Work</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
      <div className="hero-scroll">
        <div className="scroll-line" />
        scroll to explore
      </div>
    </section>
  );
}
