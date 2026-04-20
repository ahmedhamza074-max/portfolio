import { SectionLabel, Tag, AnimateIn } from "@/components/ui";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section className="pb-20">
      <AnimateIn>
        <SectionLabel>Skills</SectionLabel>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Tag
              key={skill.label}
              label={skill.label}
              color={skill.color}
              borderColor={skill.borderColor}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      </AnimateIn>
    </section>
  );
}
