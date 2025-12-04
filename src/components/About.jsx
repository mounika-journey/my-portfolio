import React from "react";

export default function AboutSection() {
  const isMobile = window.innerWidth <= 768;

  const styles = {
    section: {
      padding: "100px 20px",
      background: "linear-gradient(180deg, #020202, #090909, #050505)",
      color: "white",
      textAlign: "center",
      marginTop: "-10px",
    },

    heading: {
      fontSize: "42px",
      fontWeight: "800",
      background: "linear-gradient(90deg, #7ef0ff, #c97bff)",
      WebkitBackgroundClip: "text",
      color: "transparent",
      marginBottom: "50px",
      marginTop: "-30px",
    },

    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "30px",
      flexDirection: isMobile ? "row" : "row",  // ⭐ IMAGE + TEXT SIDE BY SIDE IN MOBILE
      flexWrap: isMobile ? "nowrap" : "wrap",
      textAlign: isMobile ? "left" : "left",
      animation: "fadeUp 1.2s ease",
    },

    imgCard: {
      flex: "0 0 180px",
      padding: "8px",
      background: "linear-gradient(90deg,#00eaff,#e700ff)",
      borderRadius: "16px",
      border: "1px solid rgba(255,255,255,0.1)",
      backdropFilter: "blur(12px)",
      boxShadow: "0 20px 60px rgba(0, 234, 255, 0.08)",
      transition: "0.4s ease",
    },

    img: {
      width: isMobile ? "160px" : "100%",
      height: isMobile ? "160px" : "auto",
      borderRadius: "14px",
      objectFit: "cover",
    },

    textBox: {
      flex: "1",
      textAlign: isMobile ? "left" : "left",
      lineHeight: "1.7",
      fontSize: isMobile ? "15px" : "18px",
      color: "#d6eaff",
    },

    bullet: {
      color: "#9ad8ff",
      fontWeight: 600,
    },

    resumeBtn: {
      display: "inline-block",
      marginTop: "25px",
      padding: "14px 28px",
      fontSize: "17px",
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
        {/* Image Left on Mobile */}
        <div
          style={styles.imgCard}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-10px) scale(1.05)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0) scale(1)")
          }
        >
          <img src="/profile.jpeg" style={styles.img} alt="Mounika" />
        </div>

        {/* Text Right on Mobile */}
        <div style={styles.textBox}>
          <p>
            Hi, I’m <strong>Mounika</strong>, a passionate
            <span style={styles.bullet}> Full Stack Developer (MERN + Django)</span>
            who loves creating modern and user-friendly applications.
          </p>

          <p>
            I completed my MCA with <span style={styles.bullet}>77.4%</span> from
            Community Institute of Management Studies, Bengaluru, and completed a
            full-stack internship at <span style={styles.bullet}>XCEL Corp</span>.
          </p>

          <p>
            <span style={styles.bullet}>Technical Skills:</span> HTML, CSS,
            JavaScript, React.js, Node.js, Express.js, Django, Python, MongoDB,
            SQLite, PostgreSQL, Git, GitHub, Postman.
          </p>

          <p>
            I enjoy building responsive UI, clean backend APIs, and meaningful
            digital experiences. I’m currently seeking opportunities as a
            <span style={styles.bullet}> Full Stack Developer / MERN Developer</span>.
          </p>

          <a href="/Mounika_M_Resume.pdf" download style={styles.resumeBtn}>
            ⬇ Download Resume
          </a>
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
