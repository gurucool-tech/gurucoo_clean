import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Activity, ArrowRight, Bell, Calendar, Check, CheckCircle, CreditCard,
  FileText, Fingerprint, Layers, MessageCircle, TrendingUp, Users,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { m, Variants } from "framer-motion";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20book%20a%20demo%20and%20understand%20the%20platform.";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const rolloutSteps = [
  { title: "Foundation", detail: "Identity and attendance", state: "Ready" },
  { title: "Daily workflows", detail: "Timetables and alerts", state: "Next" },
  { title: "Finance", detail: "Fees, dues, and receipts", state: "Planned" },
  { title: "Assessments", detail: "Exams, grading, and reports", state: "Planned" },
];

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col overflow-hidden bg-background">
      <SEO title="The Operating Layer for Modern Educational Institutions" description="Connected operations for attendance, academics, communication, exams, fees, and reporting." canonicalPath="/" />

      {/* Section 1: Hero */}
      <section className="home-hero-composition relative overflow-hidden">
        <div className="hero-field hero-field-primary" aria-hidden="true" />
        <div className="hero-field hero-field-warm" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-14">
            <m.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-[590px]">
              <m.h1 variants={fadeInUp} className="hero-title text-foreground">
                The operating layer for <span className="text-primary">modern institutions.</span>
              </m.h1>
              <m.p variants={fadeInUp} className="mt-7 max-w-[590px] text-lg leading-8 text-muted-foreground sm:text-xl">
                Attendance, academics, communication, exams, fees, and reporting in one connected institutional operating system. Everything connected.
              </m.p>
              <m.div variants={fadeInUp} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="h-14 rounded-lg px-7 text-base">
                  <Link to="/book-demo"><Calendar className="h-5 w-5" />Book a walkthrough</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-14 rounded-lg border-primary/35 bg-white/80 px-7 text-base">
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer"><MessageCircle className="h-5 w-5 text-[#138a43]" />Contact on WhatsApp</a>
                </Button>
              </m.div>
              <m.div variants={fadeInUp} className="mt-10 flex items-center gap-4 border-l-2 border-[hsl(var(--gc-olive))] pl-4 text-sm text-[hsl(var(--gc-institutional))]">
                <span className="font-bold text-foreground">One record</span><span aria-hidden="true">·</span><span>Shared across every workflow</span>
              </m.div>
            </m.div>

            <m.div initial="hidden" animate="visible" variants={fadeInUp} className="relative lg:translate-x-4">
              <div className="hero-product-shell" data-ui="dashboard-preview">
                <div className="hero-product-topbar">
                  <div><p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/55">Institution overview</p><p className="mt-1 text-base font-semibold text-white">Monday operations</p></div>
                  <div className="connected-state"><span />Systems connected</div>
                </div>
                <div className="grid gap-3 p-4 sm:grid-cols-[1.45fr_0.8fr] sm:p-5">
                  <div className="product-main-panel">
                    <div className="flex items-start justify-between gap-4">
                      <div><p className="ui-label">Attendance pulse</p><p className="mt-2 text-3xl font-bold tracking-[-0.04em] text-[hsl(var(--gc-midnight))]">91.8%</p><p className="mt-1 text-xs text-[hsl(var(--gc-slate))]">1,246 of 1,357 marked</p></div>
                      <span className="ui-active-badge"><Check className="h-3.5 w-3.5" /> Live</span>
                    </div>
                    <div className="mt-7 flex h-28 items-end gap-2" aria-label="Attendance trend chart">
                      {[46, 62, 55, 76, 68, 88, 81, 94].map((height, index) => (
                        <div key={height + index} className="flex flex-1 items-end rounded-sm bg-[hsl(var(--gc-ice)/0.45)]" style={{ height: `${height}%` }}>
                          <div className={`w-full rounded-sm ${index === 7 ? "bg-[hsl(var(--gc-lime))]" : "bg-[hsl(var(--gc-cobalt))]"}`} style={{ height: `${Math.max(42, height - 8)}%` }} />
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 grid grid-cols-3 gap-2 bg-[hsl(var(--gc-eggshell))] p-2">
                      {[["Present", "1,246"], ["Late", "38"], ["Pending", "73"]].map(([label, value], index) => (
                        <div key={label} className={index === 2 ? "rounded-lg bg-[hsl(var(--gc-soft-yellow)/0.38)] px-3 py-2" : "px-3 py-2"}><p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[hsl(var(--gc-slate))]">{label}</p><p className="mt-1 text-base font-bold text-[hsl(var(--gc-midnight))]">{value}</p></div>
                      ))}
                    </div>
                  </div>
                  <div className="grid gap-3">
                    <div className="product-side-panel bg-[hsl(var(--gc-cobalt))] text-white"><Bell className="h-5 w-5 text-[hsl(var(--gc-lime))]" /><p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">Communication</p><p className="mt-1 text-xl font-bold">24 alerts</p><p className="mt-2 text-xs leading-5 text-white/70">Ready for parent delivery</p></div>
                    <div className="product-side-panel bg-[hsl(var(--gc-cream))]"><CreditCard className="h-5 w-5 text-[hsl(var(--gc-olive))]" /><p className="mt-5 text-[11px] font-bold uppercase tracking-[0.14em] text-[hsl(var(--gc-olive))]">Fee desk</p><p className="mt-1 text-xl font-bold text-[hsl(var(--gc-midnight))]">₹84.5k</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/80"><div className="h-full w-[72%] bg-[hsl(var(--gc-amber))]" /></div></div>
                  </div>
                </div>
              </div>
              <div className="hero-annotation hidden sm:block"><span className="h-2 w-2 rounded-full bg-[hsl(var(--gc-lime))]" />Shared institutional record</div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="home-section relative overflow-hidden bg-[hsl(var(--gc-porcelain))]">
        <div className="problem-accent-field" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeInUp} className="lg:pt-5">
              <h2 className="section-title max-w-[460px]">Fragmented systems slow the whole institution down.</h2>
              <p className="mt-6 max-w-[460px] text-lg leading-8 text-muted-foreground">Too much admin steals time from teaching. Records get scattered, and daily work runs in parallel instead of in one flow.</p>
              <p className="mt-10 hidden max-w-sm border-l-2 border-[hsl(var(--gc-olive)/0.5)] pl-4 text-sm leading-6 text-[hsl(var(--gc-olive))] lg:block">The issue is not a lack of software. It is the lack of connection between the software already shaping the day.</p>
            </m.div>
            <div className="grid gap-4 md:grid-cols-2">
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="problem-card problem-card-dark md:row-span-2">
                <div className="flex items-center justify-between"><div className="icon-surface icon-surface-lime"><Activity className="h-5 w-5" /></div><span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[hsl(var(--gc-lime))]">Visibility gap</span></div>
                <div className="mt-16"><h3 className="text-3xl font-bold tracking-[-0.035em] text-white">Scattered records</h3><p className="mt-4 max-w-md text-base leading-7 text-white/70">Academic, financial, and attendance information sits apart, slowing reporting and obscuring the full institutional picture.</p></div>
                <div className="mt-10 grid grid-cols-3 gap-2">{["Attendance", "Fees", "Academics"].map((item, index) => <div key={item} className={`problem-data-chip ${index === 1 ? "problem-data-chip-alert" : ""}`}>{item}</div>)}</div>
              </m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="problem-card bg-[hsl(var(--gc-ice)/0.42)]">
                <div className="flex items-start gap-4"><div className="icon-surface bg-white text-[hsl(var(--gc-cerulean))]"><Users className="h-5 w-5" /></div><div><h3 className="text-xl font-bold text-foreground">Reactive communication</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Parents learn about issues after the useful moment has passed.</p></div></div>
                <div className="mt-7 border-l-2 border-[hsl(var(--gc-sky))] bg-white/75 px-4 py-3 text-xs font-semibold text-[hsl(var(--gc-institutional))]">Update delayed across disconnected channels</div>
              </m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="problem-card bg-[hsl(var(--gc-cream))]">
                <div className="flex items-start gap-4"><div className="icon-surface bg-white text-[hsl(var(--gc-olive))]"><TrendingUp className="h-5 w-5" /></div><div><h3 className="text-xl font-bold text-foreground">Manual admin drag</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Reports, fees, and leave tracking repeat the same data entry across separate files.</p></div></div>
                <div className="mt-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.11em] text-[hsl(var(--gc-olive))]"><span className="h-2.5 w-2.5 bg-[hsl(var(--gc-amber))]" />Repeated work</div>
              </m.article>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Product Architecture */}
      <section className="home-section relative overflow-hidden bg-[hsl(var(--gc-eggshell))]">
        <div className="architecture-navy-field" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid gap-10 lg:grid-cols-[0.35fr_0.65fr] lg:gap-10">
            <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-intro">
              <h2 className="section-title text-white">Everything connected. One institution.</h2>
              <p className="mt-6 max-w-sm text-base leading-7 text-white/70">Six modular layers share the same institutional records, so each workflow strengthens the next.</p>
              <Link to="/product" className="text-link-light group mt-9">Explore the product<ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" /></Link>
            </m.div>
            <div className="architecture-grid">
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-card architecture-card-foundation">
                <div className="flex items-center justify-between gap-4"><div className="flex items-center gap-3"><Fingerprint className="h-5 w-5 text-primary" /><span className="ui-label">01 Foundation</span></div><span className="ui-active-badge"><span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--gc-lime))]" /> Connected</span></div>
                <h3 className="mt-9 text-2xl font-bold text-foreground">One identity layer for every role.</h3><p className="mt-3 max-w-md text-sm leading-6 text-muted-foreground">Profiles, permissions, classes, and institutional structure establish the shared base.</p>
                <div className="mt-8 grid grid-cols-[auto_1fr] items-center gap-4 rounded-lg bg-[hsl(var(--gc-eggshell))] p-4"><div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">JS</div><div><p className="text-sm font-bold text-foreground">J. Smith</p><p className="text-xs text-muted-foreground">Super Admin · Main Campus</p></div></div>
              </m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-card architecture-card-operations">
                <div className="flex items-center gap-3"><Layers className="h-5 w-5 text-[hsl(var(--gc-cerulean))]" /><span className="ui-label">02 Operations</span></div><h3 className="mt-6 text-xl font-bold text-foreground">The day, in one workflow.</h3>
                <div className="mt-6 space-y-2">{[["08:15", "Attendance locked", "Live"], ["09:00", "Physics · 10A", "Room 204"], ["10:40", "Math · 10B", "Room 112"]].map(([time, item, state], index) => <div key={time} className={`operation-row ${index === 0 ? "operation-row-active" : ""}`}><span>{time}</span><strong>{item}</strong><small>{state}</small></div>)}</div>
              </m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-card architecture-card-finance"><div className="flex items-center justify-between"><CreditCard className="h-5 w-5 text-[hsl(var(--gc-olive))]" /><span className="attention-tag">Review</span></div><p className="mt-8 ui-label">03 Finance</p><p className="mt-2 text-2xl font-bold text-foreground">₹84.5k</p><p className="mt-1 text-xs text-muted-foreground">Collections today</p><div className="mt-6 h-2 overflow-hidden rounded-full bg-white"><div className="h-full w-[72%] bg-[hsl(var(--gc-amber))]" /></div></m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-card architecture-card-comms"><div className="flex items-center gap-3"><Bell className="h-5 w-5 text-[hsl(var(--gc-lime))]" /><span className="ui-label text-white/60">04 Communication</span></div><div className="mt-8 rounded-lg bg-white/10 p-4 text-sm leading-6 text-white">Student marked present at 08:15 AM.</div><p className="mt-3 text-xs text-white/55">Parent update prepared</p></m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-card architecture-card-assessment"><div className="flex items-center gap-3"><FileText className="h-5 w-5 text-primary" /><span className="ui-label">05 Assessments</span></div><div className="mt-6 flex items-end justify-between gap-5"><div><p className="text-lg font-bold text-foreground">Unit Test 1</p><p className="mt-1 text-xs text-muted-foreground">Physics · 17/20</p></div><span className="rounded-md bg-[hsl(var(--gc-lime)/0.55)] px-3 py-1 text-xs font-bold text-[hsl(var(--gc-midnight))]">Grade A+</span></div><div className="mt-5 h-2 overflow-hidden rounded-full bg-[hsl(var(--gc-ice)/0.45)]"><div className="h-full w-[85%] bg-primary" /></div></m.article>
              <m.article initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="architecture-card architecture-card-reporting"><div className="flex items-center gap-3"><TrendingUp className="h-5 w-5 text-[hsl(var(--gc-cerulean))]" /><span className="ui-label">06 Reporting</span></div><div className="mt-7 flex h-16 items-end gap-2">{[35, 50, 43, 68, 82].map((height, index) => <div key={height} className={`flex-1 ${index === 4 ? "bg-[hsl(var(--gc-lime))]" : "bg-[hsl(var(--gc-sky))]"}`} style={{ height: `${height}%` }} />)}</div></m.article>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Rollout Model */}
      <section className="home-section relative overflow-hidden bg-[hsl(var(--gc-porcelain))]">
        <div className="rollout-warm-field" aria-hidden="true" />
        <div className="container-wide relative z-10">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="rollout-board" data-ui="rollout-dashboard">
              <div className="flex flex-col gap-4 rounded-lg bg-[hsl(var(--gc-eggshell))] p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="ui-label">Rollout plan</p><h3 className="mt-2 text-xl font-bold text-foreground">Build adoption in layers</h3></div><span className="connected-state connected-state-light"><span />Foundation active</span></div>
              <div className="mt-5 space-y-2">{rolloutSteps.map((step, index) => <div key={step.title} className={`rollout-row ${index === 0 ? "rollout-row-active" : ""}`}><div className="rollout-index">0{index + 1}</div><div className="min-w-0 flex-1"><p className="font-bold text-foreground">{step.title}</p><p className="mt-1 text-sm text-muted-foreground">{step.detail}</p></div><span className={`rollout-state rollout-state-${index}`}>{step.state}</span></div>)}</div>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">{[["People", "Aligned"], ["Data", "Shared"], ["Training", "Phased"], ["Scale", "Ready"]].map(([label, value], index) => <div key={label} className={index === 2 ? "rollout-metric rollout-metric-warm" : "rollout-metric"}><p>{label}</p><strong>{value}</strong></div>)}</div>
            </m.div>
            <m.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="max-w-[500px] lg:justify-self-end">
              <m.h2 variants={fadeInUp} className="section-title">Start where it matters. Expand when you are ready.</m.h2><m.p variants={fadeInUp} className="mt-6 text-lg leading-8 text-muted-foreground">Introduce the workflows your team needs first, then add connected layers without forcing the institution to change everything at once.</m.p>
              <m.div variants={fadeInUp} className="mt-9 space-y-4">{["Begin with the operational foundation", "Train around real daily workflows", "Expand after the first layer is working"].map((item, index) => <div key={item} className="flex items-start gap-3 text-sm font-semibold text-[hsl(var(--gc-institutional))]"><CheckCircle className={`mt-0.5 h-5 w-5 shrink-0 ${index === 1 ? "text-[hsl(var(--gc-amber))]" : "text-primary"}`} />{item}</div>)}</m.div>
            </m.div>
          </div>
        </div>
      </section>
    </div>
  );
}
