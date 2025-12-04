import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <h2 className="logo">Mounika</h2>

        {/* Desktop menu */}
        <div className="desktop-menu">
          {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
            <a key={i} href={`#${i.toLowerCase()}`} className="nav-link">
              {i}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <GiHamburgerMenu
          size={26}
          className="mobile-icon"
          onClick={() => setOpen(!open)}
        />
      </nav>

      {/* Mobile menu */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {["Home", "About", "Projects", "Certificates", "Contact"].map((i) => (
          <a
            key={i}
            href={`#${i.toLowerCase()}`}
            className="mobile-link"
            onClick={() => setOpen(false)}
          >
            {i}
          </a>
        ))}
      </div>

      <style>{`
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 8px;
          background: rgba(0,0,0,0.55);
          backdrop-filter: blur(10px);
          z-index: 9999;
          overflow: hidden;
        }

        .logo {
          color: #fff;
          font-size: 18px; 
          margin: 0;
          white-space: nowrap;
        }

        .desktop-menu {
          display: flex;
          gap: 18px;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-size: 15px;
          font-weight: 600;
        }

        .mobile-icon {
          display: none;
          color: white;
          cursor: pointer;
          min-width: 26px;
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 55px;
          left: 0;
          right: 0;
          height: 0;
          overflow: hidden;
          background: rgba(0,0,0,0.95);
          transition: height 0.35s ease;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .mobile-menu.open {
          height: 240px;
          padding: 15px 0;
        }

        .mobile-link {
          color: #fff;
          text-align: center;
          text-decoration: none;
          font-size: 18px;
        }

        /* RESPONSIVE FIX */
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-icon {
            display: block;
          }
        }

        /* EXTRA FIX FOR SMALL PHONES (280px - 360px width) */
        @media (max-width: 360px) {
          .nav {
            padding: 0 6px;
          }
          .logo {
            font-size: 16px;
          }
          .mobile-icon {
            size: 24px;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
