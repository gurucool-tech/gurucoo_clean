import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string; // Legacy support
  description?: string; // New proper naming
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: ReactNode;
  alignment?: "center" | "left";
  className?: string;
}

export function PageHeader({ 
  title, 
  subtitle, 
  description,
  eyebrow,
  breadcrumbs, 
  badge,
  alignment = "center",
  className
}: PageHeaderProps) {
  const alignClass = alignment === "center" ? "mx-auto text-center" : "text-left";
  const displayDesc = description || subtitle;

  return (
    <section className={cn(
      "pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden bg-ice-panel border-b border-border/40",
      className
    )}>
      {/* Very faint, controlled layer of color for premium section identity */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("max-w-4xl", alignClass)}>
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className={cn(
              "text-sm font-medium mb-8 flex flex-wrap gap-2",
              alignment === "center" ? "items-center justify-center" : "items-center justify-start"
            )}>
              {breadcrumbs.map((crumb, index) => (
                <span key={index} className="flex items-center">
                  {crumb.href ? (
                    <Link 
                      to={crumb.href} 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground font-semibold">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-border">/</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Optional Badge / Icon block */}
          {badge && (
            <div className={cn(
              "mb-6 flex",
              alignment === "center" ? "justify-center" : "justify-start"
            )}>
              {badge}
            </div>
          )}

          {/* Eyebrow / Chip */}
          {eyebrow && (
            <div className={cn(
              "inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 mb-6 text-xs font-semibold text-primary uppercase tracking-widest",
              alignment === "center" && "mx-auto"
            )}>
              {eyebrow}
            </div>
          )}

          {/* Title */}
          <h1 className={cn(
            "text-display-sm sm:text-display-md lg:text-display-lg font-bold text-foreground tracking-tight mb-6 leading-[1.1]",
            alignment === "center" ? "mx-auto" : ""
          )}>
            {title}
          </h1>

          {/* Subtitle / Description */}
          {displayDesc && (
            <p className={cn(
              "text-body-lg sm:text-heading-sm text-muted-foreground leading-relaxed",
              alignment === "center" ? "max-w-[60ch] mx-auto" : "max-w-[65ch]"
            )}>
              {displayDesc}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
