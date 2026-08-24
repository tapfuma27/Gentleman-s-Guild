import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="navbar">
        <NavLink
          to="/"
          className="navbar-logo"
          onClick={closeMenu}
          aria-label="Gentlemen's Guild home"
        >
          <img
            src="/logo.jpg"
            alt="Gentlemen's Guild"
            className="navbar-logo-image"
          />
        </NavLink>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={`navbar-navigation ${menuOpen ? "menu-open" : ""}`}
          aria-label="Main navigation"
        >
          <NavLink
            to="/welcome"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Welcome
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Services
          </NavLink>

          <NavLink
            to="/articles"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Articles
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            FAQ
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;