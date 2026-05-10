import { useState, useRef, useEffect } from "react";

const QUICK_PROMPTS = [
  "What can Vinisha build?",
  "Show me her projects",
  "How to contact her?",
  "What's her tech stack?",
];

const SYSTEM_PROMPT = `You are Vini-Bot, a friendly AI assistant on Vinisha's developer portfolio website.
You help visitors navigate the site and learn about Vinisha.

Here are the facts about Vinisha:
- Full name: Vinisha Victor
- B.Tech Computer Science (Honors) student at Asansol Engineering College
- Skills: Java, Python, JavaScript, React, Node.js, Express, MongoDB, MySQL, Firebase, HTML, CSS, Tailwind, JWT, REST APIs, OpenCV, SQL, C, Vite, Git, GitHub, Power BI
- Projects:
  1. Daily Brief Builder - AI news/weather app (React+Vite+Node+Groq LLaMA+OpenWeatherMap)
  2. StarWars Shop - Full-stack e-commerce (React+Node+MongoDB+JWT+Stripe)
  3. Focuzy - Pomodoro+face detection (React+Firebase+OpenCV)
  4. SnapBuy - E-commerce (JSP+MySQL)
  5. Evolutionary Learning for Biomedical Data - ML (Python+Genetic Algorithms+PSO)
- Internships: Oasis Infobyte (Apr-May 2024), Prodigy Infotech (Jul-Aug 2024)
- Email: studyvi@gmail.com
- LinkedIn: https://www.linkedin.com/in/study-vi-5811b840a/
- GitHub: https://github.com/Vinisha-Victor
- Interested in Master's in Data Science/AI in Europe (2026)

Keep responses short (2-3 sentences max), friendly, and helpful. 
You can guide users to scroll to sections by saying things like "scroll down to Projects" or "check out the Skills section".
Use emojis sparingly. Never make up information not listed above.`;

export default function AIGuide() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hey! 👋 I'm Vini-Bot. Ask me anything about Vinisha or her work!" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const send = async (text) => {
    const msg = text || input.trim();
    if (!msg || loading) return;
    setInput("");
    const newMessages = [...messages, { role: "user", content: msg }];
    setMessages(newMessages);
    setLoading(true);

    // Simulate AI response based on input
    setTimeout(() => {
      let reply = "";
      const lowerMsg = msg.toLowerCase();

      if (lowerMsg.includes("what can vinisha build") || lowerMsg.includes("build")) {
        reply = "Vinisha can build full-stack web apps, AI-powered tools, e-commerce platforms, and machine learning projects. Check out her projects section below!";
        setTimeout(() => scrollToSection("projects"), 1500);
      } else if (lowerMsg.includes("show me her projects") || lowerMsg.includes("projects")) {
        reply = "Here are Vinisha's amazing projects!";
        setTimeout(() => scrollToSection("projects"), 1000);
      } else if (lowerMsg.includes("contact") || lowerMsg.includes("how to")) {
        reply = "You can reach Vinisha at studyvi@gmail.com or connect on LinkedIn: linkedin.com/in/study-vi-5811b840a/";
        setTimeout(() => scrollToSection("contact"), 1500);
      } else if (lowerMsg.includes("tech stack") || lowerMsg.includes("skills")) {
        reply = "Vinisha's tech stack includes Java, Python, JavaScript, React, Node.js, MongoDB, MySQL, and more. See the Skills section for details!";
        setTimeout(() => scrollToSection("skills"), 1500);
      } else if (lowerMsg.includes("about") || lowerMsg.includes("who")) {
        reply = "Vinisha is a B.Tech Computer Science student at Asansol Engineering College. She's passionate about AI, web development, and machine learning!";
        setTimeout(() => scrollToSection("about"), 1500);
      } else {
        reply = "I'm here to help! Ask about Vinisha's skills, projects, or how to contact her. You can also scroll through the site to learn more.";
      }

      setMessages(prev => [...prev, { role: "assistant", content: reply }]);
      setLoading(false);
    }, 1000); // Simulate loading time
  };

  const handleKey = (e) => {
    if (e.key === "Enter") send();
  };

  return (
    <div className="ai-guide">
      {open && (
        <>
          <div className="ai-bubble" style={{ padding: "0", overflow: "hidden", maxWidth: "300px", minWidth: "260px" }}>
            {/* Header */}
            <div style={{
              padding: "12px 16px",
              borderBottom: "1px solid rgba(0,245,160,0.1)",
              display: "flex", alignItems: "center", gap: "8px",
              background: "rgba(0,245,160,0.05)"
            }}>
              <div style={{
                width: "28px", height: "28px", borderRadius: "50%",
                background: "linear-gradient(135deg, #00F5A0, #0070F3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "0.9rem", animation: "avatarBounce 3s ease-in-out infinite"
              }}>🤖</div>
              <div>
                <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>Vini-Bot</div>
                <div style={{ fontSize: "0.62rem", color: "var(--accent)", fontFamily: "JetBrains Mono, monospace" }}>● online</div>
              </div>
            </div>

            {/* Messages */}
            <div style={{
              padding: "12px", maxHeight: "220px", overflowY: "auto",
              display: "flex", flexDirection: "column", gap: "8px"
            }}>
              {messages.map((m, i) => (
                <div key={i} style={{
                  padding: "8px 12px",
                  borderRadius: m.role === "user" ? "12px 12px 4px 12px" : "12px 12px 12px 4px",
                  background: m.role === "user" ? "rgba(0,245,160,0.1)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${m.role === "user" ? "rgba(0,245,160,0.2)" : "var(--border)"}`,
                  fontSize: "0.8rem", lineHeight: 1.5, color: "var(--text)",
                  alignSelf: m.role === "user" ? "flex-end" : "flex-start",
                  maxWidth: "85%",
                }}>
                  {m.content}
                </div>
              ))}
              {loading && (
                <div style={{
                  padding: "8px 12px",
                  borderRadius: "12px 12px 12px 4px",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid var(--border)",
                  alignSelf: "flex-start",
                }}>
                  <div className="ai-bubble-typing">
                    <span /><span /><span />
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Quick prompts */}
            <div style={{ padding: "0 12px 8px" }}>
              <div className="ai-quick-btns" style={{ justifyContent: "flex-start" }}>
                {QUICK_PROMPTS.map(q => (
                  <button key={q} className="ai-quick-btn" onClick={() => send(q)}>{q}</button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div style={{ padding: "8px 12px 12px" }} className="ai-input-row">
              <input
                className="ai-input"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask me anything..."
              />
              <button className="ai-send-btn" onClick={() => send()}>→</button>
            </div>
          </div>
        </>
      )}

      <button
        className={`ai-avatar-btn ${open ? "open" : ""}`}
        onClick={() => setOpen(o => !o)}
        title="Chat with Vini-Bot"
      >
        {open ? "✕" : "🤖"}
      </button>
    </div>
  );
}
