"use client";
import { useState } from "react";
import Link from "next/link";

const EXPERIENCE = [
  {
    role: "Senior Product Designer & Engineer",
    period: "Jan 2024 – Present",
    company: "Terrain Studio",
    location: "Remote",
    tags: ["Figma", "Next.js", "TypeScript", "Tailwind", "Postgres"],
    highlights: [
      "Leading design and frontend for a spatial data platform serving 3 enterprise clients",
      "Architected a component system used across 6 product surfaces with zero design-debt backlog",
      "Reduced onboarding time from 4 days to under 6 hours via a redesigned setup experience",
      "Established design–engineering handoff process adopted by the whole product team",
      "Collaborated directly with founders on product strategy and go-to-market positioning",
    ],
  },
  {
    role: "Frontend Engineer",
    period: "Apr 2023 – Dec 2023",
    company: "Driftwork Labs",
    location: "Bengaluru",
    tags: ["React", "Node.js", "GraphQL", "WebSockets", "Redis"],
    highlights: [
      "Built real-time collaboration features for a document editing product with 12k MAU",
      "Shipped a GraphQL subscription layer reducing UI data latency from 800ms to under 80ms",
      "Owned the mobile-responsive redesign, improving mobile retention by 34%",
    ],
  },
  {
    role: "Design Engineering Intern",
    period: "Oct 2022 – Mar 2023",
    company: "Krenno Labs",
    location: "Remote",
    tags: ["Next.js", "GSAP", "Figma", "CI/CD"],
    highlights: [
      "Built and animated marketing pages using Next.js and GSAP for a Series A SaaS startup",
      "Contributed to CI/CD pipeline improvements that cut deploy time by half",
      "Prototyped 3 exploratory product directions that directly influenced the 2023 roadmap",
    ],
  },
];

const PROJECTS = [
  {
    title: "Terrain Mapper",
    tags: ["WebGL", "TypeScript", "Three.js", "GLSL"],
    status: "Live",
    summary:
      "An interactive browser tool for visualising geological formations in 3D using WebGL shaders and satellite elevation data. Used by geologists at two research institutes.",
    points: [
      "Custom GLSL shaders for real-time terrain colouring by elevation and slope",
      "Processes 100MB+ GeoTIFF files in-browser with zero server round-trips",
      "Sub-16ms frame render time on mid-range hardware via aggressive LOD tuning",
      "Open source — 420 stars, 38 forks on GitHub",
    ],
    link: "#",
  },
  {
    title: "Driftwood CMS",
    tags: ["Rust", "SQLite", "React", "Tauri"],
    status: "Open Source",
    summary:
      "A lightweight headless CMS for writers — offline-first, no subscriptions, no cloud lock-in. Your content lives where you decide.",
    points: [
      "Rust core with SQLite storage; ships as a single binary with zero dependencies",
      "React editor with live MDX preview and custom shortcode support",
      "Tauri desktop wrapper — <8MB install, works fully offline",
      "1,200 downloads in 6 weeks post-launch",
    ],
    link: "#",
  },
  {
    title: "Heatline",
    tags: ["Go", "ClickHouse", "WebSockets", "D3.js"],
    status: "Live",
    summary:
      "Real-time monitoring dashboard for industrial IoT sensors. Processes 50k+ events/sec with sub-100ms latency across three manufacturing plants.",
    points: [
      "Go ingestion service handling 50k events/sec with backpressure-aware queuing",
      "ClickHouse for time-series storage with custom retention and compaction policies",
      "WebSocket push to D3-powered dashboard — updates visible within 80ms of sensor event",
      "99.98% uptime over 14 months in production",
    ],
    link: "#",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech. Computer Science & Engineering",
    institution: "National Institute of Technology",
    location: "Bhopal, India",
    period: "2019 – 2023",
    grade: "8.9 / 10.0",
  },
];

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Live:         { bg: "rgba(106,97,27,0.12)",  color: "var(--sage)"  },
  "Open Source":{ bg: "rgba(197,109,70,0.12)", color: "var(--rust)"  },
};

function Tag({ children }: { children: string }) {
  return (
    <span
      style={{
        display: "inline-flex",
        padding: "3px 9px",
        borderRadius: 2,
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        color: "var(--ember)",
        backgroundColor: "rgba(106,42,17,0.07)",
        border: "1px solid rgba(106,42,17,0.1)",
      }}
    >
      {children}
    </span>
  );
}

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

function ExperienceCard({ job }: { job: typeof EXPERIENCE[0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="py-8 border-b"
      style={{ borderColor: "rgba(106,42,17,0.1)" }}
    >
      {/* Header row */}
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Period */}
        <div className="sm:w-44 shrink-0">
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11.5,
              color: "var(--rust)",
              opacity: 0.6,
            }}
          >
            {job.period}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(18px,2.5vw,22px)",
              fontWeight: 600,
              color: "var(--shadow)",
              marginBottom: 4,
            }}
          >
            {job.role}
          </h3>
          <div className="flex items-center gap-2 mb-4">
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: "var(--rust)",
                opacity: 0.8,
              }}
            >
              {job.company}
            </span>
            <span style={{ color: "rgba(106,42,17,0.3)", fontSize: 12 }}>·</span>
            <span
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 12,
                color: "var(--muted)",
                opacity: 0.7,
              }}
            >
              {job.location}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {job.tags.map(t => <Tag key={t}>{t}</Tag>)}
          </div>

          {/* Toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11.5,
              color: "var(--rust)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              letterSpacing: "0.04em",
              opacity: 0.75,
            }}
          >
            {open ? "— hide" : "+ details"}
          </button>

          {/* Expanded bullets */}
          {open && (
            <ul
              className="mt-4"
              style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}
            >
              {job.highlights.map((h, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                  style={{ fontSize: 14, lineHeight: 1.75, color: "var(--ember)", opacity: 0.85 }}
                >
                  <span style={{ color: "var(--rust)", flexShrink: 0, marginTop: 2, opacity: 0.5 }}>→</span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: typeof PROJECTS[0] }) {
  const [open, setOpen] = useState(false);
  const s = STATUS_STYLE[project.status] || STATUS_STYLE["Live"];
  return (
    <div
      className="py-8 border-b"
      style={{ borderColor: "rgba(106,42,17,0.1)" }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Status */}
        <div className="sm:w-44 shrink-0">
          <span
            style={{
              display: "inline-flex",
              padding: "3px 10px",
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 600,
              fontFamily: "'DM Mono', monospace",
              backgroundColor: s.bg,
              color: s.color,
            }}
          >
            {project.status}
          </span>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(18px,2.5vw,22px)",
                fontWeight: 600,
                color: "var(--shadow)",
              }}
            >
              {project.title}
            </h3>
            <a
              href={project.link}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: 13,
                color: "var(--rust)",
                opacity: 0.5,
                textDecoration: "none",
                flexShrink: 0,
                transition: "opacity .15s",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = ".5"; }}
            >
              ↗
            </a>
          </div>

          <p style={{ fontSize: 14, lineHeight: 1.78, color: "var(--ember)", opacity: 0.78, marginBottom: 12 }}>
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.map(t => <Tag key={t}>{t}</Tag>)}
          </div>

          <button
            onClick={() => setOpen(o => !o)}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11.5,
              color: "var(--rust)",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              letterSpacing: "0.04em",
              opacity: 0.75,
            }}
          >
            {open ? "— hide" : "+ details"}
          </button>

          {open && (
            <ul
              className="mt-4"
              style={{ paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}
            >
              {project.points.map((p, i) => (
                <li
                  key={i}
                  className="flex gap-3"
                  style={{ fontSize: 14, lineHeight: 1.75, color: "var(--ember)", opacity: 0.85 }}
                >
                  <span style={{ color: "var(--rust)", flexShrink: 0, marginTop: 2, opacity: 0.5 }}>→</span>
                  {p}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Work() {
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
          work
        </p>
        <h1
          className="font-serif font-medium leading-tight mb-5 animate-fade-up stagger-2"
          style={{
            fontSize: "clamp(36px,5.5vw,58px)",
            color: "var(--shadow)",
          }}
        >
          Professional
          <br />
          <em style={{ color: "var(--rust)" }}>experience &amp; craft.</em>
        </h1>
        <p
          className="text-base max-w-xl mb-8 animate-fade-up stagger-3"
          style={{ color: "var(--ember)", opacity: 0.78, lineHeight: 1.75 }}
        >
          Designer-engineer hybrid with a focus on interface craft and frontend
          systems. I care equally about how things look, how they work, and how
          the code that runs them holds up over time.
        </p>
        <a
          href="#"
          className="inline-flex items-center gap-2 animate-fade-up stagger-4"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12.5,
            letterSpacing: "0.05em",
            color: "var(--light)",
            backgroundColor: "var(--ember)",
            padding: "10px 20px",
            borderRadius: 2,
            textDecoration: "none",
            transition: "opacity .15s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = ".85"; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
        >
          download résumé ↓
        </a>
      </section>

      {/* ── Experience ── */}
      <section className="pt-14 pb-4">
        <SectionLabel>experience</SectionLabel>
        <div>
          {EXPERIENCE.map(job => (
            <ExperienceCard key={job.company} job={job} />
          ))}
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="pt-16 pb-4">
        <SectionLabel>featured projects</SectionLabel>
        <div>
          {PROJECTS.map(p => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
        <div className="pt-8">
          <Link
            href="/projects"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 12,
              color: "var(--rust)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              opacity: 0.75,
              transition: "opacity .15s",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = "1"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.opacity = ".75"; }}
          >
            all projects →
          </Link>
        </div>
      </section>

      {/* ── Education ── */}
      <section className="pt-16 pb-20">
        <SectionLabel>education</SectionLabel>
        {EDUCATION.map(edu => (
          <div
            key={edu.institution}
            className="flex flex-col sm:flex-row sm:items-start gap-4 py-8 border-b"
            style={{ borderColor: "rgba(106,42,17,0.1)" }}
          >
            <div className="sm:w-44 shrink-0">
              <span
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: 11.5,
                  color: "var(--rust)",
                  opacity: 0.6,
                }}
              >
                {edu.period}
              </span>
            </div>
            <div className="flex-1">
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  fontWeight: 600,
                  color: "var(--shadow)",
                  marginBottom: 4,
                }}
              >
                {edu.degree}
              </h3>
              <div className="flex items-center gap-2 mb-3">
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "var(--rust)", opacity: 0.8 }}>
                  {edu.institution}
                </span>
                <span style={{ color: "rgba(106,42,17,0.3)" }}>·</span>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 12, color: "var(--muted)", opacity: 0.7 }}>
                  {edu.location}
                </span>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  padding: "3px 10px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontFamily: "'DM Mono', monospace",
                  backgroundColor: "rgba(106,97,27,0.1)",
                  color: "var(--sage)",
                }}
              >
                GPA {edu.grade}
              </span>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
