import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref}>
      <div className="reveal">
        <p className="section-label">Who I am</p>
        <h2 className="section-title">Builder. Problem Solver.<br />Tech Enthusiast.</h2>
      </div>
      <div className="about-grid reveal">
        <div className="about-text">
          <p>
            I'm a <strong>B.Tech Computer Science (Honors)</strong> student at Asansol
            Engineering College, focused on building full-stack applications, AI-powered
            tools, and data-driven systems. I believe in learning by doing — every project
            I build solves a real problem.
          </p>
          <p>
            My stack spans <strong>React, Node.js, MongoDB, Firebase, Python</strong>, and
            everything in between. I've interned at <strong>Oasis Infobyte</strong> and{" "}
            <strong>Prodigy Infotech</strong>, contributing to real-world projects across
            frontend and full-stack domains.
          </p>
          <p>
            Currently exploring <strong>Data Science and AI/ML</strong>, with plans to
            pursue a Master's degree in Europe in 2026.
          </p>
          <div className="tech-list">
            {["React", "Node.js", "MongoDB", "Python", "Firebase", "Tailwind", "JWT", "REST APIs"].map(t => (
              <span className="tech-pill" key={t}>{t}</span>
            ))}
          </div>
        </div>
        <div className="about-right">
          {[
            { num: "5+", label: "Projects Built" },
            { num: "2×", label: "Internships Completed" },
            { num: "8+", label: "Technologies Used" },
            { num: "∞", label: "Lines of Code Written" },
          ].map(({ num, label }) => (
            <div className="stat-card" key={label}>
              <div className="stat-num">{num}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
