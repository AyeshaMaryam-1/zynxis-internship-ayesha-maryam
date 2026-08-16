"use client";

import { cn } from "@/lib/utils";
import { InputProps } from "@/types";

export function Input({
  label,
  placeholder,
  type = "text",
  error,
  disabled = false,
  required = false,
  className,
}: InputProps) {
  return (
    <div className={cn("w-full", className)}>
      {label && (
        <label className="block text-sm font-medium text-zynxis-300 mb-1.5">
          {label}
          {required && <span className="text-zynxis-danger ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={cn(
          "w-full px-4 py-2.5 bg-zynxis-950 border border-zynxis-700 rounded-zynxis-sm",
          "text-zynxis-100 placeholder:text-zynxis-600",
          "transition-all duration-200",
          "focus:outline-none focus:ring-2 focus:ring-zynxis-accent/40 focus:border-zynxis-accent",
          "hover:border-zynxis-600",
          "disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-zynxis-700",
          error && "border-zynxis-danger focus:ring-zynxis-danger/40 focus:border-zynxis-danger"
        )}
      />
      {error && (
        <p className="mt-1.5 text-sm text-zynxis-danger">{error}</p>
      )}
    </div>
  );
}
