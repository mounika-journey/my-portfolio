import React from "react";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        background: "#0d1117",
        padding: "80px 20px",
        color: "white",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "38px",
          fontWeight: "800",
          marginBottom: "60px",
          background: "linear-gradient(90deg, #7ef0ff, #c97bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        About Me
      </h2>

      {/* Main Container */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* Profile Image with Border */}
        <div
          style={{
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            padding: "4px",
            background: "linear-gradient(90deg, #00eaff, #e700ff)",
          }}
        >
          <img
            src={"/mnt/data/WhatsApp Image 2025-12-04 at 10.23.47 AM.jpeg"}
            alt="Mounika"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text Section */}
        <div style={{ maxWidth: "600px", lineHeight: "1.7", fontSize: "17px" }}>
          <p>
            Hi! I'm <strong style={{ color: "#9ad8ff" }}>Mounika</strong>, a
            passionate developer who blends logic and creativity to build clean,
            modern, and user-friendly digital experiences.
          </p>

          <p>
            I enjoy working on{" "}
            <strong style={{ color: "#9ad8ff" }}>
              scalable and modular applications
            </strong>{" "}
            that create a real impact. I love solving problems, exploring modern
            technologies, and crafting meaningful UI experiences.
          </p>

          <p>
            My tech stack includes: <br />
            <span style={{ color: "#9ad8ff", fontWeight: 600 }}>
              React.js, JavaScript, Node.js, MongoDB, Django, Python, HTML, CSS,
              Git, GitHub.
            </span>
          </p>

          {/* Download Button */}
          <a
            href="/Mounika_M_Resume.pdf"
            download
            style={{
              marginTop: "20px",
              display: "inline-block",
              padding: "12px 28px",
              borderRadius: "25px",
              fontSize: "16px",
              fontWeight: "600",
              textDecoration: "none",
              color: "white",
              background:
                "linear-gradient(90deg, #4a9eff, #bb55ff 60%, #ff00f5)",
              transition: "0.3s",
            }}
          >
            ⬇ Download Resume ee
          </a>
        </div>
      </div>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 768px) {
          #about div {
            text-align: center !important;
          }
          #about img {
            margin-bottom: 20px;
          }
        }
      `}</style>
    </section>
  );
}
