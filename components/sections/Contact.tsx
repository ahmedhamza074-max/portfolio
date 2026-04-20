import { SectionLabel, StatusBadge, AnimateIn } from "@/components/ui";
import { contactItems, type ContactItem } from "@/lib/data";

// ── Icons ────────────────────────────────────────────────────────────────────
function EmailIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
      />
    </svg>
  );
}

const iconMap: Record<ContactItem["icon"], React.ReactNode> = {
  email: <EmailIcon />,
  phone: <PhoneIcon />,
  linkedin: <LinkedInIcon />,
  globe: <GlobeIcon />,
};

export function Contact() {
  return (
    <section id="contact" className="pb-24">
      <AnimateIn>
        <SectionLabel>Contact</SectionLabel>
        <StatusBadge className="mb-8 w-fit">
          Open to work — relocating to Germany
        </StatusBadge>
      </AnimateIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactItems.map((item, i) => (
          <AnimateIn key={item.label} delay={i * 60}>
            <a
              href={item.href}
              target={item.icon === "linkedin" || item.icon === "globe" ? "_blank" : undefined}
              rel={item.icon === "linkedin" || item.icon === "globe" ? "noopener noreferrer" : undefined}
              className="group block bg-card border border-border rounded-xl p-5 hover:border-accent/20 hover:bg-[#1e2230] hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Icon wrapper */}
              <div className="w-9 h-9 rounded-lg bg-[#1e2230] border border-border flex items-center justify-center mb-3 text-accent group-hover:bg-[#252a3a] group-hover:border-accent/30 transition-all duration-200">
                {iconMap[item.icon]}
              </div>
              {/* Label */}
              <p className="text-xs text-text-dim font-mono mb-1">{item.label}</p>
              {/* Value */}
              <p className="text-text text-sm font-medium break-all leading-snug">
                {item.value}
              </p>
            </a>
          </AnimateIn>
        ))}
      </div>
    </section>
  );
}
