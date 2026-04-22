"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const PAGES = [
  { href: "/about",    label: "about",    desc: "The person behind it"    },
  { href: "/contact",    label: "contact",    desc: "Contact me"    },
];


interface MoreModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MoreModal({ isOpen, onClose }: MoreModalProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  /* Animate in/out */
  useEffect(() => {
  if (isOpen) {
    setVisible(true);
  } else {
    const timeout = setTimeout(() => {
      setVisible(false);
    }, 200); // match your animation duration

    return () => clearTimeout(timeout);
  }
}, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (isOpen) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  /* Lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    /* ── Backdrop ── */
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        backgroundColor: "rgba(77,70,23,0.35)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px",
        transition: "opacity 0.25s ease",
        opacity: visible ? 1 : 0,
      }}
    >
      {/* ── Card ── */}
      <div
        ref={cardRef}
        onClick={e => e.stopPropagation()}
        style={{
          width: "100%",
          maxWidth: 250,
          backgroundColor: "#FEF3E4",
          borderRadius: 16,
          border: "1px solid rgba(197,109,70,0.2)",
          overflow: "hidden",
          boxShadow: "0 24px 64px rgba(77,70,23,0.2), 0 4px 16px rgba(77,70,23,0.1)",
          transform: visible ? "translateY(0) scale(1)" : "translateY(12px) scale(0.97)",
          transition: "transform 0.28s cubic-bezier(0.34,1.56,0.64,1), opacity 0.25s ease",
          opacity: visible ? 1 : 0,
        }}
      >
        {/* ── Header strip ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 20px",
            borderBottom: "1px solid rgba(197,109,70,0.12)",
            backgroundColor: "rgba(254,207,151,0.35)",
          }}
        >

          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            style={{
              width: 34,
              height: 34,
              borderRadius: "50%",
              border: "1px solid rgba(106,42,17,0.15)",
              backgroundColor: "rgba(254,207,151,0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "var(--ember)",
              transition: "all 0.15s",
              flexShrink: 0,
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "var(--rust)";
              (e.currentTarget as HTMLButtonElement).style.color = "#FEF3E4";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "var(--rust)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(254,207,151,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "var(--ember)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(106,42,17,0.15)";
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>


        {/* ── Nav links ── */}
        <nav style={{ padding: "10px 12px" }}>
          {PAGES.map(({ href, label, desc }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 12px",
                borderRadius: 8,
                textDecoration: "none",
                transition: "background-color 0.15s",
                color: "inherit",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(197,109,70,0.1)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 6,
                    backgroundColor: "rgba(254,207,151,0.7)",
                    border: "1px solid rgba(197,109,70,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'DM Mono', monospace",
                    fontSize: 10,
                    color: "var(--rust)",
                    flexShrink: 0,
                  }}
                >
                  {label.slice(0, 2)}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontSize: 13.5,
                      fontWeight: 500,
                      color: "var(--shadow)",
                      lineHeight: 1.2,
                    }}
                  >
                    {label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 10.5,
                      color: "var(--muted)",
                      opacity: 0.75,
                      lineHeight: 1.2,
                    }}
                  >
                    {desc}
                  </p>
                </div>
              </div>
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--rust)", opacity: 0.3, flexShrink: 0 }}
              >
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          ))}
        </nav>

      </div>
    </div>
  );
}