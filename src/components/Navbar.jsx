function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 20px",
    background: "rgba(0,0,0,0.85)",
    backdropFilter: "blur(8px)",
    position: "fixed",
    top: 0,
    width: "100%",
    zIndex: 1500,
    borderBottom: "1px solid rgba(255,255,255,0.08)",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: 500,
    padding: "6px 10px",
  };

  return (
    <nav style={navStyle}>

      {/* LEFT LOGO */}
      <h2 style={{ color: "white", fontWeight: 700, fontSize: "20px" }}>
        Mounika.
      </h2>

      {/* CENTER MENU */}
      <div className="center-menu" style={{ display: "flex", gap: "20px" }}>
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} style={linkStyle}>
            {item}
          </a>
        ))}
      </div>

      {/* RIGHT RESUME BUTTON */}
      <a
        href="/resume.pdf"
        style={{
          background:
            "linear-gradient(90deg, #4b6bfb, #8a4dfc)",
          color: "white",
          padding: "8px 16px",
          borderRadius: "25px",
          fontSize: "14px",
          fontWeight: 600,
          textDecoration: "none",
        }}
      >
        Resume s
      </a>

      <style>
        {`
          /* MOBILE RESPONSIVE */
          @media (max-width: 768px) {
            nav {
              padding: 12px 14px !important;
            }
            .center-menu {
              gap: 12px !important;
            }
            .center-menu a {
              font-size: 12px !important;
              padding: 4px 6px !important;
            }
            nav h2 {
              font-size: 16px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}

export default Navbar;
