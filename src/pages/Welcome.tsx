import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Welcome() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="welcome-hero">
          <div className="home-container welcome-hero-content">
            <p className="section-label">Welcome to the Guild</p>

            <h1>A Standard Worth Living By</h1>

            <p>
              Gentlemen's Guild is built around the idea that strong men are
              shaped through discipline, character, brotherhood and continued
              growth.
            </p>

            <Link to="/services" className="button button-primary">
              Explore What We Offer
            </Link>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="welcome-intro">
          <div className="home-container welcome-intro-grid">
            <div>
              <p className="section-label">Our Purpose</p>

              <h2>Why the Guild Exists</h2>
            </div>

            <div className="welcome-copy">
              <p>
                Modern life offers endless opportunities, but it also makes it
                easy to lose direction, discipline and meaningful connection.
              </p>

              <p>
                Gentlemen's Guild exists to create a space where men can
                challenge themselves, learn from one another and build the
                habits, values and relationships that support a stronger life.
              </p>

              <p>
                The Guild is not about perfection. It is about deliberately
                working toward a higher standard.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="welcome-values">
          <div className="home-container">
            <div className="section-heading">
              <p className="section-label">Core Principles</p>
              <h2>What Defines a Gentleman</h2>
            </div>

            <div className="values-grid">
              <article className="value-card">
                <span className="value-number">01</span>
                <h3>Integrity</h3>
                <p>
                  Character is revealed through the choices made when nobody
                  else is watching.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">02</span>
                <h3>Discipline</h3>
                <p>
                  Progress comes from consistency, self-control and the ability
                  to act even when motivation fades.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">03</span>
                <h3>Respect</h3>
                <p>
                  A gentleman treats others with dignity while maintaining
                  standards for himself and those around him.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">04</span>
                <h3>Brotherhood</h3>
                <p>
                  Strong relationships create accountability, perspective and
                  support during both success and adversity.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">05</span>
                <h3>Ambition</h3>
                <p>
                  Growth requires purpose, direction and the courage to pursue
                  goals beyond comfort.
                </p>
              </article>

              <article className="value-card">
                <span className="value-number">06</span>
                <h3>Service</h3>
                <p>
                  Leadership is not only about personal success, but also about
                  creating value for others.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="welcome-journey">
          <div className="home-container">
            <div className="section-heading">
              <p className="section-label">The Journey</p>
              <h2>How to Use the Guild</h2>
            </div>

            <div className="journey-list">
              <div className="journey-item">
                <span>01</span>

                <div>
                  <h3>Learn</h3>
                  <p>
                    Explore articles, resources and ideas focused on leadership,
                    discipline, relationships and personal development.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <span>02</span>

                <div>
                  <h3>Apply</h3>
                  <p>
                    Turn knowledge into action by adopting practical habits,
                    systems and standards.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <span>03</span>

                <div>
                  <h3>Connect</h3>
                  <p>
                    Build relationships with other men who value growth,
                    responsibility and meaningful brotherhood.
                  </p>
                </div>
              </div>

              <div className="journey-item">
                <span>04</span>

                <div>
                  <h3>Lead</h3>
                  <p>
                    Take what you develop within the Guild and apply it to your
                    work, relationships and wider community.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="welcome-cta">
          <div className="home-container welcome-cta-content">
            <p className="section-label">Continue Your Journey</p>

            <h2>See What the Guild Has to Offer</h2>

            <p>
              Explore our development resources, community offerings and
              opportunities for growth.
            </p>

            <div className="welcome-cta-actions">
              <Link to="/services" className="button button-primary">
                View Services
              </Link>

              <Link to="/about" className="button button-secondary dark-button">
                Our Code of Honor
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Welcome;