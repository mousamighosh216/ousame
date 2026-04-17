import Link from "next/link";

const posts = [
  {
    title: "On Building Things That Last",
    date: "March 12, 2025",
    category: "craft",
    readTime: "8 min",
    excerpt:
      "What erosion teaches us about software architecture — patience, pressure, and the beauty of simplicity. Good code, like sandstone, reveals its structure over time.",
    featured: true,
  },
  {
    title: "The Colour Theory of Code",
    date: "January 28, 2025",
    category: "design",
    readTime: "6 min",
    excerpt:
      "How thinking about design and aesthetics made me a better engineer, and vice versa. Syntax highlighting is not just a comfort — it's a cognitive tool.",
    featured: false,
  },
  {
    title: "SQLite in Production: A Love Letter",
    date: "December 5, 2024",
    category: "engineering",
    readTime: "11 min",
    excerpt:
      "Everyone told me not to use SQLite in production. I did it anyway. Here's what I learned after two years and 40 million rows.",
    featured: false,
  },
  {
    title: "Why I Stopped Using Figma for a Month",
    date: "October 18, 2024",
    category: "design",
    readTime: "5 min",
    excerpt:
      "A forced exercise in designing directly in code changed how I think about design tools, fidelity, and the gap between mockup and reality.",
    featured: false,
  },
  {
    title: "Notes on Rust After Two Years",
    date: "August 3, 2024",
    category: "engineering",
    readTime: "14 min",
    excerpt:
      "Honest reflections on the learning curve, the joys, and the moments I still reach for the docs after two years of writing Rust professionally.",
    featured: false,
  },
];

const categoryColors: Record<string, { bg: string; text: string }> = {
  craft: { bg: "rgba(106,97,27,0.12)", text: "var(--sage)" },
  design: { bg: "rgba(197,109,70,0.12)", text: "var(--rust)" },
  engineering: { bg: "rgba(106,42,17,0.1)", text: "var(--ember)" },
};

export default function Blogs() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <p
          className="font-mono text-xs tracking-widest mb-4 animate-fade-up stagger-1"
          style={{ color: "var(--rust)" }}
        >
          writing
        </p>
        <h1
          className="font-serif text-5xl sm:text-6xl font-medium leading-tight mb-6 animate-fade-up stagger-2"
          style={{ color: "var(--shadow)" }}
        >
          Ideas worth
          <br />
          <span style={{ fontStyle: "italic", color: "var(--rust)" }}>
            putting into words.
          </span>
        </h1>
        <p
          className="text-base max-w-lg animate-fade-up stagger-3"
          style={{ color: "var(--ember)", opacity: 0.75 }}
        >
          When something clicks, I write about it. Engineering, design, craft, and
          the overlap between them.
        </p>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="py-12 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
          
          <p
            className="font-mono text-xs tracking-widest mb-6 animate-fade-up"
            style={{ color: "var(--rust)" }}
          >
            featured
          </p>
          <Link
            href={`/blog/${featured.title}`} className="group block animate-fade-up stagger-1"
          >
            <div
              className="p-8 transition-all duration-300"
              style={{
                backgroundColor: "rgba(254,232,200,0.6)",
                border: "1px solid rgba(106,42,17,0.15)",
                borderRadius: "4px",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-2 py-0.5 font-mono text-xs rounded-sm"
                  style={{
                    backgroundColor: categoryColors[featured.category]?.bg,
                    color: categoryColors[featured.category]?.text,
                  }}
                >
                  {featured.category}
                </span>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--rust)", opacity: 0.5 }}
                >
                  {featured.date} · {featured.readTime} read
                </span>
              </div>
              <h2
                className="font-serif text-3xl sm:text-4xl font-medium mb-4 transition-opacity duration-200 group-hover:opacity-75"
                style={{ color: "var(--shadow)" }}
              >
                {featured.title}
              </h2>
              <p
                className="text-base leading-relaxed max-w-2xl"
                style={{ color: "var(--ember)", opacity: 0.75 }}
              >
                {featured.excerpt}
              </p>
              <p
                className="font-mono text-sm mt-6 transition-opacity duration-200 group-hover:opacity-100"
                style={{ color: "var(--rust)", opacity: 0.6 }}
              >
                read more →
              </p>
            </div>
          </Link>
        </section>
      )}

      {/* All Posts */}
      <section className="py-12">
        <div className="space-y-0 hover:bg-rgba(106,42,17,0.05)">
          {rest.map((post, i) => {
            const cat = categoryColors[post.category] || categoryColors["engineering"];
            return (
              <Link
                key={post.title}
                href={`/blog/${post.title}`}
                className="group flex flex-col sm:flex-row sm:items-start gap-4 py-7 border-b animate-fade-up"
                style={{
                  borderColor: "rgba(106,42,17,0.1)",
                  animationDelay: `${0.08 * i}s`,
                }}
              >
                {/* Date */}
                <div className="sm:w-32 flex-shrink-0">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--rust)", opacity: 0.5 }}
                  >
                    {post.date}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-1">
                    <h3
                      className="font-serif text-xl font-medium transition-colors duration-200 group-hover:opacity-80"
                      style={{ color: "var(--shadow)" }}
                    >
                      {post.title}
                    </h3>
                    <span
                      className="px-2 py-0.5 font-mono text-xs rounded-sm"
                      style={{ backgroundColor: cat.bg, color: cat.text }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed max-w-xl"
                    style={{ color: "var(--ember)", opacity: 0.7 }}
                  >
                    {post.excerpt}
                  </p>
                </div>

                {/* Read time */}
                <div className="sm:w-16 flex-shrink-0 text-right">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--rust)", opacity: 0.4 }}
                  >
                    {post.readTime}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section
        className="py-12 px-8 mb-12 animate-fade-up"
        style={{
          backgroundColor: "rgba(106,42,17,0.05)",
          borderRadius: "4px",
          border: "1px solid rgba(106,42,17,0.12)",
        }}
      >
        <p
          className="font-mono text-xs tracking-widest mb-2"
          style={{ color: "var(--rust)" }}
        >
          newsletter
        </p>
        <h3
          className="font-serif text-2xl font-medium mb-2"
          style={{ color: "var(--shadow)" }}
        >
          Get new posts in your inbox.
        </h3>
        <p
          className="text-sm mb-6"
          style={{ color: "var(--ember)", opacity: 0.65 }}
        >
          No noise. Just considered writing, when it&apos;s ready.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2.5 font-mono text-sm outline-none focus:ring-1"
            style={{
              backgroundColor: "rgba(254,207,151,0.7)",
              border: "1px solid rgba(106,42,17,0.2)",
              color: "var(--ember)",
              borderRadius: "2px",
            }}
          />
          <button
            className="px-5 py-2.5 font-mono text-sm tracking-wider transition-opacity duration-200 hover:opacity-80 whitespace-nowrap"
            style={{
              backgroundColor: "var(--ember)",
              color: "var(--light)",
              borderRadius: "2px",
            }}
          >
            subscribe →
          </button>
        </div>
      </section>
    </div>
  );
}
