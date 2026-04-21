"use client";

import { StatusBadge, Button, AnimateIn } from "@/components/ui";
import { stats, heroDetails } from "@/lib/data";

// ── Icons ────────────────────────────────────────────────────────────────────
function FileIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
      />
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
      />
    </svg>
  );
}

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="pt-12 pb-20">
      {/* Status */}
      <AnimateIn delay={0}>
        <StatusBadge className="mb-6 w-fit">
          {heroDetails.statusLabel}
        </StatusBadge>
      </AnimateIn>

      {/* Name + Title */}
      <AnimateIn delay={80}>
        <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-text leading-tight mb-1">
          {heroDetails.name}
        </h1>
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl gradient-text leading-tight mb-6">
          {heroDetails.title}
        </h2>
      </AnimateIn>

      {/* Description */}
      <AnimateIn delay={160}>
        <p className="text-text-dim text-base sm:text-lg leading-relaxed max-w-2xl mb-8">
          {heroDetails.description}{" "}
          <span className="text-text">{heroDetails.subText}</span>
        </p>
      </AnimateIn>

      {/* CTA Buttons */}
      <AnimateIn delay={240}>
        <div className="flex flex-wrap gap-3 mb-14">
          <a href={heroDetails.contactMeHref}>
            <Button variant="primary">
              <FileIcon />
              Contact Me
            </Button>
          </a>
          <Button variant="secondary" onClick={scrollToProjects}>
            <EyeIcon />
            View projects
          </Button>
        </div>
      </AnimateIn>

      {/* Stats */}
      <AnimateIn delay={320}>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-surface border border-border rounded-xl px-5 py-4 hover:border-accent/20 transition-colors duration-200 group"
            >
              <p className="font-display font-bold text-3xl text-text group-hover:text-accent transition-colors duration-300">
                {stat.value}
              </p>
              <p className="text-text-dim text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
