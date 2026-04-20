import { cn } from "@/lib/utils";

interface StatusBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function StatusBadge({ children, className }: StatusBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full",
        "font-mono text-xs font-medium text-green-400",
        "border border-green-900/30 bg-green-950/60",
        className
      )}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-blink flex-shrink-0" />
      {children}
    </div>
  );
}
