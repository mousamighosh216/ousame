"use client";
import Link from "next/link";
import UTrail from "@/components/ui/Utrails";


const projects = [
  {
    title: "Terrain Mapper",
    desc: "An interactive tool for visualizing geological formations using WebGL and satellite data.",
    tags: ["WebGL", "TypeScript", "Three.js"],
    year: "2024",
  },
  {
    title: "Driftwood CMS",
    desc: "A lightweight headless CMS designed for writers — fast, offline-first, and distraction-free.",
    tags: ["Rust", "SQLite", "React"],
    year: "2024",
  },
];

const posts = [
  {
    title: "On Building Things That Last",
    date: "March 2025",
    excerpt:
      "What erosion teaches us about software architecture — patience, pressure, and the beauty of simplicity.",
  },
  {
    title: "The Colour Theory of Code",
    date: "January 2025",
    excerpt:
      "How thinking about design and aesthetics made me a better engineer, and vice versa.",
  },
];

export default function Home() {
  return (
    <div>
      
      {/* ── Background layer ── */}
      <UTrail 
        className="fixed -mt-10 inset-0 -z-10 pointer-events-none"
        width={300}
        height={400}
        lineWidth={15}
        opacity={0.4}
      />
      
      
      {/* ── Foreground content ── */}
      <div
        className="max-w-5xl mx-auto px-6"
        style={{
          position: "relative",
          zIndex: 10,
        }}
      >
        <div className="max-w-5xl mx-auto px-6">
      {/* ── Hero ── */}
      <section className="pt-20 pb-16 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        {/* <p
          className="font-mono text-xs tracking-widest mb-6 animate-fade-up stagger-1"
          style={{ color: "var(--rust)" }}
        >
          designer · developer · maker
        </p> */}
        <h1
          className="font-serif text-5xl sm:text-7xl font-medium leading-tight mb-8 animate-fade-up stagger-2"
          style={{ color: "var(--shadow)" }}
        >
          Mousami
          <span style={{ fontStyle: "italic", color: "var(--rust)", padding: "15px" }}>
            Ghosh.
          </span>
        </h1>
        <p
          className="text-lg  max-w-xl font-semibold leading-relaxed mb-10 animate-fade-up stagger-3"
          style={{ color: "var(--ember)", opacity: 0.8 }}
        >
          I design and build digital experiences that feel considered, purposeful,
          and human. Drawn to the space between elegant code and beautiful form.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up stagger-4">
          <Link
            href="/projects"
            className="px-6 py-3 font-mono text-sm tracking-wider transition-all duration-200"
            style={{
              backgroundColor: "var(--ember)",
              color: "var(--light)",
              borderRadius: "2px",
            }}
          >
            view work →
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 font-mono text-sm tracking-wider transition-all duration-200"
            style={{
              border: "1px solid var(--ember)",
              color: "var(--ember)",
              borderRadius: "2px",
            }}
          >
            get in touch
          </Link>
        </div>
      </section>

      {/* ── Now ── */}
      <section className="py-16 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <div className="flex items-baseline gap-3 mb-10">
          <h2
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--rust)" }}
          >
            now
          </h2>
          <span
            className="flex-1 border-t"
            style={{ borderColor: "rgba(106,42,17,0.15)" }}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              label: "Building",
              content: "A minimalist design-system toolkit for small teams who care about craft.",
            },
            {
              label: "Thinking about",
              content:
                "How typography shapes trust. Why whitespace is never wasted. Brutalism vs warmth.",
            },
          ].map(({ label, content }) => (
            <div
              key={label}
              className="p-6 animate-fade-up"
              style={{
                backgroundColor: "#fceedc",
                borderRadius: "4px",
                border: "1px solid rgba(106,42,17,0.1)",
              }}
            >
              <p
                className="font-mono text-xs tracking-widest mb-3"
                style={{ color: "var(--rust)" }}
              >
                {label}
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ember)" }}
              >
                {content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Selected Projects ── */}
      <section className="py-16 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--rust)" }}
            >
              selected work
            </h2>
            <span
              className="flex-1 border-t"
              style={{ borderColor: "rgba(106,42,17,0.15)" }}
            />
          </div>
          <Link
            href="/projects"
            className="font-mono text-xs link-underline hidden sm:block"
            style={{ color: "var(--ember)", opacity: 0.6 }}
          >
            all projects
          </Link>
        </div>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="group p-6 flex flex-col sm:flex-row sm:items-center gap-4 cursor-pointer transition-all duration-200 animate-fade-up"
              style={{
                backgroundColor: "rgba(254,232,200,0.4)",
                border: "1px solid rgba(106,42,17,0.1)",
                borderRadius: "4px",
                animationDelay: `${0.1 * i}s`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "rgba(197,109,70,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "rgba(254,232,200,0.4)";
              }}
            >
              <div className="flex-1">
                <div className="flex items-baseline gap-3 mb-1">
                  <h3
                    className="font-serif text-lg font-medium"
                    style={{ color: "var(--shadow)" }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--rust)", opacity: 0.6 }}
                  >
                    {p.year}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--ember)", opacity: 0.75 }}
                >
                  {p.desc}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 font-mono text-xs"
                    style={{
                      backgroundColor: "rgba(106,42,17,0.08)",
                      color: "var(--ember)",
                      borderRadius: "2px",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Latest Writing ── */}
      <section className="py-16">
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-baseline gap-3">
            <h2
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--rust)" }}
            >
              latest writing
            </h2>
            <span
              className="flex-1 border-t"
              style={{ borderColor: "rgba(106,42,17,0.15)" }}
            />
          </div>
          <Link
            href="/blog"
            className="font-mono text-xs link-underline hidden sm:block"
            style={{ color: "var(--ember)", opacity: 0.6 }}
          >
            all posts
          </Link>
        </div>
        <div className="space-y-6">
          {posts.map((post, i) => (
            <Link
              key={post.title}
              href="/blog"
              className="block group animate-fade-up"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-baseline gap-4 mb-1">
                <h3
                  className="font-serif text-xl font-medium group-hover:text-rust transition-colors duration-200"
                  style={{ color: "var(--shadow)" }}
                >
                  {post.title}
                </h3>
                <span
                  className="font-mono text-xs whitespace-nowrap"
                  style={{ color: "var(--rust)", opacity: 0.6 }}
                >
                  {post.date}
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ember)", opacity: 0.7 }}
              >
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
      </div>
      <div
  className="fixed bottom-6 right-6 pointer-events-none"
  style={{
    width: "320px",
    height: "320px",
    opacity: 0.5,
    zIndex: 0,
  }}
>
  <UTrail 
    className="rotate-180"
    lineWidth={15}
  />
</div>
    </div>
  );
}
