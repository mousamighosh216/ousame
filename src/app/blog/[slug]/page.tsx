"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import UTrail from "@/components/ui/Utrails";

const G = {
  sand:      "#FECF97",
  light:     "#FEE8C8",
  warm:      "#F5B97A",
  rust:      "#C56D46",
  rustLight: "#E8A07A",
  ember:     "#6A2A11",
  sage:      "#6A611B",
  shadow:    "#4D4617",
  muted:     "#9A6B58",
  border:    "#F0D0A8",
};

// ── Article data ────────────────────────────────────────────────
const ARTICLE = {
  tag: "Craft", readTime: "8 min read", date: "March 12, 2025",
  title: "On Building Things That Last",
  subtitle: "What erosion teaches us about software architecture — patience, pressure, and the beauty of simplicity. Good code, like sandstone, reveals its structure over time.",
  toc: [
    { id: "s1", label: "The erosion metaphor" },
    { id: "s2", label: "Layers of abstraction" },
    { id: "s3", label: "The three principles" },
    { id: "s4", label: "Where most projects fail" },
    { id: "s5", label: "Building for the long run" },
    { id: "s6", label: "What to do next" },
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
      { n: "73%", label: "of dev time is spent reading code", icon: "📖" },
      { n: "10×", label: "more time reading than writing", icon: "✍️" },
      { n: "4 min", label: "average to understand a function", icon: "⏱" },
      { n: "Simple", label: "beats clever, every time", icon: "✨" },
    ]},
    { type: "para", text: "The discipline of layers is the discipline of context. Every time you reach across an abstraction boundary, ask yourself: is this a shortcut, or is this the right design? Usually it's a shortcut." },

    { type: "section", id: "s3", heading: "The three principles" },
    { type: "para", text: "After two years of studying systems that survived — and autopsying those that didn't — I've settled on three things that matter most:" },
    { type: "criteria", items: [
      { icon: "🔍", title: "Legibility over cleverness", desc: "Write for the person who'll read this at 2am with a production incident. That person might be you." },
      { icon: "✂️", title: "Ruthless scope reduction", desc: "Every feature you don't ship is a feature you never have to maintain. The question isn't what to build — it's what not to build." },
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
};

const RELATED = [
  { tag: "Design",      slug: "colour-theory-of-code",      title: "The Colour Theory of Code",           read: "6 min", likes: 201 },
  { tag: "Engineering", slug: "sqlite-in-production",       title: "SQLite in Production: A Love Letter",  read: "11 min", likes: 178 },
  { tag: "Design",      slug: "stopped-using-figma",        title: "Why I Stopped Using Figma for a Month", read: "5 min", likes: 144 },
];

const TAG_COLORS: Record<string, { c: string; bg: string }> = {
  Craft:       { c: G.rust,  bg: G.light },
  Design:      { c: G.sage,  bg: "#F0F4E8" },
  Engineering: { c: G.ember, bg: "#FEE8C8" },
};

// ── Styles injected once ────────────────────────────────────────
const INJECT = `
@keyframes fadeUp  { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
@keyframes blobAnim{ 0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%} 50%{border-radius:40% 60% 45% 55%/60% 40% 55% 45%} }
.toc-btn{display:block;width:100%;text-align:left;font-size:13px;color:${G.muted};padding:7px 12px;border-radius:6px;border:none;border-left:2px solid transparent;cursor:pointer;transition:all .15s;font-family:'DM Mono',monospace;background:none;letter-spacing:.02em}
.toc-btn:hover,.toc-btn.on{color:${G.rust};background:${G.light};border-left-color:${G.rust}}
.share-btn{display:inline-flex;align-items:center;gap:6px;padding:7px 15px;border-radius:20px;border:1px solid ${G.border};background:#fff;cursor:pointer;font-size:13px;font-weight:500;color:${G.ember};transition:all .15s;font-family:'Outfit',sans-serif}
.share-btn:hover,.share-btn.on{border-color:${G.rust};color:${G.rust};background:${G.light}}
.related-card{background:#fff;border-radius:16px;border:1.5px solid ${G.border};overflow:hidden;cursor:pointer;transition:all .22s;text-decoration:none;display:block}
.related-card:hover{transform:translateY(-4px);box-shadow:0 14px 36px rgba(106,42,17,.12);border-color:${G.warm}}
::-webkit-scrollbar{width:4px}::-webkit-scrollbar-thumb{background:${G.warm};border-radius:4px}
`;

// ── Reading progress bar ────────────────────────────────────────
function ProgressBar() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      setPct(Math.min(100, (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100));
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 3, background: `${G.border}88`, zIndex: 999 }}>
      <div style={{ height: "100%", width: `${pct}%`, background: `linear-gradient(90deg,${G.warm},${G.rust})`, transition: "width .1s linear", borderRadius: "0 3px 3px 0" }} />
    </div>
  );
}

// ── Table of contents ───────────────────────────────────────────
function TOC({ items, activeId, onJump }: { items: typeof ARTICLE.toc; activeId: string; onJump: (id: string) => void }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: `1.5px solid ${G.border}`, padding: "16px 13px" }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: G.rust, marginBottom: 10 }}>In this article</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map(item => (
          <button key={item.id} className={`toc-btn${activeId === item.id ? " on" : ""}`} onClick={() => onJump(item.id)}>
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ── Stat cards ──────────────────────────────────────────────────
function StatCards({ items }: { items: { n: string; label: string; icon: string }[] }) {
  return (
    <div style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 18, padding: "20px", margin: "26px 0" }}>
      <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: G.rust, marginBottom: 16 }}>By the numbers</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 }}>
        {items.map((s, i) => (
          <div key={i} style={{ textAlign: "center", padding: "14px 10px", background: G.sand, borderRadius: 12, border: `1px solid ${G.border}`, animation: `fadeUp .4s ease ${i * .08}s both` }}>
            <div style={{ fontSize: 22, marginBottom: 7 }}>{s.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: G.ember, marginBottom: 4 }}>{s.n}</div>
            <div style={{ fontSize: 11.5, color: G.muted, lineHeight: 1.45 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Criteria cards ──────────────────────────────────────────────
function CriteriaCards({ items }: { items: { icon: string; title: string; desc: string }[] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "22px 0" }}>
      {items.map((item, i) => (
        <div key={i} style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 14, padding: "16px 18px", display: "flex", gap: 14, alignItems: "flex-start", animation: `fadeUp .4s ease ${i * .1}s both` }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: G.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
          <div style={{ flex: 1 }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: G.shadow, marginBottom: 4 }}>{item.title}</p>
            <p style={{ fontSize: 14, color: G.ember, lineHeight: 1.7, opacity: .85 }}>{item.desc}</p>
          </div>
          <div style={{ width: 26, height: 26, borderRadius: "50%", background: G.rust, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
        </div>
      ))}
    </div>
  );
}

// ── Callout ─────────────────────────────────────────────────────
function Callout({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div style={{ background: G.light, borderLeft: `4px solid ${G.rust}`, borderRadius: "0 14px 14px 0", padding: "18px 22px", margin: "24px 0" }}>
      <div style={{ fontSize: 20, marginBottom: 8 }}>{emoji}</div>
      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px,2.1vw,18px)", fontStyle: "italic", color: G.shadow, lineHeight: 1.65 }}>{text}</p>
    </div>
  );
}

// ── Pull quote ──────────────────────────────────────────────────
function PullQuote({ text, author }: { text: string; author: string }) {
  return (
    <div style={{ margin: "30px 0", padding: "24px 28px", background: G.light, borderRadius: 18, border: `1.5px solid ${G.border}` }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 44, color: `${G.rust}55`, lineHeight: .8, marginBottom: 10 }}>"</div>
      <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px,2.2vw,19px)", fontStyle: "italic", color: G.shadow, lineHeight: 1.65, marginBottom: 12 }}>{text}</p>
      <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: G.muted }}>— {author}</p>
    </div>
  );
}

// ── Actions bar ─────────────────────────────────────────────────
function ArticleActions({ likes, saves }: { likes: number; saves: number }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      
      <button className="share-btn" onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
        <span style={{ fontSize: 15 }}>{copied ? "✅" : "🔗"}</span> {copied ? "Copied!" : "Share"}
      </button>
    </div>
  );
}

// ── Related articles ────────────────────────────────────────────
function RelatedArticles({ articles }: { articles: typeof RELATED }) {
  return (
    <div style={{ marginTop: 48 }}>
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,2.8vw,26px)", fontWeight: 600, color: G.shadow, marginBottom: 18 }}>Keep reading</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: 14 }}>
        {articles.map((a, i) => {
          const tc = TAG_COLORS[a.tag] || TAG_COLORS["Craft"];
          return (
            <Link key={i} href={`/blog/${a.slug}`} className="related-card" style={{ animation: `fadeUp .4s ease ${i * .1}s both` }}>
              <div style={{ background: G.light, padding: "22px 20px 16px" }}>
                <span style={{ display: "inline-flex", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: tc.bg, color: tc.c, border: `1px solid ${tc.c}44` }}>{a.tag}</span>
              </div>
              <div style={{ padding: "14px 16px 18px" }}>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 14.5, fontWeight: 600, color: G.shadow, lineHeight: 1.45, marginBottom: 10 }}>{a.title}</h3>
                <div style={{ display: "flex", gap: 10 }}>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: G.muted }}>⏱ {a.read}</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: G.muted }}>🤍 {a.likes}</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// ── Bottom CTA ──────────────────────────────────────────────────
function ArticleCTA() {
  return (
    <div style={{ background: `linear-gradient(135deg,${G.ember},${G.shadow})`, borderRadius: 22, padding: "38px 30px", marginTop: 40, color: "#fff", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: -30, right: -30, width: 140, height: 140, borderRadius: "50%", background: "rgba(255,255,255,.07)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: -20, left: -20, width: 90, height: 90, borderRadius: "50%", background: "rgba(255,255,255,.05)", pointerEvents: "none" }} />
      <div style={{ position: "relative" }}>
        <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, letterSpacing: "1.6px", textTransform: "uppercase", opacity: .65, marginBottom: 10 }}>want to go deeper?</p>
        <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(18px,2.8vw,24px)", marginBottom: 10, lineHeight: 1.3 }}>Explore the full project archive</h3>
        <p style={{ fontSize: 14, opacity: .82, lineHeight: 1.75, maxWidth: 420, marginBottom: 20 }}>
          See how these principles play out in real code — browsable projects, annotated decisions, and lessons learned the hard way.
        </p>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <Link href="/projects" style={{ background: "#fff", color: G.ember, borderRadius: 40, padding: "10px 22px", fontSize: 13.5, fontWeight: 700, textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>Browse projects →</Link>
          <Link href="/contact" style={{ background: "rgba(255,255,255,.15)", color: "#fff", border: "1.5px solid rgba(255,255,255,.3)", borderRadius: 40, padding: "10px 22px", fontSize: 13.5, fontWeight: 500, textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>Get in touch</Link>
        </div>
      </div>
    </div>
  );
}

// ── Content block renderer ──────────────────────────────────────
function renderBlock(block: (typeof ARTICLE.content)[number], i: number) {
  switch (block.type) {
    case "lead":
      return <p key={i} style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(16px,2.3vw,18px)", lineHeight: 1.8, color: G.ember, marginBottom: 24, fontStyle: "italic" }}>{block.text}</p>;
    case "section":
      return <h2 key={i} id={block.id} style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(19px,2.8vw,25px)", fontWeight: 600, color: G.shadow, margin: "40px 0 14px", scrollMarginTop: 90 }}>{block.heading}</h2>;
    case "para":
      return <p key={i} style={{ fontSize: 15.5, lineHeight: 1.88, color: G.ember, marginBottom: 16, opacity: .9 }}>{block.text}</p>;
    case "callout":
      return "emoji" in block ? <Callout key={i} emoji={block.emoji!} text={block.text!} /> : null;
    case "stats":
      return "items" in block ? <StatCards key={i} items={block.items as { n: string; label: string; icon: string }[]} /> : null;
    case "criteria":
      return "items" in block ? <CriteriaCards key={i} items={block.items as { icon: string; title: string; desc: string }[]} /> : null;
    case "quote":
      return "author" in block ? <PullQuote key={i} text={block.text!} author={block.author!} /> : null;
    case "list":
      return (
        <ul key={i} style={{ paddingLeft: 18, marginBottom: 18 }}>
          {"items" in block && (block.items as string[]).map((item, j) => (
            <li key={j} style={{ fontSize: 15, lineHeight: 1.8, color: G.ember, marginBottom: 6, opacity: .88 }}>{item}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

// ── Page ────────────────────────────────────────────────────────
export default function BlogArticle() {
  const [activeId, setActiveId] = useState("");

  // Inject CSS once
  useEffect(() => {
    const el = document.createElement("style");
    el.textContent = INJECT;
    document.head.appendChild(el);
    return () => { document.head.removeChild(el); };
  }, []);

  // Active section tracking
  useEffect(() => {
    const ob = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    ARTICLE.toc.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) ob.observe(el);
    });
    return () => ob.disconnect();
  }, []);

  const jumpTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  const tc = TAG_COLORS[ARTICLE.tag] || TAG_COLORS["Craft"];

  return (
    <div style={{ minHeight: "100vh", fontFamily: "'Outfit',sans-serif", color: G.ember }}>
      <ProgressBar />

      {/* ── Hero ── */}
      <div
        style={{
        padding: "64px 24px 48px",
        borderBottom: `1px solid var(--border)`,
        position: "relative",
        overflow: "hidden",
      }}
      >
    {/* 🔥 Background (UTrail) */}
    <div
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <UTrail
        className="-mt-5" 
        width={280}
        height={300}
        lineWidth={15}
        scale={0.9}
        opacity={0.18}
      />
    </div>
        {/* Blob decoration */}
        {/* <div style={{
          position: "absolute", width: 280, height: 280,
          background: `${G.warm}44`,
          top: -60, right: -20,
          animation: "blobAnim 8s ease-in-out infinite",
          borderRadius: "60% 40% 55% 45%/50% 60% 40% 50%",
          pointerEvents: "none",
        }} /> */}
        <div style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
          {/* Breadcrumb */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <Link href="/blog" style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: G.muted, textDecoration: "none" }}>writing</Link>
            <span style={{ color: G.muted, opacity: .5 }}>→</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: G.rust }}>{ARTICLE.tag.toLowerCase()}</span>
          </div>
          {/* Meta */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ display: "inline-flex", padding: "3px 12px", borderRadius: 20, fontSize: 11.5, fontWeight: 600, background: tc.bg, color: tc.c, border: `1px solid ${tc.c}44` }}>{ARTICLE.tag}</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: G.muted }}>⏱ {ARTICLE.readTime}</span>
            <span style={{ color: G.muted, opacity: .4 }}>·</span>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: G.muted }}>{ARTICLE.date}</span>
          </div>
          {/* Title */}
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(26px,5vw,46px)", fontWeight: 700, color: G.shadow, lineHeight: 1.12, marginBottom: 14, animation: "fadeUp .5s ease" }}>
            {ARTICLE.title}
          </h1>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(14px,2.1vw,17px)", fontStyle: "italic", color: G.ember, lineHeight: 1.68, marginBottom: 24, animation: "fadeUp .5s ease .1s both", opacity: .85 }}>
            {ARTICLE.subtitle}
          </p>
          {/* Author + Actions */}
          {/* <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg,${G.warm},${G.rust})`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, border: `2px solid #fff`, boxShadow: `0 2px 8px ${G.rust}33` }}>✦</div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, color: G.shadow }}>Your Name</p>
                <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: G.muted }}>Personal Journal</p>
              </div>
            </div>
            <div style={{ height: 20, width: 1, background: G.border }} />
            <ArticleActions likes={ARTICLE.likes} saves={ARTICLE.saves} />
          </div> */}
        </div>
      </div>

      {/* ── Body ── */}
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "36px 20px 72px", display: "grid", gridTemplateColumns: "1fr 220px", gap: 40, alignItems: "start" }}>

        {/* Article body */}
        <article style={{ minWidth: 0 }}>
          <div style={{ background: "#fff", borderRadius: 20, border: `1.5px solid ${G.border}`, padding: "clamp(20px,4vw,44px)", marginBottom: 24 }}>
            {ARTICLE.content.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Bottom actions */}
          <div style={{ background: "#fff", borderRadius: 16, border: `1.5px solid ${G.border}`, padding: "16px 20px", marginBottom: 24 }}>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: G.muted, marginBottom: 10 }}>was this helpful?</p>
            <ArticleActions likes={ARTICLE.likes} saves={ARTICLE.saves} />
          </div>

          <ArticleCTA />
          <RelatedArticles articles={RELATED} />
        </article>

        {/* Sticky sidebar */}
        <aside style={{ position: "sticky", top: 80, display: "flex", flexDirection: "column", gap: 12 }}>
          <TOC items={ARTICLE.toc} activeId={activeId} onJump={jumpTo} />

          {/* At a glance */}
          <div style={{ background: "#fff", borderRadius: 16, border: `1.5px solid ${G.border}`, padding: "15px 13px" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: G.rust, marginBottom: 12 }}>At a glance</p>
            {[["⏱", ARTICLE.readTime], ["🤍", `${ARTICLE.likes} found helpful`], ["📌", `${ARTICLE.saves} saves`], ["✦", "Personal essay"]].map(([ic, lb], i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 8, fontSize: 12.5, color: G.ember, opacity: .85 }}>
                <span style={{ fontSize: 13, flexShrink: 0 }}>{ic}</span>{lb}
              </div>
            ))}
          </div>

          {/* Mini CTA */}
          <div style={{ background: `linear-gradient(135deg,${G.rust},${G.ember})`, borderRadius: 16, padding: "18px 14px", color: "#fff", textAlign: "center" }}>
            <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 600, marginBottom: 6 }}>Browse all projects</p>
            <p style={{ fontSize: 11.5, opacity: .82, lineHeight: 1.6, marginBottom: 12 }}>See the code behind the ideas.</p>
            <Link href="/projects" style={{ display: "block", background: "#fff", color: G.rust, borderRadius: 20, padding: "8px 14px", fontSize: 12.5, fontWeight: 700, textDecoration: "none", fontFamily: "'Outfit',sans-serif" }}>View projects →</Link>
          </div>

          {/* Tags */}
          <div style={{ background: "#fff", borderRadius: 16, border: `1.5px solid ${G.border}`, padding: "14px 13px" }}>
            <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: G.rust, marginBottom: 10 }}>Topics</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
              {["Architecture", "Craft", "Refactoring", "Simplicity", "Engineering", "Systems"].map(t => (
                <span key={t} style={{ display: "inline-flex", padding: "3px 9px", borderRadius: 20, fontSize: 11, fontWeight: 600, background: G.light, color: G.rust, border: `1px solid ${G.border}`, cursor: "pointer" }}>{t}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
