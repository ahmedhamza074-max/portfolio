import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "emerald" | "blue" | "violet" | "amber" | "green";
}

const variantStyles: Record<string, string> = {
  default:
    "bg-[#1e2230] text-text-dim border-border",
  emerald:
    "bg-emerald-950 text-emerald-400 border-emerald-900",
  blue:
    "bg-blue-950 text-blue-400 border-blue-900",
  violet:
    "bg-violet-950 text-violet-400 border-violet-900",
  amber:
    "bg-amber-950 text-amber-400 border-amber-900",
  green:
    "bg-[#052e16] text-green-400 border-green-900/30",
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold font-mono border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
