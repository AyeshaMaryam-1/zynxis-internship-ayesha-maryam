"use client";

import { cn } from "@/lib/utils";
import { BadgeProps } from "@/types";

const variantStyles = {
  default: "bg-zynxis-800 text-zynxis-300 border-zynxis-700",
  success: "bg-zynxis-success/10 text-zynxis-success border-zynxis-success/30",
  warning: "bg-zynxis-warning/10 text-zynxis-warning border-zynxis-warning/30",
  danger: "bg-zynxis-danger/10 text-zynxis-danger border-zynxis-danger/30",
  info: "bg-zynxis-accent/10 text-zynxis-accent border-zynxis-accent/30",
};

const sizeStyles = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-sm",
};

export function Badge({
  variant = "default",
  size = "sm",
  children,
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center font-medium rounded-full border",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      {children}
    </span>
  );
}
