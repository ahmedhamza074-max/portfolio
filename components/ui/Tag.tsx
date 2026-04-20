import { cn } from "@/lib/utils";

interface TagProps {
  label: string;
  color?: string;
  borderColor?: string;
  bgColor?: string;
  className?: string;
}

export function Tag({ label, color, borderColor, bgColor, className }: TagProps) {
  const style: React.CSSProperties = {};
  if (color) style.color = color;
  if (borderColor) style.borderColor = borderColor;
  if (bgColor) style.backgroundColor = bgColor;

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-[0.7rem] font-medium font-mono",
        "bg-[#1e2230] text-text-dim border border-border",
        "transition-colors duration-200",
        className
      )}
      style={style}
    >
      {label}
    </span>
  );
}
