import { SectionLabel, Tag, Badge, AnimateIn } from "@/components/ui";
import { projects } from "@/lib/data";

function ExternalLinkIcon() {
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
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="pb-20">
      <AnimateIn>
        <SectionLabel>Projects</SectionLabel>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <AnimateIn key={project.name} delay={i * 80}>
            <div className="group h-full bg-card border border-border rounded-xl p-6 hover:border-accent/20 hover:bg-[#1e2230] hover:-translate-y-0.5 transition-all duration-250">
              {/* Title row */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="font-display font-bold text-text text-base leading-snug">
                  {project.name}
                </h3>
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-dim hover:text-accent transition-colors duration-200 shrink-0 mt-0.5"
                    aria-label={`View ${project.name}`}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-text-dim text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Achievement badge */}
              <div className="mb-4">
                <Badge variant={project.badgeColor}>{project.badge}</Badge>
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
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
