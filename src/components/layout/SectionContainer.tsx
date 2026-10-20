import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  /** Semantic canvases: reading, editorial, standard, and product-wide. */
  size?: "narrow" | "default" | "wide";
  /** Add background color class like 'bg-muted/30' */
  background?: string;
}

export function SectionContainer({
  children,
  className,
  size = "default",
  background,
}: SectionContainerProps) {
  const maxWidthClass = {
    narrow: "max-w-[780px]",
    default: "max-w-[1240px]",
    wide: "max-w-[1520px]",
  }[size];

  return (
    <section className={cn("section-container", background)} data-canvas-size={size}>
      <div className="site-canvas">
        <div className={cn(maxWidthClass, "mx-auto", className)}>
          {children}
        </div>
      </div>
    </section>
  );
}

/**
 * A dedicated CTA row component with proper spacing for use under page headers
 * Clean, minimal design - no card/container background
 */
interface CTARowProps {
  children: ReactNode;
  className?: string;
}

export function CTARow({ children, className }: CTARowProps) {
  return (
    <div className="py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
