import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { articles } from "../data/articles";

function Article() {
  const { slug } = useParams();

  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return (
      <>
        <Navbar />

        <main className="article-not-found">
          <div className="home-container">
            <p className="section-label">404</p>

            <h1>Article Not Found</h1>

            <p>
              The article you're looking for doesn't exist or may have been
              moved.
            </p>

            <Link to="/articles" className="button button-primary">
              Return to Articles
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main>
        {/* ARTICLE HEADER */}

        <header className="article-header">
          <div className="article-container">
            <Link to="/articles" className="article-back">
              ← Back to Articles
            </Link>

            <div className="article-header-meta">
              <span>{article.category}</span>
              <span>{article.date}</span>
              <span>{article.readTime}</span>
            </div>

            <h1>{article.title}</h1>

            <p className="article-subtitle">
              {article.subtitle}
            </p>
          </div>
        </header>

        {/* ARTICLE BODY */}

        <article className="article-body">
          <div className="article-reading-container">
            <p className="article-introduction">
              {article.introduction}
            </p>

            {article.sections.map((section) => (
              <section
                className="article-content-section"
                key={section.heading}
              >
                <h2>{section.heading}</h2>

                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </section>
            ))}

            <div className="article-closing">
              <p>{article.closing}</p>
            </div>
          </div>
        </article>

        {/* ARTICLE FOOTER */}

        <section className="article-end">
          <div className="article-container article-end-content">
            <p className="section-label">
              Continue Exploring
            </p>

            <h2>More From the Guild</h2>

            <p>
              Explore more perspectives on leadership, growth,
              brotherhood and personal development.
            </p>

            <Link
              to="/articles"
              className="button button-primary"
            >
              View All Articles
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Article;