"use client";
import { useState, useEffect, useRef } from "react";
import { ARTICLES, Article, ContentBlock } from "@/lib/data/posts";
import UTrail from "@/components/ui/Utrails";
import Link from "next/link";

// ── Colour tokens ───────────────────────────────────────────────
const G = {
  light:  "#FEE8C8",
  warm:   "#F5B97A",
  rust:   "#C56D46",
  ember:  "#6A2A11",
  sage:   "#6A611B",
  shadow: "#4D4617",
  muted:  "#9A6B58",
  border: "#F0D0A8",
};

const TAG_COLOR: Record<string, { bg: string; color: string }> = {
  Craft:       { bg: "rgba(197,109,70,0.12)",  color: G.rust  },
  Design:      { bg: "rgba(106,97,27,0.12)",   color: G.sage  },
  Engineering: { bg: "rgba(106,42,17,0.1)",    color: G.ember },
};
const tagStyle = (tag: string) => TAG_COLOR[tag] ?? TAG_COLOR["Craft"];

// ── Block renderers ─────────────────────────────────────────────
function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "lead":
      return (
        <p key={i} style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(15px,2.2vw,17px)", fontStyle: "italic", lineHeight: 1.8, color: G.ember, marginBottom: 20, opacity: .9 }}>
          {block.text}
        </p>
      );
    case "section":
      return (
        <h3 key={i} id={block.id} style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(17px,2.4vw,21px)", fontWeight: 600, color: G.shadow, margin: "32px 0 12px", scrollMarginTop: 80 }}>
          {block.heading}
        </h3>
      );
    case "para":
      return (
        <p key={i} style={{ fontSize: 15, lineHeight: 1.88, color: G.ember, marginBottom: 14, opacity: .88 }}>
          {block.text}
        </p>
      );
    case "callout":
      return (
        <div key={i} style={{ background: G.light, borderLeft: `4px solid ${G.rust}`, borderRadius: "0 12px 12px 0", padding: "16px 20px", margin: "22px 0" }}>
          <div style={{ fontSize: 18, marginBottom: 7 }}>{block.emoji}</div>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(14px,2vw,16px)", fontStyle: "italic", color: G.shadow, lineHeight: 1.65 }}>{block.text}</p>
        </div>
      );
    case "quote":
      return (
        <div key={i} style={{ margin: "24px 0", padding: "20px 24px", background: G.light, borderRadius: 14, border: `1.5px solid ${G.border}` }}>
          {/* <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, color: `${G.rust}55`, lineHeight: .8, marginBottom: 8 }}>"</div> */}
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(14px,2vw,17px)", fontStyle: "italic", color: G.shadow, lineHeight: 1.65, marginBottom: 10 }}>{block.text}</p>
          <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: G.muted }}>— {block.author}</p>
        </div>
      );
    case "list":
      return (
        <ul key={i} style={{ paddingLeft: 0, listStyle: "none", margin: "16px 0", display: "flex", flexDirection: "column", gap: 7 }}>
          {block.items.map((item, j) => (
            <li key={j} style={{ display: "flex", gap: 10, fontSize: 14.5, lineHeight: 1.78, color: G.ember, opacity: .88 }}>
              <span style={{ color: G.rust, flexShrink: 0, opacity: .5, marginTop: 2 }}>→</span>
              {item}
            </li>
          ))}
        </ul>
      );
    case "stats":
      return (
        <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 10, margin: "22px 0" }}>
          {block.items.map((s, j) => (
            <div key={j} style={{ textAlign: "center", padding: "14px 10px", background: "rgba(254,207,151,0.5)", borderRadius: 10, border: `1px solid ${G.border}` }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: G.ember, marginBottom: 3 }}>{s.n}</div>
              <div style={{ fontSize: 11, color: G.muted, lineHeight: 1.4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      );
    case "criteria":
      return (
        <div key={i} style={{ display: "flex", flexDirection: "column", gap: 9, margin: "18px 0" }}>
          {block.items.map((item, j) => (
            <div key={j} style={{ background: "#fff", border: `1.5px solid ${G.border}`, borderRadius: 12, padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: G.light, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>{item.icon}</div>
              <div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 14.5, fontWeight: 600, color: G.shadow, marginBottom: 3 }}>{item.title}</p>
                <p style={{ fontSize: 13, color: G.ember, lineHeight: 1.65, opacity: .82 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      );
    default:
      return null;
  }
}

// ── Like / save actions ─────────────────────────────────────────
function ArticleActions() {
  const [copied, setCopied] = useState(false);
  const btn = (active: boolean): React.CSSProperties => ({
    display: "inline-flex", alignItems: "center", gap: 5,
    padding: "6px 13px", borderRadius: 20,
    border: `1px solid ${active ? G.rust : G.border}`,
    background: active ? G.light : "#fff",
    cursor: "pointer", fontSize: 12.5,
    fontFamily: "'Outfit',sans-serif", fontWeight: 500,
    color: active ? G.rust : G.ember,
    transition: "all .15s",
  });
  return (
    <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
      <button style={btn(copied)} onClick={() => { setCopied(true); setTimeout(() => setCopied(false), 2000); }}>
        <span style={{ fontSize: 14 }}>{copied ? "✅" : "🔗"}</span> {copied ? "Copied!" : "Share"}
      </button>
    </div>
  );
}

// ── TOC sidebar ─────────────────────────────────────────────────
function TOC({ toc, activeId, onJump }: { toc: Article["toc"]; activeId: string; onJump: (id: string) => void }) {
  return (
    <div style={{ background: "#fff", borderRadius: 14, border: `1.5px solid ${G.border}`, padding: "14px 12px", position: "sticky", top: 80 }}>
      <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 9.5, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: G.rust, marginBottom: 10 }}>In this article</p>
      {toc.map(item => (
        <button
          key={item.id}
          onClick={() => onJump(item.id)}
          style={{
            display: "block", width: "100%", textAlign: "left",
            fontFamily: "'DM Mono',monospace", fontSize: 12, padding: "6px 10px",
            borderRadius: 6, border: "none", borderLeft: `2px solid ${activeId === item.id ? G.rust : "transparent"}`,
            background: activeId === item.id ? G.light : "none",
            color: activeId === item.id ? G.rust : G.muted,
            cursor: "pointer", transition: "all .15s",
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

// ── Single article card ─────────────────────────────────────────
function ArticleCard({ article }: { article: Article }) {
  const [expanded,  setExpanded]  = useState(false);
  const [activeId,  setActiveId]  = useState("");
  const contentRef = useRef<HTMLDivElement>(null);
  const ts = tagStyle(article.tag);

  // Active section tracking (only when expanded)
  useEffect(() => {
    if (!expanded) return;
    const ob = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: "-20% 0px -70% 0px" }
    );
    article.toc.forEach(({ id }) => {
      const el = document.getElementById(`${article.slug}-${id}`);
      if (el) ob.observe(el);
    });
    return () => ob.disconnect();
  }, [expanded, article]);

  const jumpTo = (id: string) => {
    document.getElementById(`${article.slug}-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Prefix section ids so multiple articles on same page don't clash
  const prefixedContent = article.content.map(block =>
    block.type === "section" ? { ...block, id: `${article.slug}-${block.id}` } : block
  );
  const prefixedToc = article.toc.map(t => ({ ...t, id: `${article.slug}-${t.id}` }));

  return (
    <article style={{ borderBottom: `1px solid rgba(106,42,17,0.1)`, paddingBottom: 48, marginBottom: 48 }}>
      <div className="absolute -top-5 left-0 pointer-events-none">
              <UTrail
              width={280}
              height={450}
              lineWidth={16}
              opacity={0.28}
              />  
            </div>
      {/* ── Card header ── */}
      <div
        style={{
          background: expanded ? "rgba(254,232,200,0.5)" : "rgba(254,232,200,0.3)",
          border: `1px solid ${expanded ? "rgba(197,109,70,0.2)" : "rgba(106,42,17,0.1)"}`,
          borderRadius: expanded ? "12px 12px 0 0" : 12,
          padding: "24px 28px",
          transition: "all .2s",
          cursor: expanded ? "default" : "pointer",
        }}
        onClick={() => !expanded && setExpanded(true)}
      >
        {/* Meta row */}
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "wrap" }}>
          <span style={{ display: "inline-flex", padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 600, fontFamily: "'DM Mono',monospace", background: ts.bg, color: ts.color, border: `1px solid ${ts.color}33` }}>
            {article.tag}
          </span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: G.muted }}>⏱ {article.readTime}</span>
          <span style={{ color: G.muted, opacity: .4 }}>·</span>
          <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11.5, color: G.muted }}>{article.date}</span>
        </div>

        {/* Title */}
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(20px,3vw,28px)", fontWeight: 700, color: G.shadow, lineHeight: 1.18, marginBottom: 10 }}>
          {article.title}
        </h2>
        <p style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(13px,1.9vw,15px)", fontStyle: "italic", color: G.ember, lineHeight: 1.65, opacity: .82, marginBottom: 16 }}>
          {article.subtitle}
        </p>

        {/* Actions + toggle */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
          <ArticleActions />
          <button
            onClick={e => { e.stopPropagation(); setExpanded(o => !o); }}
            style={{
              fontFamily: "'DM Mono',monospace", fontSize: 11.5,
              color: G.rust, background: "none", border: `1px solid rgba(197,109,70,0.25)`,
              borderRadius: 20, padding: "5px 14px", cursor: "pointer",
              letterSpacing: "0.04em", transition: "all .15s",
            }}
          >
            {expanded ? "collapse ↑" : "read article ↓"}
          </button>
        </div>
      </div>

      {/* ── Expanded body ── */}
      {expanded && (
        <div
          ref={contentRef}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 200px",
            gap: 32,
            background: "#fff",
            border: `1px solid rgba(106,42,17,0.12)`,
            borderTop: "none",
            borderRadius: "0 0 12px 12px",
            padding: "32px 28px",
            alignItems: "start",
          }}
        >
          {/* Article text */}
          <div style={{ minWidth: 0 }}>
            {prefixedContent.map((block, i) => renderBlock(block, i))}
          </div>

          {/* Sticky TOC */}
          <TOC toc={prefixedToc} activeId={activeId} onJump={jumpTo} />
        </div>
      )}
    </article>
  );
}

// ── Page ────────────────────────────────────────────────────────
export default function BlogPage() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* Header */}
      <section className="pt-20 pb-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
  <Link
    href="/blog"
    style={{
      fontFamily: "'DM Mono',monospace",
      fontSize: '12px',
      color: '#9A6B58',
      textDecoration: 'none'
    }}
  >
    writing
  </Link>

  <span style={{ color: '#9A6B58', opacity: 0.5 }}>→</span>

  <span
    style={{
      fontFamily: "'DM Mono',monospace",
      fontSize: '12px',
      color: '#C56D46'
    }}
  >
    craft
  </span>
</div>
        <h1
          className="font-serif font-medium leading-tight mb-5 animate-fade-up stagger-2"
          style={{ fontSize: "clamp(36px,5.5vw,56px)", color: G.shadow }}
        >
          Ideas worth<br />
          <em style={{ color: G.rust }}>putting into words.</em>
        </h1>
        <p className="text-base max-w-lg animate-fade-up stagger-3" style={{ color: G.ember, opacity: .75, lineHeight: 1.75 }}>
          {ARTICLES.length} {ARTICLES.length === 1 ? "article" : "articles"} so far. Click any card to read in full.
        </p>
      </section>

      {/* Article feed */}
      <section className="pt-14">
        {ARTICLES.map(article => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>

      {/* Newsletter */}
      <section className="py-12 px-8 mb-16 animate-fade-up" style={{ backgroundColor: "rgba(106,42,17,0.05)", borderRadius: 4, border: "1px solid rgba(106,42,17,0.12)" }}>
        <p className="font-mono text-xs tracking-widest mb-2" style={{ color: G.rust }}>newsletter</p>
        <h3 className="font-serif text-2xl font-medium mb-2" style={{ color: G.shadow }}>Get new posts in your inbox.</h3>
        <p className="text-sm mb-5" style={{ color: G.ember, opacity: .65 }}>No noise. Just considered writing, when it&apos;s ready.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input type="email" placeholder="your@email.com" className="flex-1 px-4 py-2.5 font-mono text-sm outline-none"
            style={{ backgroundColor: "rgba(254,207,151,0.7)", border: "1px solid rgba(106,42,17,0.2)", color: G.ember, borderRadius: 2 }} />
          <button className="px-5 py-2.5 font-mono text-sm tracking-wider whitespace-nowrap"
            style={{ backgroundColor: G.ember, color: "#FEE8C8", borderRadius: 2 }}>
            subscribe →
          </button>
        </div>
      </section>

    </div>
  );
}