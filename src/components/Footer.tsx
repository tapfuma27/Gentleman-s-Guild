import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand">
          <img
            src="/logo.jpg"
            alt="Gentlemen's Guild"
            className="footer-logo"
          />

          <div>
            <h3>Gentlemen's Guild</h3>
            <p>Brotherhood. Growth. Excellence.</p>
          </div>
        </div>

        <div className="footer-links">
          <Link to="/welcome">Welcome</Link>
          <Link to="/services">Services</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} Gentlemen's Guild. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;