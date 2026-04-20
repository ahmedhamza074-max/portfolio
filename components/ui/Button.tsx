import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer",
        variant === "primary" &&
          "bg-accent text-white hover:bg-accent-hover hover:-translate-y-px active:translate-y-0",
        variant === "secondary" &&
          "bg-transparent text-text border border-border hover:border-accent hover:bg-[#1e2230] hover:-translate-y-px active:translate-y-0",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
