import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  className?: string;
  /** Use 'narrow' for content-focused sections (max-w-5xl), 'default' for standard (max-w-6xl), 'wide' for full content (max-w-7xl) */
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
    narrow: "max-w-5xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
  }[size];

  return (
    <section className={cn(background)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
