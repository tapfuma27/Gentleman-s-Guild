import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <>
      <Navbar />

      <main className="not-found-page">
        <div className="home-container not-found-content">
          <p className="section-label">404</p>

          <h1>Page Not Found</h1>

          <p>
            The page you're looking for doesn't exist or may have been moved.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="button button-primary">
              Return Home
            </Link>

            <Link to="/articles" className="button button-secondary">
              Browse Articles
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default NotFound;