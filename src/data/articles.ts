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

  {
  id: 4,
  slug: "professional-reputation",
  category: "Career",
  title: "Building a Professional Reputation",
  subtitle:
    "Your reputation is built through consistency long before you need it.",
  date: "August 2026",
  readTime: "5 min read",

  introduction:
    "A strong professional reputation is rarely created by one impressive moment. It is built gradually through the way you communicate, follow through, solve problems and treat the people around you.",

  sections: [
    {
      heading: "Competence Creates Trust",
      paragraphs: [
        "People remember whether they can rely on you. Consistently producing good work, meeting expectations and improving your skills creates confidence in your ability.",
        "You do not need to know everything. Professional credibility often comes from being honest about what you do not know while showing that you are willing and able to find the answer.",
      ],
    },
    {
      heading: "Small Behaviours Matter",
      paragraphs: [
        "Arriving prepared, replying clearly, meeting deadlines and following through on promises may seem basic, but these behaviours quickly distinguish dependable people from unreliable ones.",
        "Professionalism is often less about dramatic gestures and more about repeatedly getting the fundamentals right.",
      ],
    },
    {
      heading: "How You Treat People Travels",
      paragraphs: [
        "Reputations move through networks. The way you treat colleagues, clients, junior staff and people who cannot immediately benefit you often becomes part of how others describe you.",
        "Respect and competence together create a reputation that is far more valuable than either one alone.",
      ],
    },
    {
      heading: "Think Long Term",
      paragraphs: [
        "Avoid sacrificing your reputation for a short-term advantage. Trust takes time to build and can disappear quickly.",
        "Make decisions with the understanding that the professional world is often smaller and more connected than it appears.",
      ],
    },
  ],

  closing:
    "A strong reputation is a form of professional capital. Build it carefully through competence, reliability and character.",
},

{
  id: 5,
  slug: "difficult-path",
  category: "Mindset",
  title: "Choosing the Difficult Path",
  subtitle:
    "Growth often begins where convenience ends.",
  date: "August 2026",
  readTime: "4 min read",

  introduction:
    "Many of the choices that improve our lives are uncomfortable in the moment. Training instead of staying in bed, having a difficult conversation or choosing long-term progress over immediate satisfaction all require us to accept some form of discomfort.",

  sections: [
    {
      heading: "Comfort Has a Cost",
      paragraphs: [
        "Comfort is not inherently bad. Rest and enjoyment are necessary. The problem begins when avoiding discomfort becomes the main principle behind your decisions.",
        "A life organised entirely around what is easiest can quietly reduce your confidence, resilience and willingness to take meaningful risks.",
      ],
    },
    {
      heading: "Discomfort Builds Evidence",
      paragraphs: [
        "Every time you voluntarily do something difficult, you create evidence that you can tolerate discomfort and still perform.",
        "That evidence becomes confidence. Not confidence based on positive thinking, but confidence based on experience.",
      ],
    },
    {
      heading: "Choose the Right Difficulty",
      paragraphs: [
        "The goal is not to make life unnecessarily difficult. Difficulty is valuable when it serves a meaningful purpose.",
        "Choose challenges that strengthen useful skills, improve your health, deepen your relationships or move you toward goals that matter.",
      ],
    },
    {
      heading: "Make Hard Things Normal",
      paragraphs: [
        "Repeated exposure changes your relationship with discomfort. What initially felt demanding can eventually become part of your normal standard.",
        "This is how discipline grows: the difficult action slowly becomes the expected action.",
      ],
    },
  ],

  closing:
    "Do not search for difficulty simply because it is difficult. Search for worthwhile goals and become comfortable doing the difficult things required to achieve them.",
},

{
  id: 6,
  slug: "standards-small-things",
  category: "Lifestyle",
  title: "Standards in the Small Things",
  subtitle:
    "The details you repeatedly ignore eventually become part of your character.",
  date: "August 2026",
  readTime: "4 min read",

  introduction:
    "People often think personal standards are revealed only in major decisions. In reality, they are visible every day in much smaller behaviours: how you speak, whether you arrive on time, how you present yourself and whether you do what you said you would do.",

  sections: [
    {
      heading: "Details Reveal Habits",
      paragraphs: [
        "One untidy room or one late arrival does not define a person. Repeated patterns, however, reveal what someone has accepted as normal.",
        "Small behaviours matter because they often reflect the systems and standards operating underneath them.",
      ],
    },
    {
      heading: "Presentation Communicates",
      paragraphs: [
        "Presentation is not about expensive clothing or trying to impress everyone around you. It is about showing that you take yourself, the situation and other people seriously.",
        "Cleanliness, appropriate clothing and basic attention to detail communicate respect before you say a word.",
      ],
    },
    {
      heading: "Reliability Is Built Quietly",
      paragraphs: [
        "Keeping small promises builds the habit of reliability. Returning a call when you said you would, arriving when expected and completing ordinary responsibilities all contribute to trust.",
        "People rarely decide that someone is dependable because of one extraordinary act. They decide after seeing consistency over time.",
      ],
    },
    {
      heading: "Raise the Baseline",
      paragraphs: [
        "The goal is not perfection. It is to gradually raise what you consider acceptable from yourself.",
        "When higher standards become normal, they require less deliberate effort because they become part of your identity and routine.",
      ],
    },
  ],

  closing:
    "Excellence is rarely hidden in one dramatic act. More often, it is visible in the ordinary things a person consistently refuses to neglect.",
},
];

