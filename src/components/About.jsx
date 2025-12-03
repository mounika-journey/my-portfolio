import React from "react";

export default function AboutSection() {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      padding: isMobile ? "60px 18px" : "100px 20px",
      background: "linear-gradient(180deg, #020202, #090909, #050505)",
      color: "white",
      textAlign: "center",
      marginTop: "-10px",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      flexDirection: isMobile ? "column-reverse" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: isMobile ? "25px" : "40px",
      animation: "fadeUp 1.2s ease",
      marginTop: isMobile ? "10px" : "30px",
    },

    heading: {
      fontSize: isMobile ? "34px" : "42px",
      fontWeight: "800",
      background: "linear-gradient(90deg, #7ef0ff, #c97bff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      marginBottom: isMobile ? "30px" : "50px",
      marginTop: isMobile ? "0px" : "-30px",
    },

    textBox: {
      flex: "1 1 520px",
      textAlign: isMobile ? "center" : "left",
      lineHeight: "1.7",
      fontSize: isMobile ? "16px" : "18px",
      color: "#d6eaff",
      padding: isMobile ? "0 5px" : "0",
    },

    bullet: {
      color: "#9ad8ff",
      fontWeight: 600,
    },

    imgCard: {
      flex: "0 0 340px",
      width: isMobile ? "90%" : "340px",
      padding: "10px",
      background: "linear-gradient(90deg,#00eaff,#e700ff)",
      borderRadius: "18px",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 20px 60px rgba(0, 234, 255, 0.08)",
      transition: "0.4s ease",
      margin: isMobile ? "0 auto" : "0",
    },

    img: {
      width: "100%",
      borderRadius: "14px",
      objectFit: "cover",
    },

    resumeBtn: {
      display: "inline-block",
      marginTop: "25px",
      padding: isMobile ? "12px 22px" : "14px 28px",
      fontSize: isMobile ? "16px" : "18px",
      fontWeight: 700,
      borderRadius: "12px",
      textDecoration: "none",
      color: "white",
      background: "linear-gradient(90deg, #00eaff, #ff00ff)",
      boxShadow: "0 0 20px rgba(0, 234, 255, 0.4)",
      transition: "0.35s ease",
    },
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>About Me</h2>

      <div style={styles.container}>
        
        {/* Text Section */}
        <div style={styles.textBox}>
          <p>
            Hi, I’m <strong>Mounika</strong>, a passionate
            <span style={styles.bullet}> Full Stack Developer (MERN + Django)</span>
            who loves creating modern applications.
          </p>

          <p>
            MCA Graduate with <span style={styles.bullet}>77.4%</span> and completed my full-stack internship at
            <span style={styles.bullet}> XCEL Corp</span>.
          </p>

          <p>
            <span style={styles.bullet}>Technical Skills:</span>
            HTML, CSS, JavaScript, React.js, Node.js, Express.js, Django, Python,
            MongoDB, SQLite, PostgreSQL, Git, GitHub, Postman.
          </p>

          <a
            href="/Mounika_M_Resume.pdf"
            download
            style={styles.resumeBtn}
            onMouseEnter={(e) => (e.target.style.transform = "scale(1.07)") }
            onMouseLeave={(e) => (e.target.style.transform = "scale(1)") }
          >
            ⬇ Download Resume
          </a>
        </div>

        {/* Image Section */}
        <div
          style={styles.imgCard}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-10px) scale(1.03)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0) scale(1)")
          }
        >
          <img src="/profile.jpeg" style={styles.img} alt="Mounika" />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
