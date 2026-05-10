import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={ref}>
      <div className="contact-inner">
        <div className="reveal">
          <p className="section-label">Let's connect</p>
          <h2 className="section-title">GET IN TOUCH</h2>
          <p className="contact-desc">
            Open to internships, collaborations, and interesting projects. Whether you have
            an opportunity or just want to chat about tech — reach out anytime.
          </p>
        </div>
        <div className="contact-links reveal">
          <a href="mailto:studyvi@gmail.com" className="contact-link">
            <span>✉️</span> studyvi@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/study-vi-5811b840a/" target="_blank" rel="noreferrer" className="contact-link">
            <span>💼</span> LinkedIn
          </a>
          <a href="https://github.com/Vinisha-Victor" target="_blank" rel="noreferrer" className="contact-link">
            <span>🐙</span> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
