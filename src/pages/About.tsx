import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const codeOfHonor = [
  {
    number: "01",
    title: "Act With Integrity",
    text: "Do what is right even when there is no recognition, reward or audience.",
  },
  {
    number: "02",
    title: "Respect Others",
    text: "Treat people with dignity while maintaining clear standards for yourself and those around you.",
  },
  {
    number: "03",
    title: "Maintain Confidentiality",
    text: "Respect the trust of others and protect conversations that are shared in confidence.",
  },
  {
    number: "04",
    title: "Support Other Men",
    text: "Encourage growth, provide honest guidance and help other members raise their standards.",
  },
  {
    number: "05",
    title: "Take Responsibility",
    text: "Own your choices, your behaviour and the consequences that come with them.",
  },
  {
    number: "06",
    title: "Lead by Example",
    text: "Represent the values of the Guild through your actions rather than your words alone.",
  },
];

function About() {
  return (
    <>
      <Navbar />

      <main>
        <section className="about-hero">
          <div className="home-container about-hero-content">
            <p className="section-label">About the Guild</p>

            <h1>Character Before Status</h1>

            <p>
              Gentlemen&apos;s Guild is built around the belief that being a
              gentleman is not a title. It is a standard demonstrated through
              character, discipline, responsibility and the way a man treats
              others.
            </p>
          </div>
        </section>

        <section className="about-story">
          <div className="home-container about-story-grid">
            <div>
              <p className="section-label">Our Philosophy</p>
              <h2>The Man Behind the Image</h2>
            </div>

            <div className="about-story-copy">
              <p>
                Style, success and confidence can all be valuable, but they
                mean little without character behind them.
              </p>

              <p>
                The Guild exists to promote a broader standard of manhood:
                one that values discipline without arrogance, ambition without
                selfishness and confidence without disrespect.
              </p>

              <p>
                We believe a strong man continues learning, takes
                responsibility for his life and understands that personal
                success carries a responsibility to positively influence
                others.
              </p>
            </div>
          </div>
        </section>

        <section className="about-principles">
          <div className="home-container">
            <div className="section-heading">
              <p className="section-label">Our Foundation</p>
              <h2>What the Guild Represents</h2>
            </div>

            <div className="about-principles-grid">
              <article>
                <span>01</span>
                <h3>Brotherhood</h3>
                <p>
                  Strong men benefit from strong relationships built on trust,
                  accountability and mutual respect.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Growth</h3>
                <p>
                  Development is continuous. There is always another skill to
                  build, perspective to gain or standard to improve.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Excellence</h3>
                <p>
                  Excellence means approaching both major responsibilities and
                  small details with intention and care.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="honor-section">
          <div className="home-container">
            <div className="honor-heading">
              <div>
                <p className="section-label">The Standard</p>
                <h2>Our Code of Honor</h2>
              </div>

              <p>
                Every community is defined by the standards its members are
                willing to uphold.
              </p>
            </div>

            <div className="honor-list">
              {codeOfHonor.map((rule) => (
                <article className="honor-item" key={rule.number}>
                  <span>{rule.number}</span>

                  <h3>{rule.title}</h3>

                  <p>{rule.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-quote">
          <div className="home-container about-quote-content">
            <p className="section-label">The Principle</p>

            <blockquote>
              A gentleman is measured not simply by what he achieves, but by
              the standards he maintains while achieving it.
            </blockquote>
          </div>
        </section>

        <section className="about-closing">
          <div className="home-container about-closing-content">
            <p className="section-label">The Guild</p>

            <h2>Build Yourself. Strengthen Your Circle.</h2>

            <p>
              The aim is simple: create a community where men encourage one
              another to live with greater purpose, discipline and character.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default About;