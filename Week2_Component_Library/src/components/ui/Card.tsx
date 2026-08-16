"use client";

import { cn } from "@/lib/utils";
import { CardProps } from "@/types";

export function Card({
  title,
  description,
  children,
  footer,
  headerAction,
  isHoverable = false,
  className,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-zynxis-900 border border-zynxis-800 rounded-zynxis overflow-hidden",
        "transition-all duration-200",
        isHoverable && "hover:border-zynxis-700 hover:shadow-zynxis-lg hover:-translate-y-0.5",
        className
      )}
    >
      {(title || headerAction) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-zynxis-800">
          <div>
            {title && (
              <h3 className="text-base font-semibold text-zynxis-100">{title}</h3>
            )}
            {description && (
              <p className="text-sm text-zynxis-500 mt-0.5">{description}</p>
            )}
          </div>
          {headerAction && <div>{headerAction}</div>}
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
      {footer && (
        <div className="px-5 py-3 border-t border-zynxis-800 bg-zynxis-950/50">
          {footer}
        </div>
      )}
    </div>
  );
}
