import { Link } from "react-router-dom";
import { ReactNode } from "react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: ReactNode;
}

export function PageHeader({ title, subtitle, breadcrumbs, badge }: PageHeaderProps) {
  return (
    <section className="page-header-hero py-20 relative overflow-hidden">
      {/* Subtle dark overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-transparent pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Breadcrumbs */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="text-sm font-medium mb-6">
              {breadcrumbs.map((crumb, index) => (
                <span key={index}>
                  {crumb.href ? (
                    <Link 
                      to={crumb.href} 
                      className="text-white/75 hover:text-white/95 hover:underline transition-colors"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white">{crumb.label}</span>
                  )}
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2 text-white/60">/</span>
                  )}
                </span>
              ))}
            </nav>
          )}

          {/* Optional Badge */}
          {badge && <div className="mb-6">{badge}</div>}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight mb-4 leading-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="text-lg sm:text-xl text-white/85 font-medium max-w-[60ch] mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
