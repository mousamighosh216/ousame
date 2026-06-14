import Link from "next/link";

const STACK = [
  {
    label: "Frontend",
    tools: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
  {
    label: "Backend",
    tools: ["Node.js", "Go"],
  },
  {
    label: "Infrastructure",
    tools: ["Docker", "Vercel", "Cloudflare", "GitHub Actions", "Prometheus"],
  },
];

const PHILOSOPHY = [
  {
    icon: "◎",
    title: "Depth over breadth",
    body: "Knowing not just how to use a tool, but how it works underneath. I'd rather understand one thing completely than skim ten things shallowly.",
  },
  {
    icon: "◈",
    title: "Clarity over cleverness",
    body: "The best code is the code the next person can read without asking you questions. I optimise for legibility first, performance second.",
  },
  {
    icon: "◉",
    title: "Design is a decision",
    body: "Every spacing choice, every colour, every word is a decision. I treat them all seriously. Good design isn't decoration — it's the product.",
  },
  {
    icon: "◍",
    title: "Finish things",
    body: "Shipping something imperfect is almost always better than perfecting something unshipped. I've learned to value done over ideal.",
  },
];

const NOW = [
  { label: "building",  value: "A minimal design system toolkit for small teams"   },
  { label: "reading",   value: "The Timeless Way of Building — Christopher Alexander" },
  { label: "listening", value: "Nils Frahm, Ólafur Arnalds, Jon Hopkins"             },
  { label: "based in",  value: "Bhopal, India"                                       },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-3 mb-10">
      <span
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 10,
          letterSpacing: "1.8px",
          textTransform: "uppercase" as const,
          color: "var(--rust)",
        }}
      >
        {children}
      </span>
      <span className="flex-1 border-t" style={{ borderColor: "rgba(106,42,17,0.12)" }} />
    </div>
  );
}

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-6">

      {/* ── Header ── */}
      <section
        className="pt-20 pb-14 border-b"
        style={{ borderColor: "rgba(106,42,17,0.12)" }}
      >
        <p
          className="font-mono text-xs tracking-widest mb-4 animate-fade-up stagger-1"
          style={{ color: "var(--rust)" }}
        >
          about
        </p>
        <h1
          className="font-serif font-medium leading-tight mb-5 animate-fade-up stagger-2"
          style={{ fontSize: "clamp(36px,5.5vw,58px)", color: "var(--shadow)" }}
        >
          The person
          <br />
          <em style={{ color: "var(--rust)" }}>behind the work.</em>
        </h1>
        <p
          className="text-base max-w-xl animate-fade-up stagger-3"
          style={{ color: "var(--ember)", opacity: 0.78, lineHeight: 1.78 }}
        >
          The journey, the tools, and the philosophy behind what I build.
        </p>
      </section>

      {/* ── Identity card + Now snapshot ── */}
      <section className="py-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Identity card */}
          <div
            className="p-8 animate-fade-up stagger-1"
            style={{
              backgroundColor: "rgba(254,232,200,0.55)",
              border: "1px solid rgba(106,42,17,0.12)",
              borderRadius: 4,
            }}
          >
            {/* Avatar placeholder */}
            {/* <div
              style={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                background: "linear-gradient(135deg, var(--warm), var(--rust))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 24,
                marginBottom: 18,
                border: "3px solid rgba(255,255,255,0.6)",
              }}
            >
              
            </div> */}
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "var(--shadow)",
                marginBottom: 3,
              }}
            >
              Mousami Ghosh
            </h2>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 11.5,
                color: "var(--rust)",
                letterSpacing: "0.05em",
                marginBottom: 16,
                opacity: 0.8,
              }}
            >
              designer · developer · maker
            </p>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.78,
                color: "var(--ember)",
                opacity: 0.8,
              }}
            >
              I work at the overlap of art and engineering —
              building interfaces that are considered, purposeful, and built to
              last. Currently open to freelance projects and full-time roles.
            </p>
          </div>

          {/* Now snapshot */}
          <div className="animate-fade-up stagger-2">
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 10,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "var(--rust)",
                marginBottom: 16,
              }}
            >
              right now
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {NOW.map(({ label, value }) => (
                <div
                  key={label}
                  className="flex items-start gap-4 py-4 border-b"
                  style={{ borderColor: "rgba(106,42,17,0.1)" }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      color: "var(--muted)",
                      opacity: 0.6,
                      width: 72,
                      flexShrink: 0,
                      paddingTop: 2,
                    }}
                  >
                    {label}
                  </span>
                  <span
                    style={{
                      fontSize: 14,
                      color: "var(--ember)",
                      lineHeight: 1.65,
                      opacity: 0.88,
                    }}
                  >
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="py-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <SectionLabel>my journey</SectionLabel>
        <div className="max-w-2xl">
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(16px,2.3vw,19px)",
              fontStyle: "italic",
              lineHeight: 1.8,
              color: "var(--ember)",
              marginBottom: 20,
            }}
          >
            I didn&apos;t come to design through art school, or to code through
            computer science. I came to both through a simple compulsion: I wanted
            to make things, and I didn&apos;t want to depend on anyone else to
            make them.
          </p>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.88,
              color: "var(--ember)",
              opacity: 0.82,
              marginBottom: 16,
            }}
          >
            I started to code when I was in 12th standard, when my CS teacher tasked us to make a project, A Management System though that project took more time than it was intented to but that was when I realised I need to learn coding, besides code I love art. So now I am trying to find a way to integrate Art with Technology.
          </p>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.88,
              color: "var(--ember)",
              opacity: 0.82,
              marginBottom: 16,
            }}
          >
            From there: College provided me a stage to learn and grow still a long way to go. Building
            real products for real users with real constraints. Each one taught me
            something the theory never could — usually something painful, always
            something valuable.
          </p>
          <p
            style={{
              fontSize: 15.5,
              lineHeight: 1.88,
              color: "var(--ember)",
              opacity: 0.82,
            }}
          >
            Today I&apos;m focused on the craft of it: writing code that&apos;s a
            pleasure to read, designing interfaces that feel inevitable, and
            shipping things that hold up. I document what I learn, open-source
            what I build, and try to leave things better than I found them.
          </p>
        </div>
      </section>

      {/* ── Stack ── */}
      <section className="py-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <SectionLabel>stack &amp; tools</SectionLabel>
        <p
          className="mb-10 max-w-lg"
          style={{ fontSize: 14.5, color: "var(--ember)", opacity: 0.72, lineHeight: 1.7 }}
        >
          I believe in choosing the right tool for the job. These are the ones
          I reach for most often — the ones I know well enough to bend.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {STACK.map((group, i) => (
            <div
              key={group.label}
              className="p-6 animate-fade-up"
              style={{
                backgroundColor: "rgba(254,232,200,0.4)",
                border: "1px solid rgba(106,42,17,0.1)",
                borderRadius: 4,
                animationDelay: `${i * 0.08}s`,
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "1.6px",
                  textTransform: "uppercase",
                  color: "var(--rust)",
                  marginBottom: 14,
                }}
              >
                {group.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {group.tools.map(tool => (
                  <span
                    key={tool}
                    style={{
                      display: "inline-flex",
                      padding: "5px 10px",
                      borderRadius: 2,
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 12,
                      color: "var(--ember)",
                      backgroundColor: "rgba(254,207,151,0.7)",
                      border: "1px solid rgba(106,42,17,0.12)",
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="py-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <SectionLabel>philosophy</SectionLabel>
        <p
          className="mb-10 max-w-lg"
          style={{ fontSize: 14.5, color: "var(--ember)", opacity: 0.72, lineHeight: 1.7 }}
        >
          A few principles I keep coming back to. Not rules — more like
          recurring realisations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px" style={{ border: "1px solid rgba(106,42,17,0.1)", borderRadius: 4, overflow: "hidden" }}>
          {PHILOSOPHY.map((item, i) => (
            <div
              key={item.title}
              className="p-7 animate-fade-up"
              style={{
                backgroundColor: i % 2 === 0
                  ? "rgba(254,232,200,0.45)"
                  : "rgba(254,207,151,0.25)",
                borderRight: i % 2 === 0 ? "1px solid rgba(106,42,17,0.1)" : "none",
                borderBottom: i < 2 ? "1px solid rgba(106,42,17,0.1)" : "none",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              {/* <span
                style={{
                  display: "block",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 22,
                  color: "var(--rust)",
                  marginBottom: 10,
                  opacity: 0.6,
                }}
              >
                {item.icon}
              </span> */}
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 17,
                  fontWeight: 600,
                  color: "var(--shadow)",
                  marginBottom: 8,
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "var(--ember)",
                  opacity: 0.78,
                }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14">
        <div
          className="p-8 text-center animate-fade-up"
          style={{
            backgroundColor: "rgba(106,42,17,0.05)",
            border: "1px solid rgba(106,42,17,0.12)",
            borderRadius: 4,
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              letterSpacing: "1.8px",
              textTransform: "uppercase",
              color: "var(--rust)",
              marginBottom: 10,
            }}
          >
            open to work
          </p>
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(20px,3vw,28px)",
              fontWeight: 600,
              color: "var(--shadow)",
              marginBottom: 10,
            }}
          >
            Let&apos;s build something together.
          </h3>
          <p
            style={{
              fontSize: 14.5,
              color: "var(--ember)",
              opacity: 0.72,
              maxWidth: 420,
              margin: "0 auto 24px",
              lineHeight: 1.7,
            }}
          >
            I&apos;m available for freelance projects, full-time roles, and the
            occasional interesting conversation.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                padding: "10px 22px",
                backgroundColor: "var(--ember)",
                color: "var(--light)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12.5,
                letterSpacing: "0.05em",
                textDecoration: "none",
                borderRadius: 2,
                transition: "opacity .15s",
              }}
            >
              get in touch →
            </Link>
            <Link
              href="/work"
              style={{
                display: "inline-flex",
                padding: "10px 22px",
                border: "1px solid rgba(106,42,17,0.25)",
                color: "var(--ember)",
                fontFamily: "'DM Mono', monospace",
                fontSize: 12.5,
                letterSpacing: "0.05em",
                textDecoration: "none",
                borderRadius: 2,
                transition: "opacity .15s",
              }}
            >
              view work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
