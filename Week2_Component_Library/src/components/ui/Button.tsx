"use client";

import { cn } from "@/lib/utils";
import { ButtonProps } from "@/types";

const variantStyles = {
  primary:
    "bg-zynxis-accent text-white hover:bg-zynxis-accent-hover shadow-zynxis hover:shadow-glow",
  secondary:
    "bg-zynxis-800 text-zynxis-200 hover:bg-zynxis-700 border border-zynxis-700",
  ghost:
    "bg-transparent text-zynxis-400 hover:text-zynxis-200 hover:bg-zynxis-800/50",
  danger:
    "bg-zynxis-danger/10 text-zynxis-danger hover:bg-zynxis-danger/20 border border-zynxis-danger/30",
  outline:
    "bg-transparent text-zynxis-300 border border-zynxis-700 hover:border-zynxis-500 hover:text-white",
};

const sizeStyles = {
  sm: "px-3 py-1.5 text-sm gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-6 py-3 text-base gap-2.5",
};

export function Button({
  variant = "primary",
  size = "md",
  isLoading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  onClick,
  className,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={cn(
        "inline-flex items-center justify-center font-medium rounded-zynxis-sm transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-zynxis-accent/50 focus:ring-offset-2 focus:ring-offset-zynxis-950",
        "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none",
        "active:scale-[0.98]",
        variantStyles[variant],
        sizeStyles[size],
        fullWidth && "w-full",
        className
      )}
    >
      {isLoading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
}
