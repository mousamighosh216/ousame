"use client";
import { useState } from "react";

const socials = [
  { label: "GitHub", handle: "@mousamighosh216", href: "https://github.com/mousamighosh216" },
  { label: "Twitter", handle: "@Mousami_2116", href: "https://x.com/Mousami_2116" },
  {
    label: "LinkedIn",
    handle: "in/mousamighosh",
    href: "https://linkedin.com/in/mousami-ghosh",
  },
  { label: "Email", handle: "ghoshmousami216@gmail.com", href: "mailto:ghoshmousami216@gmail.com" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (!res.ok) throw new Error("Failed");

    setSubmitted(true);
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  const inputStyle = {
    backgroundColor: "rgba(254,207,151,0.5)",
    border: "1px solid rgba(106,42,17,0.18)",
    color: "var(--ember)",
    borderRadius: "2px",
    outline: "none",
    width: "100%",
    padding: "12px 16px",
    fontFamily: "'Outfit', system-ui, sans-serif",
    fontSize: "14px",
    transition: "border-color 0.2s",
  };

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Header */}
      <section className="pt-20 pb-14 border-b" style={{ borderColor: "rgba(106,42,17,0.12)" }}>
        <p
          className="font-mono text-xs tracking-widest mb-4 animate-fade-up stagger-1"
          style={{ color: "var(--rust)" }}
        >
          contact
        </p>
        <h1
          className="font-serif text-5xl sm:text-6xl font-medium leading-tight mb-6 animate-fade-up stagger-2"
          style={{ color: "var(--shadow)" }}
        >
          Let&apos;s make
          <br />
          <span style={{ fontStyle: "italic", color: "var(--rust)" }}>
            something great.
          </span>
        </h1>
        <p
          className="text-base max-w-lg animate-fade-up stagger-3"
          style={{ color: "var(--ember)", opacity: 0.75 }}
        >
          Whether you have a project in mind, a question to ask, or just want to
          say hello — my inbox is open. I try to respond within a day or two.
        </p>
      </section>

      <section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-3 animate-fade-up stagger-1">
            {submitted ? (
              <div
                className="p-8 text-center"
                style={{
                  backgroundColor: "rgba(254,232,200,0.6)",
                  border: "1px solid rgba(106,42,17,0.15)",
                  borderRadius: "4px",
                }}
              >
                <p
                  className="font-serif text-2xl font-medium mb-2"
                  style={{ color: "var(--shadow)" }}
                >
                  Message sent.
                </p>
                <p
                  className="font-mono text-sm"
                  style={{ color: "var(--rust)", opacity: 0.7 }}
                >
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block font-mono text-xs tracking-wider mb-2"
                      style={{ color: "var(--ember)", opacity: 0.6 }}
                    >
                      name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      style={inputStyle}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label
                      className="block font-mono text-xs tracking-wider mb-2"
                      style={{ color: "var(--ember)", opacity: 0.6 }}
                    >
                      email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      style={inputStyle}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="block font-mono text-xs tracking-wider mb-2"
                    style={{ color: "var(--ember)", opacity: 0.6 }}
                  >
                    subject
                  </label>
                  <input
                    type="text"
                    placeholder="What's this about?"
                    style={inputStyle}
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  />
                </div>
                <div>
                  <label
                    className="block font-mono text-xs tracking-wider mb-2"
                    style={{ color: "var(--ember)", opacity: 0.6 }}
                  >
                    message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me what you have in mind..."
                    style={{ ...inputStyle, resize: "vertical" }}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 font-mono text-sm tracking-wider transition-opacity duration-200 hover:opacity-85"
                  style={{
                    backgroundColor: "var(--ember)",
                    color: "var(--light)",
                    borderRadius: "2px",
                  }}
                  onClick={() => console.log("BUTTON CLICKED")}
                >
                  send message →
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 animate-fade-up stagger-2">
            {/* Availability */}
            <div
              className="p-5 mb-8"
              style={{
                backgroundColor: "rgba(106,97,27,0.08)",
                border: "1px solid rgba(106,97,27,0.15)",
                borderRadius: "4px",
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: "var(--sage)" }}
                />
                <span
                  className="font-mono text-xs tracking-wider"
                  style={{ color: "var(--sage)" }}
                >
                  available for work
                </span>
              </div>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--ember)", opacity: 0.75 }}
              >
                Open to freelance projects and full-time opportunities.
              </p>
            </div>

            {/* Socials */}
            <div>
              <p
                className="font-mono text-xs tracking-widest mb-4"
                style={{ color: "var(--rust)" }}
              >
                find me online
              </p>
              <div className="space-y-4">
                {socials.map(({ label, handle, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group"
                  >
                    <span
                      className="font-mono text-xs uppercase tracking-widest"
                      style={{ color: "var(--ember)", opacity: 0.5 }}
                    >
                      {label}
                    </span>
                    <span
                      className="font-mono text-xs link-underline transition-opacity duration-200 group-hover:opacity-100"
                      style={{ color: "var(--ember)", opacity: 0.7 }}
                    >
                      {handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Response time */}
            <div
              className="mt-8 pt-6 border-t"
              style={{ borderColor: "rgba(106,42,17,0.12)" }}
            >
              <p
                className="font-mono text-xs tracking-widest mb-2"
                style={{ color: "var(--rust)" }}
              >
                response time
              </p>
              <p
                className="text-sm"
                style={{ color: "var(--ember)", opacity: 0.65 }}
              >
                Usually within{" "}
                <span style={{ color: "var(--rust)", fontWeight: 500 }}>
                  24–48 hours
                </span>{" "}
                on weekdays. Slower on weekends.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
