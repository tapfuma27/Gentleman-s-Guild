export interface Article {
  id: number;
  slug: string;
  category: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  introduction: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  closing: string;
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "modern-gentleman",
    category: "Leadership",
    title: "The Modern Gentleman",
    subtitle:
      "Character, responsibility and purpose matter more than appearances.",
    date: "August 2026",
    readTime: "5 min read",

    introduction:
      "The idea of a gentleman has changed over time, but its foundation remains remarkably consistent. A gentleman is ultimately defined less by what he owns or how he dresses and more by the standards that guide his behaviour.",

    sections: [
      {
        heading: "Character Before Appearance",
        paragraphs: [
          "Presentation matters. The way a man dresses, speaks and carries himself communicates something about the standards he maintains. But appearance without character is ultimately superficial.",
          "Integrity becomes visible through consistency. It is demonstrated when a man keeps his word, accepts responsibility and behaves according to his principles even when doing so is inconvenient.",
        ],
      },
      {
        heading: "Responsibility",
        paragraphs: [
          "A mature man understands that his decisions have consequences. Instead of constantly searching for someone or something to blame, he focuses on what remains within his control.",
          "Responsibility does not mean believing that every circumstance is your fault. It means recognising your ability to decide how you respond to those circumstances.",
        ],
      },
      {
        heading: "Respect Without Weakness",
        paragraphs: [
          "Respect should never be confused with passivity. A gentleman can disagree, establish boundaries and defend his principles while still treating another person with dignity.",
          "True confidence removes much of the need for unnecessary aggression. A secure man does not need to diminish others in order to establish his own worth.",
        ],
      },
      {
        heading: "A Higher Standard",
        paragraphs: [
          "Ultimately, being a modern gentleman means voluntarily holding yourself to standards that may be higher than what circumstances demand.",
          "It is a commitment to becoming dependable, capable and intentional in the way you approach your work, relationships and responsibilities.",
        ],
      },
    ],

    closing:
      "The title of gentleman is not something a man simply gives himself. It is reflected through the standards he consistently chooses to live by.",
  },

  {
    id: 2,
    slug: "building-discipline",
    category: "Growth",
    title: "Building Discipline",
    subtitle:
      "Why consistency matters more than waiting to feel motivated.",
    date: "August 2026",
    readTime: "4 min read",

    introduction:
      "Motivation is useful, but unreliable. Some days you will feel ready to work, train or improve. Other days you will not. Discipline is what allows progress to continue regardless.",

    sections: [
      {
        heading: "Motivation Is Temporary",
        paragraphs: [
          "Motivation often appears when an idea is new or when progress is immediately visible. The difficulty comes after that initial excitement disappears.",
          "If action depends entirely on feeling motivated, consistency becomes almost impossible.",
        ],
      },
      {
        heading: "Build Systems",
        paragraphs: [
          "Discipline becomes easier when important actions are built into routines rather than repeatedly negotiated with yourself.",
          "A consistent training time, work schedule or morning routine reduces the number of decisions required to take action.",
        ],
      },
      {
        heading: "Keep Your Word to Yourself",
        paragraphs: [
          "Every commitment you keep to yourself strengthens confidence in your own ability to follow through.",
          "Start with manageable commitments and become someone who consistently does what he said he would do.",
        ],
      },
    ],

    closing:
      "Discipline is not built through one dramatic decision. It is built through hundreds of ordinary decisions made consistently.",
  },

  {
    id: 3,
    slug: "value-of-your-circle",
    category: "Brotherhood",
    title: "The Value of Your Circle",
    subtitle:
      "The people around you quietly influence the standards you accept.",
    date: "August 2026",
    readTime: "4 min read",

    introduction:
      "The people you spend significant time around influence how you think, what you consider normal and what you believe is possible.",

    sections: [
      {
        heading: "Standards Are Contagious",
        paragraphs: [
          "When the people around you consistently pursue improvement, discipline and responsibility, those behaviours gradually become normal.",
          "The opposite is also true. Environments that consistently excuse poor habits can make those habits easier to accept.",
        ],
      },
      {
        heading: "Choose Honest Relationships",
        paragraphs: [
          "Strong friendships are not built exclusively around agreement. Sometimes the most valuable person in your circle is the one willing to tell you something you would rather not hear.",
          "Accountability requires enough respect to challenge one another without turning every disagreement into conflict.",
        ],
      },
      {
        heading: "Become Valuable to Your Circle",
        paragraphs: [
          "Choosing better people is only half of the equation. You must also become the kind of person other good men want around them.",
          "Be dependable. Contribute. Celebrate the success of others and provide support when circumstances become difficult.",
        ],
      },
    ],

    closing:
      "Your circle should not merely make life more entertaining. At its best, brotherhood makes everyone involved stronger.",
  },
];