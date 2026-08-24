import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  {
    number: "01",
    title: "Leadership & Personal Development",
    description:
      "Practical resources designed to help members become more disciplined, intentional and effective in the way they lead themselves and others.",
    items: [
      "Weekly development content",
      "Leadership workshops",
      "Decision-making frameworks",
      "Goal-setting systems",
      "Self-improvement resources",
    ],
  },
  {
    number: "02",
    title: "Brotherhood & Community",
    description:
      "A strong circle can raise your standards. The Guild creates opportunities for men to connect, exchange ideas and support one another.",
    items: [
      "Member discussions",
      "Community events",
      "Networking opportunities",
      "Accountability circles",
      "Peer support",
    ],
  },
  {
    number: "03",
    title: "Career & Professional Growth",
    description:
      "Resources aimed at helping members strengthen their professional presence, develop valuable skills and make better career decisions.",
    items: [
      "Career development guidance",
      "Professional networking",
      "Communication skills",
      "Personal branding",
      "Business and entrepreneurship discussions",
    ],
  },
  {
    number: "04",
    title: "Health, Discipline & Lifestyle",
    description:
      "Personal development extends beyond work. The Guild encourages members to build sustainable habits around health, presentation and everyday discipline.",
    items: [
      "Fitness and lifestyle discussions",
      "Routine building",
      "Personal presentation",
      "Habit development",
      "Mental resilience",
    ],
  },
  {
    number: "05",
    title: "Events & Experiences",
    description:
      "Real relationships are built through shared experiences. Guild events create opportunities to learn, connect and enjoy meaningful time together.",
    items: [
      "Social gatherings",
      "Development workshops",
      "Guest speakers",
      "Networking sessions",
      "Member experiences",
    ],
  },
  {
    number: "06",
    title: "Knowledge & Resources",
    description:
      "A growing collection of practical ideas, articles and resources for members who want to continue learning and developing.",
    items: [
      "Articles and guides",
      "Recommended reading",
      "Practical frameworks",
      "Member insights",
      "Curated resources",
    ],
  },
];

function Services() {
  return (
    <>
      <Navbar />

      <main>
        <section className="services-hero">
          <div className="home-container services-hero-content">
            <p className="section-label">What We Offer</p>

            <h1>Resources for Men Who Want More From Themselves</h1>

            <p>
              The Guild brings together development, community and practical
              resources designed to help members strengthen every area of
              their lives.
            </p>
          </div>
        </section>

        <section className="services-intro">
          <div className="home-container services-intro-grid">
            <div>
              <p className="section-label">The Approach</p>
              <h2>Development With Purpose</h2>
            </div>

            <div className="services-intro-copy">
              <p>
                Gentlemen's Guild is built around practical development rather
                than empty motivation.
              </p>

              <p>
                Our resources focus on ideas and experiences that can be
                applied to everyday life — from leadership and career
                development to relationships, discipline and personal
                standards.
              </p>
            </div>
          </div>
        </section>

        <section className="services-section">
          <div className="home-container">
            <div className="section-heading">
              <p className="section-label">Our Services</p>
              <h2>What You Can Access Through the Guild</h2>
            </div>

            <div className="services-list">
              {services.map((service) => (
                <article className="service-item" key={service.number}>
                  <div className="service-number">{service.number}</div>

                  <div className="service-main">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </div>

                  <ul className="service-features">
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="services-membership">
          <div className="home-container services-membership-grid">
            <div>
              <p className="section-label">The Bigger Picture</p>
              <h2>More Than a Collection of Services</h2>
            </div>

            <div>
              <p>
                The real value of the Guild comes from combining knowledge with
                accountability, community and action.
              </p>

              <p>
                Members are encouraged not simply to consume information, but
                to use what they learn to improve the way they work, lead,
                communicate and live.
              </p>

              <Link to="/articles" className="text-link">
                Explore Guild Articles →
              </Link>
            </div>
          </div>
        </section>

        <section className="services-cta">
          <div className="home-container services-cta-content">
            <p className="section-label">Continue Exploring</p>

            <h2>Start With the Areas That Matter Most to You</h2>

            <p>
              Explore our articles, learn more about the Guild or revisit our
              principles before continuing your journey.
            </p>

            <div className="services-cta-actions">
              <Link to="/articles" className="button button-primary">
                Browse Articles
              </Link>

              <Link to="/about" className="button button-secondary">
                About the Guild
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Services;