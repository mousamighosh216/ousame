// ─────────────────────────────────────────────────────────────
//  articles.ts  —  Add new articles to the ARTICLES array below.
//
//  Each article needs:
//    slug      – unique URL segment  e.g. "my-new-post"
//    tag       – category label      e.g. "Craft" | "Design" | "Engineering"
//    date      – display date        e.g. "April 5, 2025"
//    readTime  – e.g. "6 min read"
//    likes     – starting like count
//    saves     – starting save count
//    title     – headline
//    subtitle  – italic deck below headline
//    toc       – [ { id, label }, … ]   must match section ids in content
//    content   – array of blocks (see block types below)
//
//  Content block types:
//    { type: "lead",     text }
//    { type: "section",  id, heading }
//    { type: "para",     text }
//    { type: "callout",  emoji, text }
//    { type: "quote",    text, author }
//    { type: "list",     items: string[] }
//    { type: "stats",    items: { n, label, icon }[] }
//    { type: "criteria", items: { icon, title, desc }[] }
// ─────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "lead";     text: string }
  | { type: "section";  id: string; heading: string }
  | { type: "para";     text: string }
  | { type: "callout";  emoji: string; text: string }
  | { type: "quote";    text: string; author: string }
  | { type: "list";     items: string[] }
  | { type: "stats";    items: { n: string; label: string; icon: string }[] }
  | { type: "criteria"; items: { icon: string; title: string; desc: string }[] };

export interface Article {
  slug:     string;
  tag:      string;
  date:     string;
  readTime: string;
  likes:    number;
  saves:    number;
  title:    string;
  subtitle: string;
  toc:      { id: string; label: string }[];
  content:  ContentBlock[];
}

// ─────────────────────────────────────────────────────────────
//  ADD YOUR ARTICLES HERE ↓
// ─────────────────────────────────────────────────────────────
export const ARTICLES: Article[] = [
  {
    slug:     "on-building-things-that-last",
    tag:      "Craft",
    date:     "March 12, 2025",
    readTime: "8 min read",
    likes:    284,
    saves:    91,
    title:    "On Building Things That Last",
    subtitle: "What erosion teaches us about software architecture — patience, pressure, and the beauty of simplicity. Good code, like sandstone, reveals its structure over time.",
    toc: [
      { id: "s1", label: "The erosion metaphor"    },
      { id: "s2", label: "Layers of abstraction"   },
      { id: "s3", label: "The three principles"    },
      { id: "s4", label: "Where most projects fail"},
      { id: "s5", label: "Building for the long run"},
      { id: "s6", label: "What to do next"         },
    ],
    content: [
      { type: "lead", text: "If you've ever stood at the rim of Bryce Canyon and looked down at those spires — hoodoos, they're called — you've seen what patience does to stone. Wind, water, and a few million years. What remains is honest. There's no unnecessary mass, no false structure. Only what could survive the test." },

      { type: "section", id: "s1", heading: "The erosion metaphor" },
      { type: "para", text: "Software doesn't erode in geological time, but it does erode. Usage is the wind. Requirements are the rain. The teams that come after you are the freeze-thaw cycles that crack what wasn't solid to begin with." },
      { type: "para", text: "Most code doesn't survive contact with real users. It wasn't designed badly — it was designed for the wrong kind of permanence. We optimise for shipping, not for what happens after shipping." },
      { type: "callout", emoji: "🪨", text: "The goal isn't to write code that never changes. It's to write code where change is safe — where you can reshape it without it crumbling." },
      { type: "para", text: "What survives isn't the cleverest code. It's the clearest. The thing that's easy to understand is easy to fix, easy to extend, and easy to let go of when the time comes." },

      { type: "section", id: "s2", heading: "Layers of abstraction" },
      { type: "para", text: "Canyon walls are legible. You can look at them and see the story — each stratum a different era, a different environment. Good codebases work the same way. Each layer of abstraction should have a clear purpose, and each layer should only know what it needs to know." },
      { type: "para", text: "When you violate that — when your database queries bleed into your UI components, when your business logic is scattered across twelve files — you create something that can't be understood without holding all of it in your head at once." },
      { type: "stats", items: [
        { n: "73%",    label: "of dev time is spent reading code", icon: "📖" },
        { n: "10×",    label: "more time reading than writing",     icon: "✍️" },
        { n: "4 min",  label: "average to understand a function",   icon: "⏱"  },
        { n: "Simple", label: "beats clever, every time",           icon: "✨" },
      ]},
      { type: "para", text: "The discipline of layers is the discipline of context. Every time you reach across an abstraction boundary, ask yourself: is this a shortcut, or is this the right design? Usually it's a shortcut." },

      { type: "section", id: "s3", heading: "The three principles" },
      { type: "para", text: "After two years of studying systems that survived — and autopsying those that didn't — I've settled on three things that matter most:" },
      { type: "criteria", items: [
        { icon: "🔍", title: "Legibility over cleverness",   desc: "Write for the person who'll read this at 2am with a production incident. That person might be you." },
        { icon: "✂️", title: "Ruthless scope reduction",     desc: "Every feature you don't ship is a feature you never have to maintain. The question isn't what to build — it's what not to build." },
        { icon: "🔗", title: "Loose coupling, tight cohesion", desc: "Things that change together should live together. Things that change independently should never know about each other." },
      ]},
      { type: "callout", emoji: "🌄", text: "The best architecture decision I ever made was removing 4,000 lines of code. The system got faster, simpler, and easier to understand overnight." },

      { type: "section", id: "s4", heading: "Where most projects fail" },
      { type: "para", text: "It's rarely a single bad decision. It's the accumulation of small shortcuts taken under deadline pressure — each one individually defensible, collectively catastrophic." },
      { type: "list", items: [
        "Skipping the abstraction layer because 'we only need this once'",
        "Copy-pasting instead of extracting a function because there's no time",
        "Leaving TODOs that become permanent fixtures of the codebase",
        "Adding configuration flags to avoid making a hard architectural decision",
        "Writing tests after the fact, if at all, because the feature ships first",
      ]},
      { type: "quote", text: "Every time you say 'we'll fix it later,' later arrives and the team is different, the context is gone, and the workaround has seventeen dependents.", author: "A pull request review, circa 2023" },

      { type: "section", id: "s5", heading: "Building for the long run" },
      { type: "para", text: "None of this means you should spend months designing the perfect system before writing a line of code. The opposite, actually. You should ship fast and refactor aggressively." },
      { type: "para", text: "The key word is aggressively. Most teams treat refactoring as optional, something to do when there's slack. There's never slack. You have to schedule it, defend it, and do it even when it feels like the project is going backwards." },
      { type: "callout", emoji: "🏔️", text: "Refactoring is not paying down debt. It's maintenance. Canyon walls don't erode into beauty — they're constantly being shaped by forces acting on them right now." },

      { type: "section", id: "s6", heading: "What to do next" },
      { type: "para", text: "If you're mid-project and reading this with a sinking feeling: that's good. Awareness is the first step. Pick one part of your codebase that you understand the worst, and spend one hour making it legible. Just one hour." },
      { type: "para", text: "If you're starting fresh: spend a day on architecture before writing application code. Draw the layers. Name the boundaries. Decide what each piece is allowed to know. You'll thank yourself in six months." },
    ],
  },

  // ── Paste your next article object here ──────────────────────
  // {
  //   slug:     "the-colour-theory-of-code",
  //   tag:      "Design",
  //   date:     "January 28, 2025",
  //   readTime: "6 min read",
  //   likes:    201,
  //   saves:    67,
  //   title:    "The Colour Theory of Code",
  //   subtitle: "...",
  //   toc: [ … ],
  //   content: [ … ],
  // },
];