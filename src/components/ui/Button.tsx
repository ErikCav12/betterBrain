import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  icon?: ReactNode;
}

const variants = {
  primary:
    "bg-accent text-white hover:bg-accent/80 hover:shadow-lg hover:shadow-accent/25",
  secondary:
    "border border-border text-foreground hover:border-accent/50 hover:bg-surface",
  ghost: "text-muted hover:text-foreground hover:bg-surface",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  icon,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 font-medium transition-all rounded-sm ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {icon}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon}
      {children}
    </button>
  );
}
