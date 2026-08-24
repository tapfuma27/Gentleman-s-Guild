import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const faqs = [
  {
    question: "What is Gentlemen's Guild?",
    answer:
      "Gentlemen's Guild is a community focused on personal development, brotherhood, leadership, discipline and helping men raise the standards they set for themselves.",
  },
  {
    question: "Who is the Guild for?",
    answer:
      "The Guild is designed for men who are interested in growth, meaningful connection, stronger habits, leadership and becoming more intentional in the way they live and work.",
  },
  {
    question: "Do I need to be a member to access the website?",
    answer:
      "No. Many of the articles, resources and information on the website can be explored freely. Membership-related features can be introduced separately as the platform develops.",
  },
  {
    question: "What kind of content will be available?",
    answer:
      "Content will cover areas such as leadership, personal growth, discipline, career development, brotherhood, lifestyle, communication and practical self-improvement.",
  },
  {
    question: "Will there be events?",
    answer:
      "Yes. The long-term vision includes social gatherings, networking sessions, workshops, guest speakers and other experiences that allow members to connect beyond the website.",
  },
  {
    question: "Is Gentlemen's Guild only about professional development?",
    answer:
      "No. Professional development is one area, but the wider focus is on the whole person, including character, relationships, discipline, health, lifestyle and personal standards.",
  },
  {
    question: "How can I get involved?",
    answer:
      "For now, you can explore the website, read the available resources and follow future updates. Additional ways to participate can be added as the Guild grows.",
  },
  {
    question: "Can I contribute articles or ideas?",
    answer:
      "That can become part of the platform later. The aim is to eventually create room for thoughtful contributions from members whose ideas align with the values of the Guild.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />

      <main>
        <section className="faq-hero">
          <div className="home-container faq-hero-content">
            <p className="section-label">Questions & Answers</p>

            <h1>Everything You Need to Know About the Guild</h1>

            <p>
              Find answers to some of the most common questions about the
              community, its purpose and how the platform is intended to grow.
            </p>
          </div>
        </section>

        <section className="faq-section">
          <div className="home-container faq-layout">
            <div className="faq-intro">
              <p className="section-label">FAQ</p>

              <h2>Common Questions</h2>

              <p>
                If something is not covered here, more information can be added
                as the Guild develops.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    className={`faq-item ${isOpen ? "faq-open" : ""}`}
                    key={faq.question}
                  >
                    <button
                      className="faq-question"
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                    >
                      <span className="faq-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="faq-question-text">
                        {faq.question}
                      </span>

                      <span className="faq-icon">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="faq-bottom">
          <div className="home-container faq-bottom-content">
            <p className="section-label">Still Exploring?</p>

            <h2>Learn More About What the Guild Stands For</h2>

            <p>
              Visit the About page to explore the values, standards and code
              that shape the community.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default FAQ;