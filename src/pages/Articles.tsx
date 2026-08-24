import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const articles = [
  {
    id: 1,
    category: "Leadership",
    title: "The Modern Gentleman",
    excerpt:
      "What does it mean to carry yourself with character, responsibility and purpose in the modern world?",
    date: "August 2026",
    slug: "modern-gentleman",
  },
  {
    id: 2,
    category: "Growth",
    title: "Building Discipline",
    excerpt:
      "Motivation comes and goes. Discipline is what allows meaningful progress to continue when motivation disappears.",
    date: "August 2026",
    slug: "building-discipline",
  },
  {
    id: 3,
    category: "Brotherhood",
    title: "The Value of Your Circle",
    excerpt:
      "The people around you influence your standards, ambitions and ultimately the man you become.",
    date: "August 2026",
    slug: "value-of-your-circle",
  },
  {
    id: 4,
    category: "Career",
    title: "Building a Professional Reputation",
    excerpt:
      "Your reputation is built long before you enter the room. Learn how consistency, competence and character shape professional credibility.",
    date: "August 2026",
    slug: "professional-reputation",
  },
  {
    id: 5,
    category: "Mindset",
    title: "Choosing the Difficult Path",
    excerpt:
      "Comfort feels good in the short term, but meaningful development often begins when we deliberately choose the harder option.",
    date: "August 2026",
    slug: "difficult-path",
  },
  {
    id: 6,
    category: "Lifestyle",
    title: "Standards in the Small Things",
    excerpt:
      "How you dress, speak, arrive and follow through may seem small, but together they reveal the standards you live by.",
    date: "August 2026",
    slug: "standards-small-things",
  },
];

function Articles() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="articles-hero">
          <div className="home-container articles-hero-content">
            <p className="section-label">Ideas From the Guild</p>

            <h1>Knowledge Worth Putting Into Practice</h1>

            <p>
              Perspectives on leadership, discipline, career, brotherhood and
              becoming a more capable and intentional man.
            </p>
          </div>
        </section>

        {/* FEATURED ARTICLE */}
        <section className="featured-article-section">
          <div className="home-container">
            <p className="section-label">Featured</p>

            <article className="featured-article">
              <div className="featured-article-number">01</div>

              <div className="featured-article-content">
                <div className="article-meta">
                  <span>Leadership</span>
                  <span>August 2026</span>
                </div>

                <h2>The Modern Gentleman</h2>

                <p>
                  Being a gentleman is not defined by appearance alone. It is
                  reflected in character, discipline, responsibility and the
                  standards a man chooses to maintain even when nobody is
                  watching.
                </p>

                <Link
                  to="/articles/modern-gentleman"
                  className="text-link"
                >
                  Read Featured Article →
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ALL ARTICLES */}
        <section className="articles-library">
          <div className="home-container">
            <div className="articles-library-heading">
              <div>
                <p className="section-label">The Library</p>
                <h2>Latest Articles</h2>
              </div>

              <p>
                Explore ideas designed to challenge your thinking and encourage
                practical growth.
              </p>
            </div>

            <div className="articles-page-grid">
              {articles.map((article) => (
                <article className="articles-page-card" key={article.id}>
                  <div className="article-card-top">
                    <span>{article.category}</span>
                    <span>{String(article.id).padStart(2, "0")}</span>
                  </div>

                  <div>
                    <h3>{article.title}</h3>
                    <p>{article.excerpt}</p>
                  </div>

                  <div className="article-card-bottom">
                    <span>{article.date}</span>

                    <Link
                      to={`/articles/${article.slug}`}
                      className="article-link"
                    >
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* TOPICS */}
        <section className="article-topics">
          <div className="home-container">
            <div className="section-heading">
              <p className="section-label">Explore</p>
              <h2>Topics Within the Guild</h2>
            </div>

            <div className="topics-list">
              <div>
                <span>01</span>
                <p>Leadership</p>
              </div>

              <div>
                <span>02</span>
                <p>Personal Growth</p>
              </div>

              <div>
                <span>03</span>
                <p>Brotherhood</p>
              </div>

              <div>
                <span>04</span>
                <p>Career & Business</p>
              </div>

              <div>
                <span>05</span>
                <p>Mindset</p>
              </div>

              <div>
                <span>06</span>
                <p>Lifestyle</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="articles-cta">
          <div className="home-container articles-cta-content">
            <p className="section-label">Beyond Reading</p>

            <h2>Knowledge Only Matters When It Changes How You Act</h2>

            <p>
              Explore the wider Guild and discover resources designed to turn
              ideas into practical development.
            </p>

            <Link to="/services" className="button button-primary">
              Explore Services
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Articles;