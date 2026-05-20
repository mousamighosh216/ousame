import { projects } from "@/lib/data/projects";

const statusColors: Record<string, { bg: string; text: string }> = {
  Live: { bg: "rgba(106,97,27,0.12)", text: "var(--sage)" },
  "Open Source": { bg: "rgba(197,109,70,0.12)", text: "var(--rust)" },
  "iOS App": { bg: "rgba(106,42,17,0.1)", text: "var(--ember)" },
};

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <p
          className="font-mono text-xs tracking-widest mb-4 animate-fade-up stagger-1"
          style={{ color: "var(--rust)" }}
        >
          projects
        </p>
        <h1
          className=" text-5xl sm:text-6xl font-medium leading-tight mb-6 animate-fade-up stagger-2"
          style={{ color: "var(--shadow)",fontFamily: "var(--font-Merriweather)" }}
        >
          Things I&apos;ve
          <br />
          <span style={{ fontStyle: "italic", color: "var(--rust)" }}>built & shipped.</span>
        </h1>
        <p
          className="text-base max-w-lg animate-fade-up stagger-3"
          style={{ color: "var(--ember)", opacity: 0.75 }}
        >
          A collection of projects from side experiments to shipped products — each
          one a lesson in craft, constraint, and clarity.
        </p>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="space-y-px">
          {projects.map((project, i) => {
            const statusStyle = statusColors[project.status] || statusColors["Live"];
            return (
              <div
                key={project.title}
                className="group py-8 flex flex-col md:flex-row md:items-start gap-6 border-b animate-fade-up"
                style={{
                  borderColor: "rgba(106,42,17,0.1)",
                  animationDelay: `${0.08 * i}s`,
                }}
              >
                {/* Year */}
                <div className="md:w-16 shrink-0">
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--rust)", opacity: 0.5 }}
                  >
                    {project.year}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <h2
                      className="font-serif text-2xl font-medium transition-colors duration-200 group-hover:opacity-80"
                      style={{ color: "var(--shadow)" }}
                    >
                      <a
                    href={project.link}
                    style={{ color: "var(--ember)" }}
                    aria-label={`View ${project.title}`}
                  >
                    {project.title}
                  </a>
                    </h2>
                    <span
                      className="px-2 py-0.5 font-mono text-xs rounded-sm"
                      style={{
                        backgroundColor: statusStyle.bg,
                        color: statusStyle.text,
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed mb-4 max-w-xl"
                    style={{ color: "var(--ember)", opacity: 0.75 }}
                  >
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 font-mono text-xs"
                        style={{
                          backgroundColor: "rgba(106,42,17,0.06)",
                          color: "var(--ember)",
                          borderRadius: "2px",
                          border: "1px solid rgba(106,42,17,0.1)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Arrow */}
                <div className="md:w-8 shrink-0 flex md:justify-end md:pt-1">
                  <a
                    href={project.link}
                    className="font-mono text-xs transition-opacity duration-200 opacity-30 group-hover:opacity-100"
                    style={{ color: "var(--rust)" }}
                    aria-label={`View ${project.title}`}
                  >
                    
                    ↗
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 px-8 mb-12 text-center animate-fade-up"
        style={{
          backgroundColor: "rgba(254,232,200,0.5)",
          borderRadius: "4px",
          border: "1px solid rgba(106,42,17,0.12)",
        }}
      >
        <p
          className="font-mono text-xs tracking-widest mb-3"
          style={{ color: "var(--rust)" }}
        >
          got an idea?
        </p>
        <h3
          className="font-serif text-3xl font-medium mb-4"
          style={{ color: "var(--shadow)" }}
        >
          Let&apos;s build something together.
        </h3>
        <a
          href="/contact"
          className="inline-block px-6 py-3 font-mono text-sm tracking-wider transition-opacity duration-200 hover:opacity-80"
          style={{
            backgroundColor: "var(--ember)",
            color: "var(--light)",
            borderRadius: "2px",
          }}
        >
          start a conversation →
        </a>
      </section>
    </div>
  );
}
