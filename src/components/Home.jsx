import React, { useEffect, useRef } from "react";

export default function Home() {
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
      if (typingRef.current)
        typingRef.current.textContent = texts[index].slice(0, charIndex);

      charIndex++;

      if (charIndex > texts[index].length) {
        setTimeout(() => {
          charIndex = 0;
          index = (index + 1) % texts.length;
        }, 900);
      }

      setTimeout(type, 95);
    };

    type();
  }, []);

  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      padding: isMobile ? "110px 25px 60px" : "140px 70px",
      color: "white",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: isMobile ? "center" : "left",
      alignItems: isMobile ? "center" : "flex-start",
      overflow: "hidden",
      background: "radial-gradient(circle at 20% 30%, #1a1a1a, #000)",
      animation: "fadeInSlow 1.4s ease-out forwards",
    },

    floatingShape1: {
      position: "absolute",
      top: "-80px",
      right: "-60px",
      width: "250px",
      height: "250px",
      background: "linear-gradient(135deg, #ff7ae0, #6b6bff)",
      filter: "blur(80px)",
      animation: "float 6s infinite ease-in-out",
      opacity: 0.4,
      borderRadius: "50%",
    },

    floatingShape2: {
      position: "absolute",
      bottom: "-60px",
      left: "-50px",
      width: "260px",
      height: "260px",
      background: "linear-gradient(135deg, #4fd1ff, #00ffaa)",
      filter: "blur(90px)",
      animation: "float 7s infinite ease-in-out reverse",
      opacity: 0.3,
      borderRadius: "50%",
    },

    cardGlow: {
      position: "absolute",
      inset: "0",
      background: "linear-gradient(120deg, rgba(255,255,255,0.15), rgba(255,255,255,0.03))",
      backdropFilter: "blur(20px)",
      borderRadius: "20px",
      zIndex: -1,
    },

    title: {
      fontSize: isMobile ? "36px" : "60px",
      fontWeight: "900",
      lineHeight: "1.2",
      marginBottom: "18px",
      animation: "slideDown 1.2s ease-out",
      letterSpacing: "1px",
    },

    gradientName: {
      background: "linear-gradient(90deg,#4fd1ff,#d16bff,#ff79c6,#ffcc70)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      textShadow: "0 0 20px rgba(255,255,255,0.1)",
    },

    typing: {
      fontSize: isMobile ? "22px" : "30px",
      fontWeight: "700",
      marginBottom: "25px",
      minHeight: "34px",
      letterSpacing: "0.7px",
      color: "#4fd1ff",
      animation: "fadeUp 1.2s ease",
    },

    subtitle: {
      maxWidth: "640px",
      fontSize: isMobile ? "16px" : "20px",
      lineHeight: "1.8",
      color: "#d7d7d7",
      marginBottom: "45px",
      animation: "fadeUp 1.4s ease",
    },

    buttonWrapper: {
      display: "flex",
      gap: isMobile ? "14px" : "20px",
      flexDirection: isMobile ? "column" : "row",
      width: isMobile ? "100%" : "auto",
    },

    btnPrimary: {
      padding: "14px 38px",
      borderRadius: "40px",
      background: "linear-gradient(90deg,#4fd1ff,#a763ff)",
      color: "#fff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "16px" : "18px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      boxShadow: "0 0 20px rgba(79,209,255,0.5)",
      transition: "0.3s",
    },

    btnOutline: {
      padding: "14px 38px",
      borderRadius: "40px",
      border: "2px solid #4fd1ff",
      color: "#4fd1ff",
      fontWeight: "700",
      textDecoration: "none",
      fontSize: isMobile ? "16px" : "18px",
      width: isMobile ? "100%" : "auto",
      textAlign: "center",
      transition: "0.3s",
    },
  };

  return (
    <section id="home" style={styles.section}>
      {/* Floating neon shapes */}
      <div style={styles.floatingShape1}></div>
      <div style={styles.floatingShape2}></div>

      <h1 style={styles.title}>
        Hi, I'm <span style={styles.gradientName}>Mounika M</span>
      </h1>

      <h2 ref={typingRef} style={styles.typing}></h2>

      <p style={styles.subtitle}>
        I build high-performance and responsive MERN stack applications with a
        strong focus on UI, animations and modern user experience.
      </p>

      <div style={styles.buttonWrapper}>
        <a href="#projects" style={styles.btnPrimary}>View Projects</a>
        <a href="#contact" style={styles.btnOutline}>Hire Me</a>
      </div>

      <style>{`
        @keyframes fadeInSlow {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-20px);}
          100% { opacity: 1; transform: translateY(0);}
        }

        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
