"use client";
import UTrail from "@/components/ui/Utrails";

// ── Social icon wrapper ────────────────────────────────────────
function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex items-center justify-center w-9 h-9
        rounded-lg border border-[#C56D4628] bg-[#C56D460a]
        transition-all duration-200
        hover:bg-[#C56D4618] hover:border-[#C56D4650] hover:-translate-y-0.5
      "
    >
      {children}
    </a>
  );
}

// ── Main component ─────────────────────────────────────────────
export default function PortfolioFooter() {
  return (
    <footer className="relative bottom-0 overflow-hidden bg-[#F7F3EE] px-12 pt-14 pb-9">

      {/* ── Background decorations ── */}

      {/* Soft orbs */}
      <div
        className="absolute -top-20 -right-12 w-72 h-72 rounded-full pointer-events-none
          animate-[floatUp_8s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #C56D4620 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 -left-10 w-56 h-56 rounded-full pointer-events-none
          animate-[floatUpB_11s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #6A2A1115 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-6 right-28 w-36 h-36 rounded-full pointer-events-none
          animate-[floatUpC_7s_ease-in-out_1.5s_infinite]"
        style={{ background: "radial-gradient(circle, #FECF9730 0%, transparent 70%)" }}
      />

      <div
        className="absolute top-2 left-12 w-72 h-72 rounded-full pointer-events-none
          animate-[floatUp_8s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #C56D4620 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 right-10 w-56 h-56 rounded-full pointer-events-none
          animate-[floatUpB_11s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, #6A2A1115 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-6 left-28 w-36 h-36 rounded-full pointer-events-none
          animate-[floatUpC_7s_ease-in-out_1.5s_infinite]"
        style={{ background: "radial-gradient(circle, #FECF9730 0%, transparent 70%)" }}
      />
      {/* Grid lines */}
      {/* <svg
        className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.06]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" fill="none" stroke="#6A2A11" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg> */}

      {/* Rotating ring */}
      <div
        className="absolute top-5 left-1/2 -translate-x-1/2 pointer-events-none opacity-[0.13]
          animate-[spin_28s_linear_infinite]"
      >
        <svg width="380" height="380" viewBox="0 0 380 380" xmlns="http://www.w3.org/2000/svg">
          <circle cx="190" cy="190" r="180" fill="none" stroke="#C56D46" strokeWidth="0.8" strokeDasharray="6 16" />
          <circle cx="190" cy="190" r="140" fill="none" stroke="#6A2A11" strokeWidth="0.5" strokeDasharray="3 22" />
        </svg>
      </div>

      {/* U-trail canvases */}
      <div className="absolute bottom-[-30px] left-[-60px] pointer-events-none">
        <UTrail
        width={280}
        height={280}
        lineWidth={16}
        opacity={0.28}
        />  
      </div>
      <div className="absolute top-[-40px] right-[-70px] pointer-events-none scale-x-[-1]">
        <UTrail
        width={230}
        height={220}
        lineWidth={12}
        scale={0.75}
        opacity={0.18}
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10">

        {/* Top section */}
        <div className="flex flex-wrap justify-center items-start gap-20 mb-9">

          {/* Brand */}
          <div>
            <p className="text-[22px] font-semibold text-[#6A2A11] tracking-tight mb-1.5">
              Mousami Ghosh
            </p>
            <p className="text-[13px] text-[#C56D46] mb-4 opacity-90">
              Learner &amp; Developer
            </p>

            {/* Available badge */}
            <div className="inline-flex items-center gap-1.5 bg-[#C56D461a] border border-[#C56D4440] rounded-full px-3.5 py-1.5 text-[12px] text-[#712B13]">
              <span className="w-2 h-2 rounded-full bg-[#6A611B] animate-pulse flex-shrink-0" />
              Available for freelance work
            </div>

            {/* Social buttons */}
            <div className="flex gap-2.5 mt-5">
              <SocialBtn href="https://github.com/mousamighosh216"  label="GitHub">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6A2A11" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </SocialBtn>
              <SocialBtn href="www.linkedin.com/in/mousami-ghosh" label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6A2A11" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              </SocialBtn>
              <SocialBtn href="https://x.com/Mousami_2116" label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6A2A11" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M4 20L20 4" />
                </svg>
              </SocialBtn>
            </div>
          </div>

          {/* Nav columns */}
          {/* <div className="flex flex-wrap gap-12">
            {NAV.map(({ heading, links }) => (
              <div key={heading}>
                <h4 className="text-[11px] font-semibold tracking-[.08em] uppercase text-[#993C1D] mb-3">
                  {heading}
                </h4>
                {links.map((label) => (
                  <a
                    key={label}
                    href="#"
                    className="
                      block text-[13px] text-[#4A1B0Caa] mb-2.5 no-underline
                      transition-all duration-200 origin-left
                      hover:text-[#6A2A11] hover:translate-x-1
                    "
                  >
                    {label}
                  </a>
                ))}
              </div>
            ))}
          </div> */}
        </div>

        {/* Divider */}
        <hr className="border-t border-[#C56D4620] mb-5" />

        {/* Bottom bar */}
        <div className="flex flex-wrap justify-center items-center gap-4">
          <p className="text-[12px] text-[#C56D4688] mb-3">
            &copy; {new Date().getFullYear()} Mousami Ghosh. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}