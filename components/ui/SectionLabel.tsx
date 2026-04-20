import { cn } from "@/lib/utils";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <p
      className={cn(
        "font-mono text-[0.68rem] tracking-[0.15em] uppercase text-muted mb-6",
        className
      )}
    >
      {children}
    </p>
  );
}
