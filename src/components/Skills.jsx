import { useEffect, useRef } from "react";

const categories = [
  { title: "Languages", icon: "⌨️", tags: ["Java", "Python", "JavaScript", "C", "SQL"] },
  { title: "Frontend", icon: "🖥️", tags: ["React", "HTML5", "CSS3", "Vite", "Tailwind CSS"] },
  { title: "Backend", icon: "⚙️", tags: ["Node.js", "Express.js", "REST APIs", "JWT", "JSP"] },
  { title: "Database & Cloud", icon: "🗄️", tags: ["MongoDB", "MySQL", "Firebase", "Git", "GitHub"] },
  { title: "AI / ML", icon: "🧠", tags: ["Python ML", "OpenCV", "Genetic Algorithms", "PSO", "Groq API"] },
  { title: "Tools", icon: "🔧", tags: ["VS Code", "Postman", "npm", "Power BI", "Stripe API"] },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("visible"), i * 80);
        }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref}>
      <div className="reveal">
        <p className="section-label">What I work with</p>
        <h2 className="section-title">Skills & Tech Stack</h2>
      </div>
      <div className="skills-grid">
        {categories.map(({ title, icon, tags }) => (
          <div className="skill-category reveal" key={title}>
            <div className="skill-cat-title"><span>{icon}</span>{title}</div>
            <div className="skill-tags">
              {tags.map(t => <span className="skill-tag" key={t}>{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
