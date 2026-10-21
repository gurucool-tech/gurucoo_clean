import { Link } from "react-router-dom";
import { ReactNode } from "react";
import { ArrowDownRight, Check, Network, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem { label: string; href?: string; }

export type PageHeaderVariant = "editorial" | "product" | "dark" | "warm" | "conversion" | "legal";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  eyebrow?: string;
  breadcrumbs?: BreadcrumbItem[];
  badge?: ReactNode;
  alignment?: "center" | "left";
  align?: "center" | "left";
  variant?: PageHeaderVariant;
  className?: string;
}

const variantDetail: Record<PageHeaderVariant, { label: string; notes: string[] }> = {
  editorial: { label: "Institutional context", notes: ["Clear ownership", "Connected records"] },
  product: { label: "Operating architecture", notes: ["One record", "Shared workflows"] },
  dark: { label: "System perspective", notes: ["Role-based access", "Coordinated operations"] },
  warm: { label: "Staged progress", notes: ["Start with priority", "Expand deliberately"] },
  conversion: { label: "Working session", notes: ["Your current process", "A practical next step"] },
  legal: { label: "Policy record", notes: ["Plain language", "Current terms"] },
};

function HeaderVisual({ variant }: { variant: PageHeaderVariant }) {
  const detail = variantDetail[variant];

  if (variant === "legal") return null;

  if (variant === "product") {
    return (
      <div className="hero-motif hero-motif--system" aria-label="Connected operating architecture">
        <div className="hero-motif__top"><Network aria-hidden="true" /><span>{detail.label}</span></div>
        <div className="system-map" aria-hidden="true">
          <span className="system-map__rail" />
          <span className="system-map__node system-map__node--a">Identity</span>
          <span className="system-map__node system-map__node--b">Operations</span>
          <span className="system-map__node system-map__node--c">Records</span>
        </div>
        <p><i />Connected institutional operating system</p>
      </div>
    );
  }

  if (variant === "conversion") {
    return (
      <div className="hero-motif hero-motif--session" aria-label="Walkthrough structure">
        <div className="session-card__head"><CalendarDays aria-hidden="true" /><span>{detail.label}</span></div>
        {detail.notes.map((note) => <div className="session-row" key={note}><Check aria-hidden="true" /><span>{note}</span></div>)}
        <div className="session-line"><span /><span /><span /></div>
      </div>
    );
  }

  if (variant === "warm") {
    return (
      <div className="hero-motif hero-motif--stages" aria-label="Staged rollout model">
        <p>{detail.label}</p>
        {detail.notes.map((note, index) => <div className="stage-row" key={note}><span>{index + 1}</span><strong>{note}</strong><ArrowDownRight aria-hidden="true" /></div>)}
        <div className="stage-accent">Ready when your institution is.</div>
      </div>
    );
  }

  if (variant === "dark") {
    return (
      <div className="hero-motif hero-motif--planes" aria-label="Coordinated institutional layers">
        <div className="plane plane--back"><span><small>Shared structure</small>Institution</span></div>
        <div className="plane plane--middle"><span><small>Daily continuity</small>{detail.notes[1]}</span></div>
        <div className="plane plane--front"><i /><strong><small>Controlled visibility</small>{detail.notes[0]}</strong></div>
      </div>
    );
  }

  return (
    <aside className="hero-motif hero-motif--editorial" aria-label={`${detail.label} overview`}>
      <div className="editorial-mark"><span>GuruCool</span><ArrowDownRight aria-hidden="true" /></div>
      <p>{detail.label}</p>
      {detail.notes.map((note) => <div className="editorial-note" key={note}><span aria-hidden="true" /><strong>{note}</strong></div>)}
    </aside>
  );
}

export function PageHeader({ title, subtitle, description, eyebrow, breadcrumbs, badge, alignment, align, variant = "editorial", className }: PageHeaderProps) {
  const resolvedAlignment = alignment || align || "left";
  const displayDesc = description || subtitle;

  return (
    <section className={cn("inner-page-hero", `inner-page-hero--${variant}`, className)}>
      <div className="inner-page-hero__grid" aria-hidden="true" />
      <div className="inner-page-hero__field" aria-hidden="true" />
      <div className="site-canvas inner-page-hero__canvas">
        <div className={cn("inner-page-hero__copy", resolvedAlignment === "center" && "inner-page-hero__copy--center")}>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="inner-page-hero__breadcrumbs">
              <ol>
                {breadcrumbs.map((crumb, index) => (
                  <li key={`${crumb.label}-${index}`}>
                    {crumb.href ? <Link to={crumb.href}>{crumb.label}</Link> : <span aria-current="page">{crumb.label}</span>}
                    {index < breadcrumbs.length - 1 && <span aria-hidden="true">/</span>}
                  </li>
                ))}
              </ol>
            </nav>
          )}
          {badge && <div className="inner-page-hero__badge">{badge}</div>}
          {eyebrow && <p className="inner-page-hero__eyebrow"><span aria-hidden="true" />{eyebrow}</p>}
          <h1>{title}</h1>
          {displayDesc && <p className="inner-page-hero__description">{displayDesc}</p>}
        </div>
        <HeaderVisual variant={variant} />
      </div>
    </section>
  );
}
