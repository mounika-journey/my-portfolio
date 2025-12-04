import React from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub
} from "react-icons/fa";
import {
  SiMongodb, SiExpress, SiPostman, SiFirebase,
  SiRedux, SiTailwindcss, SiVite, SiNetlify, SiRender, SiNpm
} from "react-icons/si";

export default function SkillsSection() {
  const container = {
    padding: "80px 20px",
    background: "linear-gradient(135deg,#2a0a4a,#3b0f5f,#22074a)",
    minHeight: "100vh",
    textAlign: "center",
    color: "white",
  };

  const mainCard = {
    backdropFilter: "blur(20px)",
    background: "rgba(255,255,255,0.12)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.20)",
    padding: "30px 22px",
    maxWidth: "900px",
    margin: "0 auto",
  };

  const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(3,1fr)",
    gap: "16px",
    marginTop: "15px",
  };

  const card = {
    background: "rgba(255,255,255,0.08)",
    padding: "18px 10px",
    borderRadius: "14px",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center",
    transition: "0.3s ease",
  };

  const icon = {
    fontSize: "30px",
    marginBottom: "6px",
  };

  const label = {
    fontSize: "13px",
    fontWeight: 600,
  };

  const techStack = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#ff5722" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#2965f1" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "Vite", icon: <SiVite />, color: "#a463f2" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
    { name: "Redux", icon: <SiRedux />, color: "#9c27b0" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#4caf50" },
    { name: "Express", icon: <SiExpress />, color: "#ffffff" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#4db33d" },
  ];

  const tools = [
    { name: "Postman", icon: <SiPostman />, color: "#f76935" },
    { name: "Netlify", icon: <SiNetlify />, color: "#00ad9f" },
    { name: "Render", icon: <SiRender />, color: "#9559e6" },
    { name: "NPM", icon: <SiNpm />, color: "#d32f2f" },
    { name: "Firebase", icon: <SiFirebase />, color: "#ffa000" },
    { name: "GitHub", icon: <FaGithub />, color: "white" },
  ];

  return (
    <section id="skills" style={container}>
      <h2
        style={{
          fontSize: "34px",
          fontWeight: "800",
          color: "#7ed6ff",
          marginBottom: "25px",
        }}
      >
        My Skills ⚡
      </h2>

      <div style={mainCard}>
        {/* TECH STACK */}
        <h3 style={{ fontSize: "18px", marginBottom: "12px", color: "#d4e7ff" }}>
          💻 Tech Stack
        </h3>

        <div style={grid}>
          {techStack.map((item) => (
            <div
              key={item.name}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = `0 0 18px ${item.color}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ ...icon, color: item.color }}>{item.icon}</div>
              <p style={label}>{item.name}</p>
            </div>
          ))}
        </div>

        {/* TOOLS */}
        <h3
          style={{
            marginTop: "28px",
            fontSize: "18px",
            color: "#ffd2d2",
          }}
        >
          🧰 Tools I Use
        </h3>

        <div style={grid}>
          {tools.map((item) => (
            <div
              key={item.name}
              style={card}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.boxShadow = `0 0 18px ${item.color}55`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ ...icon, color: item.color }}>{item.icon}</div>
              <p style={label}>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
