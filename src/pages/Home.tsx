import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="home-hero">
          <div className="home-container hero-content">
            <p className="hero-eyebrow">Welcome to</p>

            <h1>Gentlemen's Guild</h1>

            <p className="hero-tagline">
              Brotherhood. Growth. Excellence.
            </p>

            <p className="hero-description">
              A community built for men committed to personal growth,
              meaningful connections, leadership and becoming the best
              versions of themselves.
            </p>

            <div className="hero-actions">
              <Link to="/welcome" className="button button-primary">
                Enter the Guild
              </Link>

              <Link to="/about" className="button button-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="home-introduction">
          <div className="home-container introduction-content">
            <p className="section-label">The Guild</p>

            <h2>More Than a Community</h2>

            <p>
              Gentlemen's Guild is a space centred around brotherhood,
              development and shared ambition. We believe that men grow
              stronger when surrounded by others who challenge, support and
              inspire them.
            </p>
          </div>
        </section>

        {/* MISSION & COMMUNITY */}
        <section className="home-pillars">
          <div className="home-container">
            <div className="section-heading">
              <p className="section-label">What We Stand For</p>
              <h2>Built on Strong Foundations</h2>
            </div>

            <div className="pillar-grid">
              <article className="pillar-card">
                <span className="pillar-number">01</span>

                <h3>Our Mission</h3>

                <p>
                  To create an environment where men can develop personally,
                  professionally and socially while holding themselves and
                  each other to a higher standard.
                </p>
              </article>

              <article className="pillar-card">
                <span className="pillar-number">02</span>

                <h3>Our Community</h3>

                <p>
                  A network of men who value meaningful relationships,
                  accountability, respect and the pursuit of excellence.
                </p>
              </article>

              <article className="pillar-card">
                <span className="pillar-number">03</span>

                <h3>Our Standard</h3>

                <p>
                  Integrity, discipline and respect guide how members of the
                  Guild carry themselves both within the community and beyond
                  it.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* FEATURED CONTENT */}
        <section className="home-featured">
          <div className="home-container">
            <div className="featured-heading">
              <div>
                <p className="section-label">From the Guild</p>
                <h2>Featured Articles</h2>
              </div>

              <Link to="/articles" className="text-link">
                View All Articles →
              </Link>
            </div>

            <div className="article-grid">
              <article className="article-card">
                <p className="article-category">Leadership</p>

                <h3>The Modern Gentleman</h3>

                <p>
                  Exploring what leadership, character and responsibility
                  mean for men today.
                </p>

                <Link to="/articles" className="article-link">
                  Read Article →
                </Link>
              </article>

              <article className="article-card">
                <p className="article-category">Growth</p>

                <h3>Building Discipline</h3>

                <p>
                  Why consistency matters more than motivation when pursuing
                  meaningful personal growth.
                </p>

                <Link to="/articles" className="article-link">
                  Read Article →
                </Link>
              </article>

              <article className="article-card">
                <p className="article-category">Brotherhood</p>

                <h3>The Value of Your Circle</h3>

                <p>
                  The people around you influence your standards, ambitions
                  and ultimately the man you become.
                </p>

                <Link to="/articles" className="article-link">
                  Read Article →
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="home-cta">
          <div className="home-container cta-content">
            <p className="section-label">Take the Next Step</p>

            <h2>Become Part of Something Greater</h2>

            <p>
              Discover the values, resources and community behind
              Gentlemen's Guild.
            </p>

            <Link to="/welcome" className="button button-primary">
              Discover the Guild
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Home;