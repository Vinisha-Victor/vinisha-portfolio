import { useEffect, useRef } from "react";

const projects = [
  {
    title: "Evolutionary Learning for Biomedical Data",
    badge: "ML / Research",
    desc: "ML research project using Genetic Algorithms and PSO for intelligent feature selection on biomedical datasets. Improves model accuracy by eliminating irrelevant features.",
    stack: ["Python", "Genetic Algorithms", "PSO", "Scikit-learn", "Pandas"],
    img: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80",
    github: "https://github.com/Vinisha-Victor/disease-prediction-system",
  },
  {
    title: "Daily Brief Builder",
    badge: "AI / Full-Stack",
    desc: "AI-powered personalized news & weather briefing app. Features per-user meme-themed profiles, animated SVG weather widgets, and LLaMA-generated daily summaries via Groq.",
    stack: ["React", "Vite", "Node.js", "Express", "Groq LLaMA", "OpenWeatherMap"],
    img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    github: "https://github.com/Vinisha-Victor/daily-brief-builder",
  },
  {
    title: "StarWars Shop",
    badge: "E-Commerce",
    desc: "Full-stack themed e-commerce app with JWT auth, product listings, cart, and Stripe payment integration. Dark galaxy aesthetic with Orbitron font.",
    stack: ["React", "Node.js", "MongoDB", "JWT", "Stripe", "Express"],
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    github: "https://github.com/Vinisha-Victor/star-wars-e-shop",
  },
  {
    title: "SnapBuy",
    badge: "E-Commerce",
    desc: "Functional e-commerce web app with product browsing, cart management, and order processing using server-side Java technology.",
    stack: ["JSP", "MySQL", "Java", "HTML", "CSS"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    github: "https://github.com/Vinisha-Victor/snapbuy",
  },
  {
    title: "Focuzy",
    badge: "Productivity / CV",
    desc: "Smart Pomodoro timer with real-time face detection to track focus sessions. Includes session history, analytics, and Firebase cloud sync.",
    stack: ["React", "Firebase", "OpenCV", "Python"],
    img: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=600&q=80",
    github: "https://github.com/Vinisha-Victor/Focuzy",
  },
  {
    title: "Bubble Shooter Webpage",
    badge: "Game / Web",
    desc: "Interactive bubble shooter game built as a web application. Features colorful bubbles, scoring system, and engaging gameplay.",
    stack: ["HTML", "CSS", "JavaScript"],
    img: "https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&q=80",
    github: "https://delicate-dusk-7d1634.netlify.app/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) setTimeout(() => e.target.classList.add("visible"), i * 100);
      }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref}>
      <div className="reveal">
        <p className="section-label">What I've built</p>
        <h2 className="section-title">Featured Projects</h2>
      </div>
      <div className="projects-grid">
        {projects.map(({ title, badge, desc, stack, img, github }) => (
          <div className="project-card reveal" key={title}>
            <div className="project-img-wrap">
              <img src={img} alt={title} loading="lazy" />
              <div className="project-img-overlay" />
              <span className="project-img-badge">{badge}</span>
            </div>
            <div className="project-body">
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{desc}</p>
              <div className="project-stack">
                {stack.map(s => <span className="stack-tag" key={s}>{s}</span>)}
              </div>
              <a href={github} target="_blank" rel="noreferrer" className="project-link-btn">
                {github.includes("github.com") ? "View on GitHub →" : "View Project →"}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
