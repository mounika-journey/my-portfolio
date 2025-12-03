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
        }, 800);
      }

      setTimeout(type, 120);
    };
    type();
  }, []);

  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      minHeight: "100vh",
      width: "100%",
      background: "#000",
      color: "white",
      padding: isMobile ? "40px 20px" : "80px 60px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      position: "relative",
      overflow: "hidden",
    },

    title: {
      fontSize: isMobile ? "36px" : "52px",
      fontWeight: "800",
      marginBottom: "12px",
      letterSpacing: "1px",
    },

    gradientName: {
      background: "linear-gradient(90deg, #4fd1ff, #bb61ff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },

    typing: {
      fontSize: isMobile ? "20px" : "26px",
      fontWeight: "600",
      marginBottom: "20px",
      minHeight: "28px",
      color: "#4fd1ff",
    },

    subtitle: {
      maxWidth: "420px",
      fontSize: isMobile ? "15px" : "17px",
      lineHeight: "1.6",
      color: "#dcdcdc",
      marginBottom: "30px",
    },

    buttonWrapper: {
      display: "flex",
      gap: "14px",
      marginTop: "10px",
    },

    btnPrimary: {
      padding: "12px 28px",
      borderRadius: "30px",
      background: "linear-gradient(90deg,#4fd1ff,#bb61ff)",
      color: "#fff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "15px" : "16px",
    },

    btnOutline: {
      padding: "12px 28px",
      borderRadius: "30px",
      border: "2px solid #4fd1ff",
      color: "#4fd1ff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "15px" : "16px",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <h1 style={styles.title}>
        Hi, I'm <span style={styles.gradientName}>Mounika</span>
      </h1>

      <h2 ref={typingRef} style={styles.typing}></h2>

      <p style={styles.subtitle}>
        I build fast, responsive and modern web applications using MERN stack.
      </p>

      <div style={styles.buttonWrapper}>
        <a href="#projects" style={styles.btnPrimary}>Projects</a>
        <a href="#contact" style={styles.btnOutline}>Hire Me</a>
      </div>
    </section>
  );
}

export default Home;
