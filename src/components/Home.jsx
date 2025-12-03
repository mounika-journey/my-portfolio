import React, { useEffect, useRef } from "react";

function Home() {
  const typingRef = useRef(null);

  useEffect(() => {
    const texts = [
      "MERN Stack Developer",
      "React.js Enthusiast",
      "Node.js Backend Builder",
      "MongoDB & Express.js Developer",
    ];

    let index = 0;
    let charIndex = 0;

    const type = () => {
      if (typingRef.current) {
        typingRef.current.textContent = texts[index].slice(0, charIndex);
      }
      charIndex++;

      if (charIndex > texts[index].length) {
        setTimeout(() => {
          charIndex = 0;
          index = (index + 1) % texts.length;
        }, 900);
      }

      setTimeout(type, 120);
    };
    type();
  }, []);

  return (
    <section id="home" style={styles.section}>
      {/* Glow backgrounds */}
      <div style={styles.glowTop}></div>
      <div style={styles.glowBottom}></div>

      {/* CONTENT */}
      <div style={styles.contentWrapper}>
        <h1 style={styles.title}>
          Hi, I'm{" "}
          <span style={{ background: "linear-gradient(90deg,#4fd1ff,#bb61ff)", WebkitBackgroundClip: "text", color: "transparent" }}>
            Mounika
          </span>
        </h1>

        <h2 ref={typingRef} style={styles.typing}></h2>

        <p style={styles.subtitle}>
          I build fast, responsive and modern web applications using MERN stack.
        </p>

        <div style={styles.buttonRow}>
          <a href="#projects" style={styles.btnPrimary}>Projects</a>
          <a href="#contact" style={styles.btnOutline}>Hire Me</a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    width: "100%",
    background: "#000",
    color: "#fff",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 18px",
    textAlign: "center",
    overflow: "hidden",
  },

  glowTop: {
    position: "absolute",
    top: "-80px",
    left: "-60px",
    width: "180px",
    height: "180px",
    background: "rgba(0, 200, 255, 0.30)",
    borderRadius: "50%",
    filter: "blur(70px)",
  },

  glowBottom: {
    position: "absolute",
    bottom: "-100px",
    right: "-60px",
    width: "200px",
    height: "200px",
    background: "rgba(255, 0, 130, 0.25)",
    borderRadius: "50%",
    filter: "blur(80px)",
  },

  contentWrapper: {
    zIndex: 10,
    animation: "fadeUp 1.2s ease",
    maxWidth: "450px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "800",
    marginBottom: "8px",
  },

  typing: {
    fontSize: "18px",
    minHeight: "24px",
    marginBottom: "16px",
    fontWeight: "600",
    background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },

  subtitle: {
    fontSize: "14.5px",
    lineHeight: "1.6",
    color: "#e0e0e0",
    margin: "0 auto 20px",
    maxWidth: "360px",
  },

  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    marginTop: "10px",
  },

  btnPrimary: {
    padding: "10px 22px",
    background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
    color: "#fff",
    borderRadius: "30px",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "15px",
  },

  btnOutline: {
    padding: "10px 22px",
    borderRadius: "30px",
    border: "2px solid #4fd1ff",
    color: "#4fd1ff",
    fontWeight: "700",
    textDecoration: "none",
    fontSize: "15px",
  },
};

/* Fade Animation */
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
@keyframes fadeUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}`;
document.head.appendChild(styleSheet);

export default Home;
