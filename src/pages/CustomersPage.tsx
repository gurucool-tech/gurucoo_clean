import { Building2, CheckCircle, Network, Users } from "lucide-react";
import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";

const institutionTypes = [
  { type: "Independent schools", detail: "Connect core daily workflows without replacing everything at once." },
  { type: "Colleges", detail: "Coordinate academic structures, assessments, records, and reporting." },
  { type: "Tuition and coaching", detail: "Track branches, batches, attendance, fees, and communication." },
  { type: "Multi-campus groups", detail: "Create shared standards while preserving campus-level operations." },
];

const fitSignals = [
  "Records are duplicated across separate tools",
  "Leadership needs clearer operational visibility",
  "Teams need role-based access and configurable workflows",
  "The institution wants to begin with one layer and expand deliberately",
];

export default function CustomersPage() {
  return (
    <div className="flex flex-1 flex-col bg-background">
      <SEO title="Institution Fit | GuruCool" description="See which educational institutions GuruCool is designed to support." canonicalPath="/customers" />
      <PageHeader variant="dark" eyebrow="Institution fit" title="Built for Connected Institutions." description="For teams ready to replace fragmented records with coordinated daily operations." alignment="left" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Institution fit" }]} />
      <section className="section-padding relative overflow-hidden">
        <div className="structural-grid-light absolute inset-0 opacity-60" />
        <div className="site-canvas relative grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="rounded-xl bg-[hsl(var(--gc-midnight))] p-7 text-white sm:p-9">
            <Network className="h-8 w-8 text-[hsl(var(--gc-lime))]" />
            <h2 className="mt-8 text-3xl font-bold tracking-[-0.035em]">A useful fit starts with operational reality.</h2>
            <p className="mt-4 max-w-md leading-7 text-[hsl(var(--gc-ice))]">GuruCool is intended for institutions that need connected institutional records, clearer ownership, and a staged path to adoption.</p>
            <div className="mt-8 border-l-2 border-[hsl(var(--gc-olive))] pl-4 text-sm text-white/70">Representative institution types, not customer claims.</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {institutionTypes.map((item, index) => <article key={item.type} className={`rounded-xl border p-6 ${index === 0 ? "border-primary/30 bg-[hsl(var(--gc-eggshell))] sm:col-span-2" : "border-[hsl(var(--gc-ice))] bg-white"}`}><div className="flex items-center gap-3"><Building2 className="h-5 w-5 text-primary" /><span className="ui-label">Institution context</span></div><h3 className="mt-5 text-xl font-bold text-foreground">{item.type}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground">{item.detail}</p></article>)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-[hsl(var(--gc-cream)/0.5)]">
        <div className="site-canvas grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div><span className="section-label section-label-olive"><Users className="h-4 w-4" />Who it is for</span><h2 className="mt-5 text-4xl font-bold tracking-[-0.04em] text-foreground">Signals that the operating model fits.</h2></div>
          <div className="grid gap-3 sm:grid-cols-2">{fitSignals.map((signal, index) => <div key={signal} className="flex items-start gap-3 rounded-lg border border-[hsl(var(--gc-olive)/0.2)] bg-white/75 p-4"><CheckCircle className={`mt-0.5 h-5 w-5 shrink-0 ${index === 1 ? "text-[hsl(var(--gc-amber))]" : "text-primary"}`} /><p className="text-sm font-semibold leading-6 text-[hsl(var(--gc-institutional))]">{signal}</p></div>)}</div>
        </div>
      </section>
    </div>
  );
}
