import { SectionLabel, Tag, AnimateIn } from "@/components/ui";
import { experiences } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="experience" className="pb-20">
      <AnimateIn>
        <SectionLabel>Experience</SectionLabel>
      </AnimateIn>

      <div className="relative">
        {experiences.map((exp, i) => (
          <AnimateIn
            key={`${exp.company}-${i}`}
            delay={i * 60}
            className="timeline-item"
          >
            <div className="relative pl-6 pb-10">
              {/* Vertical line */}
              {i < experiences.length - 1 && (
                <div
                  className="absolute left-0 top-3 bottom-0 w-px"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(to bottom, #3b82f6, #232734 80%)"
                        : "linear-gradient(to bottom, #232734, #232734)",
                  }}
                />
              )}

              {/* Dot */}
              <div
                className={cn(
                  "absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full border-2",
                  exp.current
                    ? "bg-accent border-bg shadow-[0_0_8px_2px_#3b82f640]"
                    : "bg-[#232734] border-subtle",
                )}
              />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                <div>
                  <p className="text-accent text-sm font-medium hover:underline cursor-default">
                    {exp.company}{" "}
                    <span className="text-text-dim font-normal">
                      · {exp.location}
                    </span>
                  </p>
                  <h3 className="font-display font-bold text-text text-base mt-0.5">
                    {exp.role}
                  </h3>
                </div>
                <span className="font-mono text-xs text-text-dim whitespace-nowrap shrink-0 mt-0.5">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-dim text-sm leading-relaxed mb-1">
                {exp.description}
              </p>
              {/* Bullets */}
              <ul className="list-disc list-inside text-text-dim text-sm leading-relaxed mb-3">
                {exp.bullets.map((b,i) => <li key={i}>{b}</li>)}
              </ul>
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {exp.tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
