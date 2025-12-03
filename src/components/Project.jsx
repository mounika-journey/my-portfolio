import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Village Community Hub",
      description:
        "A digital platform for villagers to submit service requests and access community resources.",
      live: "#",
      code: "#",
      image:
        "https://via.placeholder.com/400x220.png?text=Village+Community+Hub",
    },
    {
      title: "Tele-Track CRM",
      description:
        "Lead management CRM with call tracking, status updates, analytics, and JWT authentication.",
      live: "#",
      code: "#",
      image:
        "https://via.placeholder.com/400x220.png?text=Tele-Track+CRM",
    },
    {
      title: "BookLoop Marketplace",
      description:
        "A platform to buy/sell books with image upload, WhatsApp chat, and category filtering.",
      live: "#",
      code: "#",
      image:
        "https://via.placeholder.com/400x220.png?text=BookLoop+Marketplace",
    },
  ];

  return (
    <section
      id="projects"
      style={{
        background: "#0d0f15",
        padding: "80px 20px",
        color: "white",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#4fa3ff",
          marginBottom: "40px",
        }}
      >
        My Projects
      </h2>

      {/* Cards Grid */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "25px",
        }}
      >
        {projects.map((p, index) => (
          <div
            key={index}
            style={{
              background: "#1a1d27",
              borderRadius: "14px",
              overflow: "hidden",
              boxShadow: "0 4px 18px rgba(0,0,0,0.4)",
              transition: "0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-8px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
              }}
            />

            {/* Details */}
            <div style={{ padding: "18px" }}>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  marginBottom: "8px",
                }}
              >
                {p.title}
              </h3>

              <p
                style={{
                  color: "#b8c2d4",
                  fontSize: "0.9rem",
                  lineHeight: "1.5",
                  marginBottom: "15px",
                }}
              >
                {p.description}
              </p>

              {/* Buttons */}
              <div style={{ display: "flex", gap: "10px" }}>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    background: "#3c82ff",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  🔗 View Live
                </a>

                <a
                  href={p.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    background: "#2e2f36",
                    color: "white",
                    padding: "8px",
                    borderRadius: "6px",
                    textAlign: "center",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  📄 View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
